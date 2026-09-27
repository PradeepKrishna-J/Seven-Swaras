// Local, permanently-bundled stock photos — used instead of a hotlinked
// placeholder-photo service, which turned out to pick a different underlying
// image per requested pixel size and to rate-limit/block under sustained
// automated traffic. Some of these are temporary placeholders pending real
// photos from the client.
import keyboard from './assets/stock/keyboard.jpg'
import guitar from './assets/stock/guitar.jpg'
import drums from './assets/stock/drums.jpg'
import vocals from './assets/stock/vocals.jpg'
import carnaticMandolin from './assets/stock/carnatic-mandolin.jpg'
import classroom from './assets/stock/classroom.jpg'
import practice from './assets/stock/practice.jpg'
import online from './assets/stock/online.jpg'
import liveband from './assets/stock/liveband.jpg'
import concert from './assets/stock/concert.jpg'
import corporate from './assets/stock/corporate.jpg'
import birthday from './assets/stock/birthday.jpg'
import wedding from './assets/stock/wedding.jpg'
import lesson from './assets/stock/lesson.jpg'

export const HERO_IMAGES = {
  classroom, practice, online, liveBand: liveband, concert, corporate, birthday, wedding, lesson,
}

// western-vocals and carnatic-vocals temporarily share one placeholder photo
// until distinct images are provided.
const INSTRUMENT_IMAGES = {
  keyboard,
  guitar,
  drums,
  'western-vocals': vocals,
  'carnatic-vocals': vocals,
  'carnatic-mandolin': carnaticMandolin,
}

export function instrumentHeroImage(instrument) {
  return INSTRUMENT_IMAGES[instrument.key]
}
