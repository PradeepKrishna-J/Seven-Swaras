import { useEffect, useRef, useState } from 'react'
import { CLEFY_TRY_URL } from '../data.js'
import { CheckIcon } from '../icons.jsx'

/* One octave, C4 → C5. Swara labels assume C as Sa. */
const KEYS = [
  { id: 'C', freq: 261.63, swara: 'S', kb: 'a' },
  { id: 'C#', freq: 277.18, black: true, kb: 'w' },
  { id: 'D', freq: 293.66, swara: 'R', kb: 's' },
  { id: 'D#', freq: 311.13, black: true, kb: 'e' },
  { id: 'E', freq: 329.63, swara: 'G', kb: 'd' },
  { id: 'F', freq: 349.23, swara: 'M', kb: 'f' },
  { id: 'F#', freq: 369.99, black: true, kb: 't' },
  { id: 'G', freq: 392.0, swara: 'P', kb: 'g' },
  { id: 'G#', freq: 415.3, black: true, kb: 'y' },
  { id: 'A', freq: 440.0, swara: 'D', kb: 'h' },
  { id: 'A#', freq: 466.16, black: true, kb: 'u' },
  { id: 'B', freq: 493.88, swara: 'N', kb: 'j' },
  { id: "C'", freq: 523.25, swara: 'S', kb: 'k' },
]
const WHITE = KEYS.filter((k) => !k.black)

const LEVELS = [
  {
    id: 'Beginner',
    bpm: 100,
    blurb: 'Single notes, steady rhythm. Perfect for your first week.',
    songs: [
      { title: 'Twinkle Twinkle Little Star', notes: ['C', 'C', 'G', 'G', 'A', 'A', 'G', 'F', 'F', 'E', 'E', 'D', 'D', 'C'] },
      { title: 'Jingle Bells', notes: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'G', 'C', 'D', 'E'] },
      { title: 'Mary Had a Little Lamb', notes: ['E', 'D', 'C', 'D', 'E', 'E', 'E', 'D', 'D', 'D', 'E', 'G', 'G'] },
    ],
  },
  {
    id: 'Intermediate',
    bpm: 110,
    blurb: 'Longer melodies with leaps. Builds finger independence.',
    songs: [
      { title: 'Happy Birthday', notes: ['C', 'C', 'D', 'C', 'F', 'E', 'C', 'C', 'D', 'C', 'G', 'F'] },
      { title: 'Ode to Joy', notes: ['E', 'E', 'F', 'G', 'G', 'F', 'E', 'D', 'C', 'C', 'D', 'E', 'E', 'D', 'D'] },
      { title: 'When the Saints Go Marching In', notes: ['C', 'E', 'F', 'G', 'C', 'E', 'F', 'G', 'C', 'E', 'F', 'G', 'E', 'C', 'E', 'D'] },
    ],
  },
  {
    id: 'Advanced',
    bpm: 120,
    blurb: 'Black keys and classical phrasing, Western and Carnatic.',
    songs: [
      { title: 'Für Elise', notes: ['A', 'G#', 'A', 'G#', 'A', 'E', 'G', 'F', 'D'] },
      { title: 'Greensleeves', notes: ['D', 'F', 'G', 'A', 'A#', 'A', 'G', 'E', 'C', 'D', 'E', 'F', 'D', 'D', 'C#', 'D', 'E', 'C#'] },
      { title: 'Mayamalavagowla', notes: ['C', 'C#', 'E', 'F', 'G', 'G#', 'B', "C'", "C'", 'B', 'G#', 'G', 'F', 'E', 'C#', 'C'] },
    ],
  },
]


/** Next song in the level, then on to the next level (wrapping round). */
function nextPosition(levelIdx, songIdx) {
  if (songIdx + 1 < LEVELS[levelIdx].songs.length) return [levelIdx, songIdx + 1]
  return [(levelIdx + 1) % LEVELS.length, 0]
}

let audioCtx = null
function playTone(freq) {
  try {
    audioCtx ??= new (window.AudioContext || window.webkitAudioContext)()
    const t = audioCtx.currentTime
    const gain = audioCtx.createGain()
    gain.gain.setValueAtTime(0.0001, t)
    gain.gain.exponentialRampToValueAtTime(0.22, t + 0.012)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9)
    gain.connect(audioCtx.destination)
    for (const [mult, type] of [[1, 'triangle'], [2, 'sine']]) {
      const osc = audioCtx.createOscillator()
      osc.type = type
      osc.frequency.value = freq * mult
      osc.connect(gain)
      osc.start(t)
      osc.stop(t + 0.95)
    }
  } catch {
    // Audio is a nice-to-have; the visual feedback still works without it.
  }
}

function labelFor(id) {
  return id.replace("'", '')
}

export function PracticeDemo() {
  const [levelIdx, setLevelIdx] = useState(0)
  const [songIdx, setSongIdx] = useState(0)
  const [idx, setIdx] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [flash, setFlash] = useState(null) // { id, ok }
  const [feedback, setFeedback] = useState('Tap the glowing key to start')
  const flashTimer = useRef(null)

  const level = LEVELS[levelIdx]
  const song = level.songs[songIdx]
  const target = song.notes[idx]
  const done = idx >= song.notes.length
  const accuracy = idx + mistakes === 0 ? 100 : Math.round((idx / (idx + mistakes)) * 100)
  const [nextLevelIdx, nextSongIdx] = nextPosition(levelIdx, songIdx)
  const nextSong = LEVELS[nextLevelIdx].songs[nextSongIdx]

  useEffect(() => () => clearTimeout(flashTimer.current), [])

  const load = (lIdx, sIdx) => {
    setLevelIdx(lIdx)
    setSongIdx(sIdx)
    setIdx(0)
    setMistakes(0)
    setFlash(null)
    setFeedback('Tap the glowing key to start')
  }

  const press = (key) => {
    playTone(key.freq)
    if (done) return
    const ok = key.id === target
    clearTimeout(flashTimer.current)
    setFlash({ id: key.id, ok })
    flashTimer.current = setTimeout(() => setFlash(null), 260)
    if (ok) {
      setIdx((i) => i + 1)
      setFeedback(idx + 1 >= song.notes.length ? 'Song complete!' : ['Nice!', 'On time!', 'Great!', 'Perfect pitch!'][idx % 4])
    } else {
      setMistakes((m) => m + 1)
      setFeedback(`Not quite. Try ${labelFor(target)}`)
    }
  }

  const onKeyDown = (e) => {
    if (e.repeat || e.metaKey || e.ctrlKey) return
    const key = KEYS.find((k) => k.kb === e.key.toLowerCase())
    if (key) {
      e.preventDefault()
      press(key)
    }
  }

  const keyClass = (k) => {
    let c = k.black ? 'ssma-pd-key ssma-pd-key--black' : 'ssma-pd-key'
    if (!done && k.id === target) c += ' is-target'
    if (flash?.id === k.id) c += flash.ok ? ' is-ok' : ' is-bad'
    return c
  }

  const lessonCta = (
    <a className="ssma-pd-cta-btn" href={CLEFY_TRY_URL} target="_blank" rel="noopener">
      Try a full lesson free →
    </a>
  )

  return (
    <div className="ssma-pd">
      <div className="ssma-pd-stage" tabIndex={0} onKeyDown={onKeyDown} aria-label={`Practice ${song.title} on the keyboard`}>
        <div className="ssma-pd-top">
          <div className="ssma-pd-levels" role="tablist" aria-label="Level">
            {LEVELS.map((l, i) => (
              <button
                key={l.id}
                type="button"
                role="tab"
                aria-selected={i === levelIdx}
                className={`ssma-pd-level${i === levelIdx ? ' is-active' : ''}`}
                onClick={() => load(i, 0)}
              >
                {l.id}
              </button>
            ))}
          </div>
          <div className="ssma-pd-bpm" style={{ '--beat': `${60 / level.bpm}s` }}>
            <span className="ssma-pd-bpm-dot" />
            {level.bpm} BPM
          </div>
        </div>

        <div className="ssma-pd-songs" aria-label="Songs">
          {level.songs.map((sg, i) => (
            <button
              key={sg.title}
              type="button"
              className={`ssma-pd-song${i === songIdx ? ' is-active' : ''}`}
              onClick={() => load(levelIdx, i)}
            >
              {sg.title}
            </button>
          ))}
        </div>

        <div className="ssma-pd-title">
          <p className="ssma-pd-piece">{song.title}</p>
          <p className="ssma-pd-meta">{level.blurb}</p>
        </div>

        <div className="ssma-pd-lane" aria-hidden="true">
          {song.notes.map((n, i) => (
            <span
              key={i}
              className={`ssma-pd-note${i < idx ? ' is-done' : ''}${i === idx ? ' is-current' : ''}`}
            >
              {labelFor(n)}
            </span>
          ))}
        </div>

        <div className="ssma-pd-progress"><span style={{ width: `${(idx / song.notes.length) * 100}%` }} /></div>

        <div className="ssma-pd-stats">
          <span className={`ssma-pd-feedback${flash && !flash.ok ? ' is-bad' : ''}`} aria-live="polite">{feedback}</span>
          <span className="ssma-pd-acc">Accuracy <strong>{accuracy}%</strong></span>
        </div>

        <div className="ssma-pd-keys">
          {WHITE.map((k) => (
            <button key={k.id} type="button" className={keyClass(k)} onPointerDown={() => press(k)} aria-label={`${labelFor(k.id)} (${k.swara})`}>
              <span className="ssma-pd-key-name">{labelFor(k.id)}</span>
              <span className="ssma-pd-key-swara">{k.swara}</span>
            </button>
          ))}
          {KEYS.map((k, i) => {
            if (!k.black) return null
            const whitesBefore = KEYS.slice(0, i).filter((w) => !w.black).length
            return (
              <button
                key={k.id}
                type="button"
                className={keyClass(k)}
                style={{ left: `calc(${(whitesBefore / WHITE.length) * 100}% - 4.5%)` }}
                onPointerDown={() => press(k)}
                aria-label={labelFor(k.id)}
              />
            )
          })}
        </div>
        <p className="ssma-pd-hint">Tap the keys, or use your keyboard: A S D F G H J K</p>

        {done && (
          <div className="ssma-pd-done">
            <span className="ssma-pd-done-badge"><CheckIcon size={28} color="#fff" /></span>
            <p className="ssma-pd-done-title">You played {song.title}!</p>
            <p className="ssma-pd-done-sub">{accuracy}% accuracy · {mistakes} {mistakes === 1 ? 'slip' : 'slips'}</p>
            <p className="ssma-pd-done-pitch">Liked it? Keep going with full lessons, live feedback and more songs.</p>
            <a className="ssma-pd-cta-btn ssma-pd-cta-btn--big" href={CLEFY_TRY_URL} target="_blank" rel="noopener">
              Try the full lesson free →
            </a>
            <div className="ssma-pd-done-ctas">
              <button type="button" className="ssma-pd-link" onClick={() => load(levelIdx, songIdx)}>Play again</button>
              <span aria-hidden="true">·</span>
              <button type="button" className="ssma-pd-link" onClick={() => load(nextLevelIdx, nextSongIdx)}>Next: {nextSong.title} →</button>
            </div>
          </div>
        )}
      </div>

      <div className="ssma-pd-cta">
        {lessonCta}
        <p className="ssma-pd-cta-note">
          <strong>100% free.</strong> Opens our practice tool. No sign-in, no payment.
        </p>
      </div>
    </div>
  )
}
