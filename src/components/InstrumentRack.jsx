import { Link } from 'react-router-dom'
import { InstrumentIcon, ChevronIcon } from '../icons.jsx'

export function InstrumentRack({ instruments }) {
  return (
    <div className="ssma-rack">
      {instruments.map((inst, i) => (
        <Link key={inst.key} to={`/instruments/${inst.key}`} className="ssma-rack-row">
          <span className="ssma-rack-accent" aria-hidden="true" />
          <span className="ssma-rack-index">{String(i + 1).padStart(2, '0')}</span>
          <span className="ssma-rack-icon"><InstrumentIcon instrumentKey={inst.key} size={22} /></span>
          <span className="ssma-rack-main">
            <h3 className="ssma-rack-name">{inst.name}</h3>
            <span className="ssma-rack-desc">{inst.desc}</span>
          </span>
          <span className="ssma-rack-tags">
            {inst.genres.slice(0, 3).map((g) => <span key={g} className="ssma-rack-tag">{g}</span>)}
          </span>
          <span className="ssma-rack-bars" aria-hidden="true">
            <i /><i /><i /><i /><i />
          </span>
          <span className="ssma-rack-arrow"><ChevronIcon size={18} /></span>
        </Link>
      ))}
    </div>
  )
}
