/* ------------------------------------------------------------------ */
/* Site-wide data                                                       */
/* ------------------------------------------------------------------ */

import { HERO_IMAGES, instrumentHeroImage } from './heroImages.js'

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Instruments',
    to: '/instruments',
    groups: [{ items: [
      { label: 'Keyboard', to: '/instruments/keyboard', key: 'keyboard' },
      { label: 'Guitar', to: '/instruments/guitar', key: 'guitar' },
      { label: 'Drums', to: '/instruments/drums', key: 'drums' },
      { label: 'Western Vocals', to: '/instruments/western-vocals', key: 'western-vocals' },
      { label: 'Carnatic Vocals', to: '/instruments/carnatic-vocals', key: 'carnatic-vocals' },
      { label: 'Carnatic Mandolin', to: '/instruments/carnatic-mandolin', key: 'carnatic-mandolin' },
    ] }],
  },
  { label: 'Instrument Sales', to: '/instrument-sales' },
  {
    label: 'Classes',
    to: '/classes',
    groups: [{ items: [
      { label: 'Weekend Warriors', to: '/classes/weekend' },
      { label: 'Daily Practice Program', to: '/classes/weekday' },
      { label: 'Live Online Classes', to: '/classes/online' },
    ] }],
  },
  {
    label: 'Resources',
    to: '/resources',
    groups: [{ items: [
      { label: 'How It Works', to: '/resources/how-it-works' },
      { label: 'FAQs', to: '/resources/faqs' },
      { label: 'Contact', to: '/resources/contact' },
    ] }],
  },
  {
    label: 'Live Band',
    to: '/live-band',
    groups: [{ items: [
      { label: 'Corporate Events', to: '/live-band/corporate-events' },
      { label: 'Birthday Parties', to: '/live-band/birthday-parties' },
      { label: 'Weddings', to: '/live-band/weddings' },
      { label: 'Concerts & Shows', to: '/live-band/concerts' },
    ] }],
  },
  { label: 'Blog', to: '/blog' },
  { label: 'About Us', to: '/about-us' },
]

export const INSTRUMENTS = [
  {
    key: 'keyboard',
    name: 'Keyboard',
    desc: 'The gateway to harmony and melody',
    highlights: ['Beginner to advanced structured curriculum', 'Weekday, weekend & online batches available', 'Ideal first instrument for young beginners'],
    genres: ['Beginner Foundations', 'Bollywood & Film', 'Western Classical', 'Improvisation'],
  },
  {
    key: 'guitar',
    name: 'Guitar',
    desc: 'Strum your way from campfires to concert halls',
    highlights: ['Acoustic & electric guitar covered', 'Chords, strumming and lead technique', 'Weekday, weekend & online batches available'],
    genres: ['Acoustic', 'Classical', 'Electric', 'Fingerstyle', 'Rock & Pop'],
  },
  {
    key: 'drums',
    name: 'Drums',
    desc: 'Feel the heartbeat of every song',
    highlights: ['Rhythm, timing & fills from day one', 'Dedicated practice room access', 'Weekday, weekend & online batches available'],
    genres: ['Rock', 'Jazz', 'Fusion', 'Latin'],
  },
  {
    key: 'western-vocals',
    name: 'Western Vocals',
    desc: 'Contemporary voice technique for pop, rock and playback styles',
    highlights: ['Breathing, pitch & voice culture training', 'Pop, rock & playback repertoire', 'Weekday, weekend & online batches available'],
    genres: ['Pop', 'Rock', 'Playback & Film', 'Jazz'],
  },
  {
    key: 'carnatic-vocals',
    name: 'Carnatic Vocals',
    desc: 'Find your voice in the Carnatic classical tradition',
    highlights: ['Traditional Carnatic vocal training', 'Breathing, pitch & voice culture training', 'Weekday, weekend & online batches available'],
    genres: ['Varnams', 'Kritis', 'Ragam Tanam Pallavi', 'Devotional'],
  },
  {
    key: 'carnatic-mandolin',
    name: 'Carnatic Mandolin',
    desc: 'The bright, plucked voice of South Indian classical music',
    highlights: ['Carnatic mandolin technique from the ground up', 'Classical repertoire adapted for a Western instrument', 'Weekday, weekend & online batches available'],
    genres: ['Varnams', 'Kritis', 'Filmy Fusion', 'Improvisation'],
  },
]

export const FAQS = [
  { q: 'What age can my child start learning music?', a: 'We welcome students from age 5 and above. Our youngest learners start with fun, rhythm-based activities before moving on to a full instrument curriculum.' },
  { q: 'Do you offer both online and offline classes?', a: 'Yes. You can choose in-person classes at our Chennai academy, live online classes from anywhere in the world, or a mix of both depending on your schedule.' },
  { q: 'Is a free demo class available?', a: 'Absolutely. Every new student gets a free, no-commitment demo class so you can experience our teaching style before enrolling.' },
  { q: 'What if I have no prior musical experience?', a: 'That is completely fine — most of our students start as complete beginners. We build a structured plan starting from the very basics.' },
  { q: 'Can I learn more than one instrument at a time?', a: 'Yes, many students take up a second instrument once they are comfortable with their first — just let us know and we will work out a combined schedule.' },
  { q: 'Can I switch instruments after enrolling?', a: 'Yes, you can switch instruments or batches any time — just speak to our academy coordinator and we will help you transition smoothly.' },
  { q: 'What is your class rescheduling policy?', a: 'We understand schedules change. Let us know at least 24 hours in advance and we will help you reschedule your class to another slot that week.' },
  { q: 'How do I pay the fees?', a: 'Fees can be paid monthly via UPI, bank transfer, or card. Our coordinator will share payment details once you confirm your batch after the demo class.' },
]

export const TESTIMONIALS = [
  { quote: `My daughter started keyboard at age 6 with zero experience. Within a year she was playing full film songs from memory. The structured lessons made all the difference.`, name: 'Priya Menon', meta: 'Keyboard · 2 years' },
  { quote: `The online classes are surprisingly effective — someone is always watching your finger positions closely even on screen. I'm in Singapore and never felt the distance.`, name: 'Arjun Nair', meta: 'Guitar · 8 months' },
  { quote: `Weekend batches were the only option for me with my office schedule. Now I play drums at family functions and I couldn't be prouder.`, name: 'Karthik Subramaniam', meta: 'Drums · 1 year' },
  { quote: `From a complete beginner to performing Carnatic compositions — Seven Swaras made it possible with a structured, patient approach.`, name: 'Meenakshi Sundaram', meta: 'Carnatic Vocals · 3 years' },
]

export const VIDEOS = [
  { id: 'F3M0ee3ypOo', title: 'Mutta Kalakki – Keyboard Notes (Youth | GV Prakash)', tag: 'Keyboard Tutorial' },
  { id: 'I7NRlOjbMDc', title: 'Kannadi Poove – Keyboard Notes (Santhosh Narayanan)', tag: 'Keyboard Tutorial' },
  { id: 'GKH9tiDXIrA', title: 'Muththa Mazhai – Piano Tutorial with Chords (Thug Life)', tag: 'Keys Cover' },
  { id: '5DtImFMDGx8', title: 'A.R. Rahman Retro – Veena Mashup', tag: 'Fusion Cover' },
  { id: 'fJIXAlrktls', title: 'Ninukori Varnam – Flute Instrumental (Ilaiyaraaja)', tag: 'Instrumental Cover' },
  { id: 'PuJfdT2odMA', title: 'Alankaram Part 7 – Vocal Practice', tag: 'Vocal Practice' },
]

export const INSTRUMENT_OPTIONS = [
  'Keyboard', 'Guitar', 'Drums', 'Western Vocals', 'Carnatic Vocals', 'Carnatic Mandolin', 'Not sure yet',
]

/* ------------------------------------------------------------------ */
/* Classes (batch types) — /classes and /classes/:slug                 */
/* ------------------------------------------------------------------ */

export const CLASSES = [
  {
    slug: 'weekend',
    heroImage: HERO_IMAGES.classroom,
    badge: 'Most Popular',
    name: 'Weekend Warriors',
    tagline: 'Structured, focused weekend learning that never touches your weekday routine',
    schedule: 'Round-the-clock flexible timings',
    levels: 'Beginner · Intermediate · Advanced',
    desc: 'Designed for school students and working professionals who want structured, focused weekend learning without disrupting the weekday routine.',
    features: ['Small batch sizes (max 8 students)', 'Theory + practical in every session', 'Monthly progress recitals'],
    price: '2,500',
    whoFor: 'This batch suits school and college students with a packed weekday timetable, and working professionals who can only commit time on weekends. Because sessions run back-to-back over the weekend rather than being spread thin through the week, students build momentum quickly and rarely lose progress to a busy weekday schedule.',
    sampleWeek: [
      'Saturday session one: Warm-up, technique drills and a review of the previous session’s piece',
      'Saturday session two: New concept introduced — a scale, chord shape, raga or rhythm pattern',
      'Sunday session one: Guided practice on the new concept with structured feedback',
      'Sunday session two: Ensemble or performance practice, with a monthly recital slot for showcasing progress',
    ],
    faqs: [
      { q: 'What happens if I miss a Saturday class?', a: 'We will cover the missed material at the start of Sunday’s session, or you can request a one-off makeup slot during the week subject to availability.' },
      { q: 'Is this batch suitable for absolute beginners?', a: 'Yes — most of our weekend students start with zero prior experience. The pace is simply spread across two structured days instead of five.' },
    ],
  },
  {
    slug: 'weekday',
    heroImage: HERO_IMAGES.practice,
    badge: null,
    name: 'Daily Practice Program',
    tagline: 'Full-immersion daily classes with rapid skill building and one-on-one guidance',
    schedule: 'Round-the-clock flexible timings',
    levels: 'All levels',
    desc: 'Full-immersion daily classes with individual attention, rapid skill building, and one-on-one guidance built into every session.',
    features: ['Morning & evening time slots', 'Dedicated practice rooms', 'Structured skill assessments'],
    price: '4,500',
    whoFor: 'The Daily Practice Program is built for students working toward a performance on a deadline, homeschooled children, and adult learners who want to progress noticeably faster than a once- or twice-a-week schedule allows. Daily repetition, even in short sessions, builds muscle memory and ear training far more effectively than infrequent long sessions.',
    sampleWeek: [
      'Early week: Technique and posture correction, new material introduced',
      'Mid week: Guided practice, repertoire building, sight-reading or ear-training drills',
      'End of week: Mini-assessment of progress and a look ahead to next week’s goals',
      'Morning or evening slots are both available — students can also mix slots across the week',
    ],
    faqs: [
      { q: 'Can I switch between the morning and evening slot?', a: 'Yes, as long as there is room in the batch you switch to. Just let your coordinator know a day in advance.' },
      { q: 'Do I have to attend all five days every week?', a: 'We recommend it for the fastest progress, but a minimum of three days a week is acceptable if your schedule requires it — talk to us about a modified plan.' },
    ],
  },
  {
    slug: 'online',
    heroImage: HERO_IMAGES.online,
    badge: 'Join from Anywhere',
    name: 'Live Online Classes',
    tagline: 'Interactive live sessions with real-time feedback, wherever you are in the world',
    schedule: 'Flexible schedules available 24/7',
    levels: 'All levels, All ages',
    desc: 'Interactive live sessions with real-time feedback, recorded playback access, digital music notation PDFs, and monthly performance assessments from anywhere in the world.',
    features: ['Recorded sessions for revision', 'Students across 10+ countries', 'Tech-assisted audio quality'],
    price: '1,999',
    whoFor: 'Our online batch is built for students outside Chennai — including 10+ countries worldwide — as well as anyone who prefers learning from home. Every class is genuinely live and interactive (not pre-recorded), with real-time feedback on hand position, posture and technique over video, just as in person.',
    sampleWeek: [
      'Before class: a reminder with the video-call link and that session’s practice sheet PDF',
      'During class: live instruction with real-time correction of technique over video',
      'After class: the full recording is uploaded to your student portal within a few hours for revision',
      'Monthly: a recorded performance assessment with written feedback',
    ],
    faqs: [
      { q: 'What if I have an unstable internet connection?', a: 'We recommend a minimum of 2 Mbps upload speed. If your class drops, we will resume from where you left off, and the recording is always available afterward.' },
      { q: 'Do I need to already own an instrument?', a: 'For keyboard and guitar, yes — even an entry-level instrument works for the first few months. For vocals, no instrument is required to begin.' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Resources — /resources                                              */
/* ------------------------------------------------------------------ */

export const RESOURCE_LINKS = [
  { slug: 'how-it-works', label: 'How It Works', desc: 'The step-by-step journey from your first enquiry to your first recital.' },
  { slug: 'faqs', label: 'FAQs', desc: 'Answers to the questions we hear most often about classes and fees.' },
  { slug: 'contact', label: 'Contact Us', desc: 'Our address, phone numbers, email and a map to find us in Chennai.' },
]

/* ------------------------------------------------------------------ */
/* Live Band — Music for Events — /live-band and /live-band/:slug       */
/* ------------------------------------------------------------------ */

export const LIVE_BAND_EVENTS = [
  {
    slug: 'corporate-events',
    name: 'Corporate Events',
    tagline: 'Live music matched to the tone of your event, from product launches to client dinners',
    heroImage: HERO_IMAGES.corporate,
    desc: 'Live instrumental and vocal performances for product launches, annual days, offsites and client dinners. We work with your event team to match the music to the tone of the occasion — a soft instrumental set during dinner, or a high-energy full band for an after-party.',
    included: ['A dedicated set list built around your event’s tone and audience', 'Solo, duo or full-band line-ups depending on venue and budget', 'Own sound equipment for venues without in-house AV'],
    faqs: [
      { q: 'How far in advance should we book?', a: 'At least 3 weeks for a standard set, 6+ weeks for a custom song list or larger ensemble.' },
      { q: 'Can you play background music during dinner and a livelier set later?', a: 'Yes — this is one of our most requested formats and works well with a single trio that adapts energy across the evening.' },
    ],
  },
  {
    slug: 'birthday-parties',
    name: 'Birthday Parties',
    tagline: 'From a solo keyboardist to a full live band, for kids’ parties and milestone birthdays alike',
    heroImage: HERO_IMAGES.birthday,
    desc: 'From a solo keyboardist playing your child’s favourite film songs to a small live band for an adult milestone birthday, our performers and senior students perform requested songs and can even run a short interactive music activity for young guests.',
    included: ['Requested-song sets for the birthday person and guests', 'Optional interactive mini music activity for children’s parties', 'Solo, duo or small band formats to suit any venue size'],
    faqs: [
      { q: 'Can you learn specific song requests ahead of time?', a: 'Yes — send us your list at least 2 weeks ahead and we’ll confirm which songs are ready to perform.' },
      { q: 'Do you do anything interactive for kids’ birthday parties?', a: 'Yes, our performers can run a short sing-along or simple rhythm activity alongside the performance set.' },
    ],
  },
  {
    slug: 'weddings',
    name: 'Weddings',
    tagline: 'Carnatic and Western live music for engagements, sangeet nights and wedding celebrations',
    heroImage: HERO_IMAGES.wedding,
    desc: 'Carnatic and Western live music for engagements, sangeet nights, housewarmings and festival celebrations — including traditional instrumental ensembles alongside contemporary guitar and vocal sets.',
    included: ['Traditional Carnatic ensembles for ceremonies and rituals', 'Contemporary guitar and vocal sets for receptions and sangeet nights', 'Custom song lists including couple-requested favourites'],
    faqs: [
      { q: 'Can you cover both the ceremony and the reception?', a: 'Yes — many couples book a traditional ensemble for the ceremony and a contemporary set for the reception, performed by the same coordinating team.' },
      { q: 'Do you travel outside Chennai for weddings?', a: 'Yes, subject to travel and accommodation arrangements — let us know your venue when enquiring.' },
    ],
  },
  {
    slug: 'concerts',
    name: 'Concerts & Shows',
    tagline: 'Full-length live sets for ticketed shows, school functions and community concerts',
    heroImage: HERO_IMAGES.concert,
    desc: 'Full-length live performances from our performers and senior students for ticketed concerts, school and college functions, and community cultural shows — spanning Carnatic classical sets to contemporary full-band performances.',
    included: ['Full-length set design (45–90 minutes) with a rehearsed programme', 'Carnatic classical, Western contemporary, or a blended programme', 'Sound check and technical rehearsal ahead of the show'],
    faqs: [
      { q: 'Can students perform alongside your senior performers at these shows?', a: 'Yes — many of our concerts are deliberately structured to give senior students real stage experience alongside our performers.' },
      { q: 'What size venue can you perform at?', a: 'From an intimate 50-seat hall to a full auditorium — let us know your venue and expected audience size when enquiring.' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Blog — /blog and /blog/:slug                                        */
/* ------------------------------------------------------------------ */

export const BLOG_POSTS = [
  {
    slug: 'why-chennai-families-choose-seven-swaras',
    heroImage: HERO_IMAGES.classroom,
    tag: 'Our Story',
    title: 'Why Chennai Families Choose Seven Swaras Music Academy',
    excerpt: 'From a single classroom in 2014 to 500+ students across Chennai and 10+ countries online — here is the story behind our approach.',
    readTime: '4 min read',
    body: [
      'Seven Swaras Music Academy started in 2014 with a single classroom in Dayalu Nagar, Chennai, and a simple belief: that a structured, patient approach matters more than raw natural talent when it comes to learning music. More than a decade later, that belief still shapes every class, whether the student is five years old or fifty-five.',
      'What families tell us again and again is that the difference isn’t any one flashy feature — it’s the consistency. Every student, regardless of instrument, follows a curriculum that blends technique, theory and performance practice from week one. That structure is why a nervous first-timer can walk in for a free demo class and leave with an actual practice plan, not just a good feeling.',
      'We also made an early decision that has paid off for families outside Chennai: we treat our online classes with the same rigor as our in-person ones. Every online session is genuinely live, not pre-recorded, with real-time attention to hand position and posture over video just as it would be across a room. That’s part of why we now reach students in more than ten countries.',
      'Regular recitals matter too. Students perform in front of an audience every few months, which builds real confidence alongside technical skill, rather than technique in isolation.',
      'But the heart of it remains simple: a five-year-old who hums a tune at bedtime, or a fifty-two-year-old picking up an instrument for the first time and feeling completely welcome doing it. That is the Seven Swaras difference — and it is why so many Chennai families send not just one child, but the whole family, through our doors.',
    ],
  },
  {
    slug: 'keyboard-perfect-first-instrument-for-kids',
    heroImage: instrumentHeroImage(INSTRUMENTS.find((i) => i.key === 'keyboard')),
    tag: 'Keyboard',
    title: '5 Reasons Keyboard Is the Perfect First Instrument for Kids',
    excerpt: 'Visual keys, instant feedback and a gentle learning curve make keyboard an ideal starting point for young beginners. Here is what to expect in the first month.',
    readTime: '3 min read',
    body: [
      'Of all the instruments we offer, keyboard is the one we recommend most often to parents asking "where do we even start?" — and there are good reasons for that, beyond simple convenience.',
      'First, the visual layout. A keyboard shows every note laid out in a clear, repeating pattern. A five-year-old can see the relationship between notes almost immediately, which builds musical confidence fast.',
      'Second, instant feedback. Press a key, and you get exactly one note, in tune, every time. There’s no complex technique to master before a beginner can make a pleasant sound — which means the first lesson is genuinely enjoyable, not just the start of a long technical slog.',
      'Third, it builds a foundation for everything else. Keyboard develops note reading, rhythm and two-hand coordination in a way that transfers directly to other instruments later on.',
      'Fourth, the gentle learning curve keeps young students motivated. In the first month at Seven Swaras, a new keyboard student typically learns hand position, five-finger patterns, and a first simple melody — enough to feel a genuine sense of accomplishment within just a few weeks.',
      'Finally, keyboard batches at Seven Swaras run across flexible weekend, weekday and online schedules, so a young student never has to wait for the "right" batch to start. If your child is curious about music but you’re unsure where to begin, keyboard is very often the right first step.',
    ],
  },
  {
    slug: 'acoustic-vs-electric-guitar-which-first',
    heroImage: instrumentHeroImage(INSTRUMENTS.find((i) => i.key === 'guitar')),
    tag: 'Guitar',
    title: 'Acoustic vs Electric Guitar: Which Should You Learn First?',
    excerpt: 'Finger strength, music style and long-term goals all play a part in this decision. Here is a breakdown of the trade-offs for new students.',
    readTime: '5 min read',
    body: [
      'It’s one of the first questions every new guitar student asks: should I start on acoustic or electric? The honest answer is that either can work — but the right choice depends on a few specific factors.',
      'Finger strength is the biggest practical difference. Acoustic strings sit higher off the fretboard and are generally thicker, which means more resistance for a beginner’s fingers. Electric guitars have a lower action and thinner strings, making the first few weeks physically easier — an underrated advantage for younger students or anyone who finds the initial finger-soreness discouraging.',
      'Musical style matters just as much. If a student’s goal is singing along to acoustic covers or campfire songs, starting on acoustic makes sense since that’s the instrument they’ll actually use. If the goal is rock, blues or lead guitar work, starting on electric lets a student immediately practice in the style they care about, which keeps motivation high.',
      'There’s also the question of amplification and gear. Electric guitar requires an amp (even a small practice amp) to hear the instrument properly, which is an extra cost and a bit more setup than acoustic, which needs nothing more than the guitar itself.',
      'We generally recommend acoustic first if a student is completely new to fretted instruments and hasn’t decided on a specific style yet, since the technique transfers cleanly to electric later. Starting on electric makes more sense if a student already knows they want a specific style of electric-driven music, or if finger pain in the first month is likely to be the difference between sticking with lessons and giving up.',
      'Whichever you choose, our guitar curriculum at Seven Swaras covers chords, strumming patterns and lead technique across both acoustic and electric, so switching later is a smooth transition rather than starting over.',
    ],
  },
  {
    slug: 'bedroom-practice-to-stage-drums',
    heroImage: instrumentHeroImage(INSTRUMENTS.find((i) => i.key === 'drums')),
    tag: 'Drums',
    title: 'From Bedroom Practice to the Stage: Learning Drums at Seven Swaras',
    excerpt: 'Dedicated practice rooms, structured progress checks and regular recitals — here is how our drum students go from their first beat to a live performance.',
    readTime: '3 min read',
    body: [
      'Drums present a challenge most other instruments don’t: you genuinely need a real kit, and space to play it, to progress properly. That’s the first thing we address with every new student — most begin lessons using our dedicated practice rooms before investing in a home kit (or an electronic kit for quieter practice).',
      'Technique starts with grip and stick control on a practice pad, well before a student sits behind a full kit. Getting rebound and stroke technique right early prevents the tension and inconsistent timing that’s much harder to correct once bad habits set in.',
      'From there, students move to a full kit and begin coordinating hands and feet independently — arguably the single hardest skill in early drum education, since it asks the brain to do four different things at once. We break this down gradually: hands first, then adding the hi-hat foot, then finally the kick drum, rather than expecting a beginner to coordinate everything simultaneously from day one.',
      'Rhythm reading and genre-specific grooves (rock, jazz, fusion, Latin) follow once basic coordination is solid.',
      'The payoff is real: our drum students regularly perform at our monthly recitals, and several have gone on to play in school and college bands. Watching a student go from tentative, uneven strokes on a practice pad to confidently holding down a groove on stage is one of the most rewarding transformations we see at the academy.',
    ],
  },
]
