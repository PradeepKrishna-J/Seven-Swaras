// Local, permanently-bundled stock photos (sourced from Wikimedia Commons,
// freely licensed) — used instead of a hotlinked placeholder-photo service,
// which turned out to pick a different underlying image per requested pixel
// size and to rate-limit/block under sustained automated traffic.
import keyboard from './assets/stock/keyboard.jpg'
import guitar from './assets/stock/guitar.jpg'
import piano from './assets/stock/piano.jpg'
import violin from './assets/stock/violin.jpg'
import drums from './assets/stock/drums.jpg'
import vocals from './assets/stock/vocals.jpg'
import flute from './assets/stock/flute.jpg'
import theory from './assets/stock/theory.jpg'
import classroom from './assets/stock/classroom.jpg'
import practice from './assets/stock/practice.jpg'
import online from './assets/stock/online.jpg'
import liveband from './assets/stock/liveband.jpg'
import concert from './assets/stock/concert.jpg'
import corporate from './assets/stock/corporate.jpg'
import birthday from './assets/stock/birthday.jpg'
import wedding from './assets/stock/wedding.jpg'
import tabla from './assets/stock/tabla.jpg'
import lesson from './assets/stock/lesson.jpg'

export const HERO_IMAGES = {
  classroom, practice, online, liveBand: liveband, concert, corporate, birthday, wedding, tabla, lesson,
}

const INSTRUMENT_IMAGES = { keyboard, guitar, piano, violin, drums, vocals, flute, theory }

export function instrumentHeroImage(instrument) {
  return INSTRUMENT_IMAGES[instrument.key]
}
