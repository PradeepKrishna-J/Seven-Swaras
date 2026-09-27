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
      { label: 'Guitar', to: '/instruments/guitar' },
      { label: 'Piano', to: '/instruments/piano' },
      { label: 'Vocals', to: '/instruments/vocals' },
      { label: 'Drums', to: '/instruments/drums' },
      { label: 'Violin', to: '/instruments/violin' },
      { label: 'Flute', to: '/instruments/flute' },
      { label: 'Keyboard', to: '/instruments/keyboard' },
    ] }],
  },
  {
    label: 'Classes',
    to: '/classes',
    groups: [
      { heading: 'Schedules', items: [
        { label: 'Weekend Warriors', to: '/classes/weekend' },
        { label: 'Daily Practice Program', to: '/classes/weekday' },
        { label: 'Live Online Classes', to: '/classes/online' },
      ] },
      { heading: 'Grade Exams & Curriculums', items: [
        { label: 'Trinity', to: '/classes/trinity' },
        { label: 'ABRSM', to: '/classes/abrsm' },
        { label: 'Rockschool', to: '/classes/rockschool' },
      ] },
    ],
  },
  {
    label: 'Resources',
    to: '/resources',
    groups: [{ items: [
      { label: 'How It Works', to: '/resources/how-it-works' },
      { label: 'FAQs', to: '/resources/faqs' },
      { label: 'Contact', to: '/resources/contact' },
      { label: 'Become a Tutor', to: '/resources/become-a-tutor' },
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
    teacher: 'Ananya Subramaniam',
    experience: '9 years teaching',
    highlights: ['Beginner to advanced structured curriculum', 'Weekday, weekend & online batches available', 'Trinity & ABRSM aligned training'],
    genres: ['Beginner Foundations', 'Bollywood & Film', 'Western Classical', 'Improvisation'],
    teachers: [
      { name: 'Ananya Subramaniam', qualification: 'Trinity Grade 8', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=47' },
      { name: 'Ritika Shah', qualification: 'ABRSM Grade 6', languages: 'Hindi & English', photo: 'https://i.pravatar.cc/300?img=5' },
      { name: 'Naveen Kumar', qualification: 'Diploma in Keyboard', languages: 'Tamil, Telugu & English', photo: 'https://i.pravatar.cc/300?img=14' },
    ],
  },
  {
    key: 'guitar',
    name: 'Guitar',
    desc: 'Strum your way from campfires to concert halls',
    teacher: 'Vikram Das',
    experience: '7 years teaching',
    highlights: ['Acoustic & electric guitar covered', 'Chords, strumming and lead technique', 'Weekday, weekend & online batches available'],
    genres: ['Acoustic', 'Classical', 'Electric', 'Fingerstyle', 'Rock & Pop'],
    teachers: [
      { name: 'Vikram Das', qualification: 'Trinity Grade 8', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=53' },
      { name: 'Arun Prakash', qualification: 'Trinity Grade 6', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=15' },
      { name: 'Fathima Rahman', qualification: 'Rockschool Grade 7', languages: 'Tamil, Urdu & English', photo: 'https://i.pravatar.cc/300?img=6' },
    ],
  },
  {
    key: 'piano',
    name: 'Piano',
    desc: 'Classical technique and grand piano artistry',
    teacher: 'Divya Krishnamurthy',
    experience: '8 years teaching',
    highlights: ['Classical & contemporary repertoire', 'Trinity & ABRSM aligned training', 'Weekday, weekend & online batches available'],
    genres: ['Classical', 'Jazz', 'Film Music', 'Contemporary'],
    teachers: [
      { name: 'Divya Krishnamurthy', qualification: 'ABRSM Grade 8', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=45' },
      { name: 'Rohan Mehta', qualification: 'Trinity Grade 7', languages: 'Hindi, Gujarati & English', photo: 'https://i.pravatar.cc/300?img=16' },
      { name: 'Swathi Iyer', qualification: 'ABRSM Grade 5', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=7' },
    ],
  },
  {
    key: 'violin',
    name: 'Violin',
    desc: 'Pour your soul into every bow stroke',
    teacher: 'Lakshmi Narayanan',
    experience: '12 years teaching',
    highlights: ['Carnatic & Western violin styles', 'Posture, bowing & ear training focus', 'Weekday, weekend & online batches available'],
    genres: ['Carnatic', 'Western Classical', 'Fusion', 'Folk'],
    teachers: [
      { name: 'Lakshmi Narayanan', qualification: 'Carnatic Senior Grade', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=32' },
      { name: 'Karthik Subramanian', qualification: 'Trinity Grade 8', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=1' },
      { name: 'Priyanka Rao', qualification: 'Carnatic Junior Grade', languages: 'Telugu & English', photo: 'https://i.pravatar.cc/300?img=8' },
    ],
  },
  {
    key: 'drums',
    name: 'Drums',
    desc: 'Feel the heartbeat of every song',
    teacher: 'Joel Fernandes',
    experience: '8 years teaching',
    highlights: ['Rhythm, timing & fills from day one', 'Dedicated practice room access', 'Weekday, weekend & online batches available'],
    genres: ['Rock', 'Jazz', 'Fusion', 'Latin'],
    teachers: [
      { name: 'Joel Fernandes', qualification: 'Rockschool Grade 8', languages: 'English & Tamil', photo: 'https://i.pravatar.cc/300?img=13' },
      { name: 'Aravind Kumar', qualification: 'Trinity Grade 5', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=2' },
      { name: 'Nikhil Varma', qualification: 'Rockschool Grade 6', languages: 'Hindi & English', photo: 'https://i.pravatar.cc/300?img=9' },
    ],
  },
  {
    key: 'vocals',
    name: 'Vocals',
    desc: 'Find your voice, Carnatic and contemporary',
    teacher: 'Meera Raghavan',
    experience: '14 years teaching',
    highlights: ['Carnatic & contemporary vocal styles', 'Breathing, pitch & voice culture training', 'Weekday, weekend & online batches available'],
    genres: ['Carnatic', 'Hindustani', 'Western', 'Playback & Film'],
    teachers: [
      { name: 'Meera Raghavan', qualification: 'Carnatic Vidwat', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=44' },
      { name: 'Deepika Nair', qualification: 'Hindustani Visharad', languages: 'Malayalam & English', photo: 'https://i.pravatar.cc/300?img=10' },
      { name: 'Ramesh Chandran', qualification: 'Trinity Grade 8 (Vocal)', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=3' },
    ],
  },
  {
    key: 'flute',
    name: 'Flute',
    desc: 'Breath, ragas and the bansuri tradition',
    teacher: 'Karuna Venkatesh',
    experience: '11 years teaching',
    highlights: ['Carnatic & Hindustani bansuri styles', 'Breath control & tone-production focus', 'Weekday, weekend & online batches available'],
    genres: ['Carnatic', 'Hindustani', 'Film Music', 'Fusion'],
    teachers: [
      { name: 'Karuna Venkatesh', qualification: 'Carnatic Senior Grade', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=25' },
      { name: 'Ibrahim Sait', qualification: 'Hindustani Visharad', languages: 'Tamil, Hindi & English', photo: 'https://i.pravatar.cc/300?img=33' },
      { name: 'Meenal Rao', qualification: 'Trinity Grade 6 (Flute)', languages: 'Telugu & English', photo: 'https://i.pravatar.cc/300?img=29' },
    ],
  },
  {
    key: 'theory',
    name: 'Music Theory',
    desc: 'The language behind every melody you play',
    teacher: 'Suresh Balakrishnan',
    experience: '10 years teaching',
    highlights: ['Notation, scales & ear training', 'Builds a strong base for any instrument', 'Weekday, weekend & online batches available'],
    genres: ['Notation Basics', 'Ear Training', 'Composition', 'Exam Preparation'],
    teachers: [
      { name: 'Suresh Balakrishnan', qualification: 'ABRSM Theory Grade 8', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=52' },
      { name: 'Anitha Ramesh', qualification: 'Trinity Theory Grade 6', languages: 'Tamil & English', photo: 'https://i.pravatar.cc/300?img=11' },
      { name: 'Kevin Thomas', qualification: 'ABRSM Theory Grade 5', languages: 'English & Tamil', photo: 'https://i.pravatar.cc/300?img=4' },
    ],
  },
]

export const TEACHERS = INSTRUMENTS.map((inst) => ({
  name: inst.teacher,
  role: `${inst.name} Faculty`,
  meta: `${inst.experience} · ${inst.teachers[0].qualification}`,
  photo: inst.teachers[0].photo,
}))

export const FAQS = [
  { q: 'What age can my child start learning music?', a: 'We welcome students from age 5 and above. Our youngest learners start with fun, rhythm-based activities before moving on to a full instrument curriculum.' },
  { q: 'Do you offer both online and offline classes?', a: 'Yes. You can choose in-person classes at our Chennai academy, live online classes from anywhere in the world, or a mix of both depending on your schedule.' },
  { q: 'Is a free demo class available?', a: 'Absolutely. Every new student gets a free, no-commitment demo class so you can experience our teaching style before enrolling.' },
  { q: 'What if I have no prior musical experience?', a: 'That is completely fine — most of our students start as complete beginners. Our instructors build a structured plan starting from the very basics.' },
  { q: 'Do you prepare students for Trinity or ABRSM exams?', a: 'Yes, we offer structured exam preparation for Trinity College London and ABRSM graded exams, along with regular mock assessments.' },
  { q: 'Can I switch instruments after enrolling?', a: 'Yes, you can switch instruments or batches any time — just speak to our academy coordinator and we will help you transition smoothly.' },
  { q: 'What is your class rescheduling policy?', a: 'We understand schedules change. Let us know at least 24 hours in advance and we will help you reschedule your class to another slot that week.' },
  { q: 'How do I pay the fees?', a: 'Fees can be paid monthly via UPI, bank transfer, or card. Our coordinator will share payment details once you confirm your batch after the demo class.' },
]

export const WHY_STATS = [
  { icon: 'graduation', title: 'Certified Instructors', desc: 'All India Radio artists & Trinity-graded faculty' },
  { icon: 'users', title: '500+ Happy Students', desc: 'From age 5 to 65' },
  { icon: 'globe', title: '10+ Countries', desc: 'Online students worldwide' },
  { icon: 'certificate', title: 'Trinity & ABRSM', desc: 'Internationally recognised certifications' },
]

export const SWARAS = ['Sa', 'Re', 'Ga', 'Ma', 'Pa', 'Dha', 'Ni']

export const TESTIMONIALS_ROW1 = [
  { quote: `My daughter started violin at age 7 with zero experience. In 8 months, she performed solo at the school annual day. The teachers here have genuine patience and passion.`, name: 'Priya Menon', meta: 'Violin · 1 year' },
  { quote: `The online classes are surprisingly effective — the teachers ensure you're getting the finger positions right even on screen. I'm in Singapore and never felt the distance.`, name: 'Arjun Nair', meta: 'Guitar · 8 months' },
  { quote: `Weekend batches were the only option for me with my office schedule. Now I play keyboard at family functions and I couldn't be prouder.`, name: 'Kavitha R.', meta: 'Keyboard · 2 years' },
  { quote: `I was 52 when I enrolled for tabla. They made me feel completely welcome. Age is truly no barrier here.`, name: 'Suresh Iyer', meta: 'Tabla · 6 months' },
  { quote: `Seven Swaras helped my son clear his Trinity Grade 5 with Distinction. The structured curriculum and mock exams made all the difference.`, name: 'Meenakshi S.', meta: 'Piano · 3 years' },
  { quote: `The flute classes online have been exceptional. Raga training, breath control exercises — everything is covered with the same depth as offline.`, name: 'Deepa Krishnan', meta: 'Flute · 1 year' },
]

export const TESTIMONIALS_ROW2 = [
  { quote: `From a complete beginner to performing Carnatic compositions — Seven Swaras made it possible with structured, patient guidance.`, name: 'Rahul V.', meta: 'Violin · 2 years' },
  { quote: `I joined the weekend batch for electric guitar. The instructors understand both Indian and Western styles. Truly versatile.`, name: 'Karthik M.', meta: 'Electric Guitar · 1 year' },
  { quote: `My 5-year-old now hums ragas at bedtime. She looks forward to every Saturday class. The faculty has a magical way with kids.`, name: 'Anjali Bose', meta: 'Keyboard (Child) · 4 months' },
  { quote: `The online portal, recorded sessions, and PDF notes make it very easy to practice between classes. Very professional setup.`, name: 'Vikram S.', meta: 'Saxophone · 10 months' },
  { quote: `We tried two other music schools before Seven Swaras. The difference in teaching quality was night and day. Highly recommend.`, name: 'Padma R.', meta: 'Carnatic Vocal · 1.5 years' },
  { quote: `Learning harmonium here connected me back to my roots. The Bhajan sessions on weekends are a spiritual experience in themselves.`, name: 'Gopinath K.', meta: 'Harmonium · 8 months' },
]

export const VIDEOS = [
  { id: 'F3M0ee3ypOo', title: 'Mutta Kalakki – Keyboard Notes (Youth | GV Prakash)', tag: 'Keyboard Tutorial' },
  { id: 'I7NRlOjbMDc', title: 'Kannadi Poove – Keyboard Notes (Santhosh Narayanan)', tag: 'Keyboard Tutorial' },
  { id: 'GKH9tiDXIrA', title: 'Muththa Mazhai – Piano Tutorial with Chords (Thug Life)', tag: 'Piano Tutorial' },
  { id: '5DtImFMDGx8', title: 'A.R. Rahman Retro – Veena Mashup', tag: 'Veena Cover' },
  { id: 'fJIXAlrktls', title: 'Ninukori Varnam – Flute Instrumental (Ilaiyaraaja)', tag: 'Flute Cover' },
  { id: 'PuJfdT2odMA', title: 'Alankaram Part 7 – Vocal Practice', tag: 'Vocal Practice' },
]

export const INSTRUMENT_OPTIONS = [
  'Keyboard', 'Guitar', 'Piano', 'Violin', 'Drums', 'Vocals', 'Flute', 'Music Theory', 'Not sure yet',
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
    schedule: 'Saturday & Sunday | 9:00 AM – 1:00 PM',
    levels: 'Beginner · Intermediate · Advanced',
    desc: 'Designed for school students and working professionals who want structured, focused weekend learning without disrupting the weekday routine.',
    features: ['Small batch sizes (max 8 students)', 'Theory + practical in every session', 'Monthly progress recitals'],
    price: '2,500',
    whoFor: 'This batch suits school and college students with a packed weekday timetable, and working professionals who can only commit time on Saturdays and Sundays. Because sessions run back-to-back over the weekend rather than being spread thin through the week, students build momentum quickly and rarely lose progress to a busy weekday schedule.',
    sampleWeek: [
      'Saturday 9:00 AM: Warm-up, technique drills and a review of the previous week’s piece',
      'Saturday 10:15 AM: New concept introduced — a scale, chord shape, raga or rhythm pattern',
      'Sunday 9:00 AM: Guided practice on the new concept with teacher feedback',
      'Sunday 10:15 AM: Ensemble or performance practice, with a monthly recital slot for showcasing progress',
    ],
    faqs: [
      { q: 'What happens if I miss a Saturday class?', a: 'Your teacher will cover the missed material at the start of Sunday’s session, or you can request a one-off makeup slot during the week subject to availability.' },
      { q: 'Is this batch suitable for absolute beginners?', a: 'Yes — most of our weekend students start with zero prior experience. The pace is simply spread across two structured days instead of five.' },
    ],
  },
  {
    slug: 'weekday',
    heroImage: HERO_IMAGES.practice,
    badge: null,
    name: 'Daily Practice Program',
    tagline: 'Full-immersion daily classes with rapid skill building and one-on-one teacher time',
    schedule: 'Monday – Friday | Morning 8–11 AM & Evening 5–8 PM',
    levels: 'All levels',
    desc: 'Full-immersion daily classes with individual attention, rapid skill building, and one-on-one teacher time built into every session.',
    features: ['Morning & evening time slots', 'Dedicated practice rooms', 'Exam preparation support'],
    price: '4,500',
    whoFor: 'The Daily Practice Program is built for students preparing for a grade exam or performance on a deadline, homeschooled children, and adult learners who want to progress noticeably faster than a once- or twice-a-week schedule allows. Daily repetition, even in short sessions, builds muscle memory and ear training far more effectively than infrequent long sessions.',
    sampleWeek: [
      'Monday: Technique and posture correction, new material introduced',
      'Tuesday – Thursday: Guided practice, repertoire building, sight-reading or ear-training drills',
      'Friday: Mini-assessment of the week’s progress and a look ahead to next week’s goals',
      'Morning (8–11 AM) or evening (5–8 PM) slots are both available — students can also mix slots across the week',
    ],
    faqs: [
      { q: 'Can I switch between the morning and evening slot?', a: 'Yes, as long as there is room in the batch you switch to. Just let your coordinator know a day in advance.' },
      { q: 'Do I have to attend all five days every week?', a: 'We recommend it for the fastest progress, but a minimum of three days a week is acceptable if your schedule requires it — talk to your teacher about a modified plan.' },
    ],
  },
  {
    slug: 'online',
    heroImage: HERO_IMAGES.online,
    badge: 'Join from Anywhere',
    name: 'Live Online Classes',
    tagline: 'Interactive live sessions with real-time feedback, wherever you are in the world',
    schedule: 'Flexible slots | IST 7 AM – 10 PM',
    levels: 'All levels, All ages',
    desc: 'Interactive Zoom-based live sessions with real-time feedback, recorded playback access, digital music notation PDFs, and monthly performance assessments from anywhere in the world.',
    features: ['Recorded sessions for revision', 'Students across 10+ countries', 'Tech-assisted audio quality'],
    price: '1,999',
    whoFor: 'Our online batch is built for students outside Chennai — including 10+ countries worldwide — as well as anyone who prefers learning from home. Every class is genuinely live and interactive (not pre-recorded), with the teacher watching hand position, posture and technique over video in real time, just as they would in person.',
    sampleWeek: [
      'Before class: a reminder with the Zoom link and that week’s practice sheet PDF',
      'During class: live instruction with the teacher watching technique over video and correcting in real time',
      'After class: the full recording is uploaded to your student portal within a few hours for revision',
      'Monthly: a recorded performance assessment reviewed by your teacher with written feedback',
    ],
    faqs: [
      { q: 'What if I have an unstable internet connection?', a: 'We recommend a minimum of 2 Mbps upload speed. If your class drops, your teacher will resume from where you left off, and the recording is always available afterward.' },
      { q: 'Do I need to already own an instrument?', a: 'For keyboard, guitar and violin, yes — even an entry-level instrument works for the first few months. For vocal and music theory, no instrument is required to begin.' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Grade Exams & Curriculums — /classes/:slug (trinity/abrsm/rockschool) */
/* ------------------------------------------------------------------ */

export const EXAM_TRACKS = [
  {
    slug: 'trinity',
    name: 'Trinity College London',
    tagline: 'Performance-focused graded exams recognised at conservatoires worldwide',
    heroImage: HERO_IMAGES.classroom,
    desc: 'Trinity College London exams emphasise musicality and real performance skill over rigid technical drilling, with a strong choice of contemporary and classical repertoire at every grade.',
    levels: 'Initial through Grade 8, plus Diploma level',
    features: ['Available for Keyboard, Guitar, Piano, Violin, Drums and Vocals', 'Flexible repertoire lists updated every few years', 'Digital exams available alongside in-person'],
    whoFor: 'Trinity suits students who enjoy a wide, contemporary repertoire choice and want their exam to feel closer to a real performance than a technical test. It is also a strong fit for guitar and drum students, since Trinity’s syllabus covers rock and pop styles more directly than many other boards.',
    faqs: [
      { q: 'How long does it take to prepare for a Trinity grade?', a: 'Most students preparing with one weekly lesson take 9–12 months per grade, faster with the Daily Practice Program.' },
      { q: 'Can I take a digital (recorded) Trinity exam?', a: 'Yes — we help students prepare and submit digital exam recordings as an alternative to the in-person exam session.' },
    ],
  },
  {
    slug: 'abrsm',
    name: 'ABRSM',
    tagline: 'The internationally recognised benchmark for classical technique and theory',
    heroImage: HERO_IMAGES.classroom,
    desc: 'ABRSM (Associated Board of the Royal Schools of Music) is one of the world’s most widely recognised music examination boards, known for its rigorous approach to technique, scales and aural training alongside repertoire.',
    levels: 'Initial through Grade 8, plus Diploma level',
    features: ['Available for Keyboard, Piano, Violin and Music Theory', 'Strong emphasis on scales, sight-reading and aural tests', 'Widely recognised for school and university admissions'],
    whoFor: 'ABRSM suits students working toward a rigorous, classically-grounded foundation — particularly useful if a student may later apply to a school or university where ABRSM grades are a recognised benchmark of musical ability.',
    faqs: [
      { q: 'Do I need to pass music theory to take practical grades?', a: 'Grade 6 and above practical exams require at least a Grade 5 theory pass (or equivalent) — we build this into your curriculum well ahead of time.' },
      { q: 'What does an ABRSM exam actually involve?', a: 'Prepared pieces, scales and arpeggios, sight-reading, and aural (ear) tests. Our teachers run mock exams covering all four components before the real one.' },
    ],
  },
  {
    slug: 'rockschool',
    name: 'Rockschool',
    tagline: 'Contemporary graded exams built around real band instruments and styles',
    heroImage: HERO_IMAGES.concert,
    desc: 'Rockschool grades are built specifically around contemporary band instruments and genres — rock, pop, funk and metal — with repertoire and technical requirements that reflect how those instruments are actually played on stage.',
    levels: 'Debut through Grade 8',
    features: ['Available for Guitar, Drums and Vocals', 'Repertoire drawn from real contemporary recordings', 'Technical exercises built around band contexts, not just solo technique'],
    whoFor: 'Rockschool is the natural choice for guitar and drum students whose goals are band performance, songwriting or contemporary styles rather than classical repertoire — and it pairs well with our Live Band programme for students who want real stage experience alongside their grading.',
    faqs: [
      { q: 'Is Rockschool as internationally recognised as Trinity or ABRSM?', a: 'Yes — Rockschool qualifications are recognised by UCAS (UK university admissions) at the same tariff points as other major boards.' },
      { q: 'Can I take Rockschool drums even if I mainly play kit for fun?', a: 'Absolutely — many students take Rockschool purely to benchmark progress, with no pressure to pursue it academically.' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Resources — /resources                                              */
/* ------------------------------------------------------------------ */

export const RESOURCE_LINKS = [
  { slug: 'how-it-works', label: 'How It Works', desc: 'The step-by-step journey from your first enquiry to your first recital.' },
  { slug: 'faqs', label: 'FAQs', desc: 'Answers to the questions we hear most often about classes, fees and exams.' },
  { slug: 'contact', label: 'Contact Us', desc: 'Our address, phone numbers, email and a map to find us in Chennai.' },
  { slug: 'become-a-tutor', label: 'Become a Tutor', desc: 'Teach with Seven Swaras — requirements and how to apply.' },
]

/* ------------------------------------------------------------------ */
/* Become a Tutor — /resources/become-a-tutor                          */
/* ------------------------------------------------------------------ */

export const BECOME_A_TUTOR = {
  heroImage: HERO_IMAGES.practice,
  intro: 'Seven Swaras Music Academy is always looking for passionate, qualified teachers to join our faculty — across Keyboard, Guitar, Piano, Violin, Drums, Vocals, Flute and Music Theory, for weekend, weekday and online batches.',
  requirements: [
    'A recognised qualification or equivalent performance experience in your instrument (Trinity, ABRSM, Rockschool, Carnatic/Hindustani Vidwat, or a degree in music)',
    'At least 2 years of teaching experience, or a strong willingness to be mentored through your first year with us',
    'Comfort teaching both beginners and exam-track students',
    'For online faculty: a quiet teaching space, a laptop or tablet, and a stable internet connection',
  ],
  process: [
    { title: 'Apply', desc: 'Send us your instrument, qualifications, teaching experience and availability (weekend, weekday and/or online).' },
    { title: 'Demo Lesson', desc: 'Teach a short trial lesson to one of our coordinators, covering a beginner and an intermediate scenario.' },
    { title: 'Onboarding', desc: 'Shadow a senior faculty member for two sessions and get access to our curriculum framework and student portal.' },
    { title: 'Start Teaching', desc: 'Get matched with your first batch based on your schedule and instrument specialisation.' },
  ],
}

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
    desc: 'From a solo keyboardist playing your child’s favourite film songs to a small live band for an adult milestone birthday, our faculty and senior students perform requested songs and can even teach a short interactive music activity for young guests.',
    included: ['Requested-song sets for the birthday person and guests', 'Optional interactive mini music activity for children’s parties', 'Solo, duo or small band formats to suit any venue size'],
    faqs: [
      { q: 'Can you learn specific song requests ahead of time?', a: 'Yes — send us your list at least 2 weeks ahead and we’ll confirm which songs are ready to perform.' },
      { q: 'Do you do anything interactive for kids’ birthday parties?', a: 'Yes, our faculty can run a short sing-along or simple rhythm activity alongside the performance set.' },
    ],
  },
  {
    slug: 'weddings',
    name: 'Weddings',
    tagline: 'Carnatic and Western live music for engagements, sangeet nights and wedding celebrations',
    heroImage: HERO_IMAGES.wedding,
    desc: 'Carnatic and Western live music for engagements, sangeet nights, housewarmings and festival celebrations — including traditional instrumental ensembles (violin, veena, mridangam) alongside contemporary guitar and vocal sets.',
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
    desc: 'Full-length live performances from our faculty and senior students for ticketed concerts, school and college functions, and community cultural shows — spanning Carnatic classical sets to contemporary full-band performances.',
    included: ['Full-length set design (45–90 minutes) with a rehearsed programme', 'Carnatic classical, Western contemporary, or a blended programme', 'Sound check and technical rehearsal ahead of the show'],
    faqs: [
      { q: 'Can students perform alongside faculty at these shows?', a: 'Yes — many of our concerts are deliberately structured to give senior students real stage experience alongside faculty.' },
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
    excerpt: 'From a single classroom in 2014 to 500+ students across Chennai and 10+ countries online — here is the story behind our teaching philosophy.',
    readTime: '4 min read',
    body: [
      'Seven Swaras Music Academy started in 2014 with a single classroom in Dayalu Nagar, Chennai, and a simple belief: that structured, patient teaching matters more than raw natural talent when it comes to learning music. More than a decade later, that belief still shapes every class we teach, whether the student is five years old or fifty-five.',
      'What families tell us again and again is that the difference isn’t any one flashy feature — it’s the consistency. Every student, regardless of instrument, follows a curriculum that blends technique, theory and performance practice from week one. That structure is why a nervous first-timer can walk in for a free demo class and leave with an actual practice plan, not just a good feeling.',
      'We also made an early decision that has paid off for families outside Chennai: we treat our online classes with the same rigor as our in-person ones. Every online session is genuinely live, not pre-recorded, with a teacher watching hand position and posture over video just as they would across a room. That’s part of why we now teach students in more than ten countries.',
      'Certification matters too. Our faculty are trained to prepare students for Trinity College London and ABRSM graded exams, and several of our senior teachers are All India Radio artists in their own right. For families who want a recognised, internationally valid milestone to work toward, that structure is often the deciding factor.',
      'But the heart of it remains simple: a five-year-old who hums a raga at bedtime, or a fifty-two-year-old learning tabla for the first time and feeling completely welcome doing it. That is the Seven Swaras difference — and it is why so many Chennai families send not just one child, but the whole family, through our doors.',
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
      'Of all the instruments we teach, keyboard is the one we recommend most often to parents asking "where do we even start?" — and there are good reasons for that, beyond simple convenience.',
      'First, the visual layout. Unlike a violin fingerboard or a guitar fretboard, a keyboard shows every note laid out in a clear, repeating pattern. A five-year-old can see the relationship between notes almost immediately, which builds musical confidence fast.',
      'Second, instant feedback. Press a key, and you get exactly one note, in tune, every time. There’s no bow technique or embouchure to master before a beginner can make a pleasant sound — which means the first lesson is genuinely enjoyable, not just the start of a long technical slog.',
      'Third, it builds a foundation for everything else. Keyboard teaches note reading, rhythm and two-hand coordination in a way that transfers directly to piano, and gives a real head start if a child later wants to pick up guitar, violin or even Carnatic vocal training, since the underlying music theory is the same.',
      'Fourth, the gentle learning curve keeps young students motivated. In the first month at Seven Swaras, a new keyboard student typically learns hand position, five-finger patterns, and their first simple melody — enough to feel a genuine sense of accomplishment within just a few weeks.',
      'Finally, keyboard batches at Seven Swaras run across weekend, weekday and online schedules, so a young student never has to wait for the "right" batch to start. If your child is curious about music but you’re unsure where to begin, keyboard is very often the right first step.',
    ],
  },
  {
    slug: 'acoustic-vs-electric-guitar-which-first',
    heroImage: instrumentHeroImage(INSTRUMENTS.find((i) => i.key === 'guitar')),
    tag: 'Guitar',
    title: 'Acoustic vs Electric Guitar: Which Should You Learn First?',
    excerpt: 'Finger strength, music style and long-term goals all play a part in this decision. Our instructors break down the trade-offs for new students.',
    readTime: '5 min read',
    body: [
      'It’s one of the first questions every new guitar student asks us: should I start on acoustic or electric? The honest answer is that either can work — but the right choice depends on a few specific factors.',
      'Finger strength is the biggest practical difference. Acoustic strings sit higher off the fretboard and are generally thicker, which means more resistance for a beginner’s fingers. Electric guitars have a lower action and thinner strings, making the first few weeks physically easier — an underrated advantage for younger students or anyone who finds the initial finger-soreness discouraging.',
      'Musical style matters just as much. If a student’s goal is singing along to acoustic covers, campfire songs or Carnatic-fusion arrangements, starting on acoustic makes sense since that’s the instrument they’ll actually use. If the goal is rock, blues or lead guitar work, starting on electric lets a student immediately practice in the style they care about, which keeps motivation high.',
      'There’s also the question of amplification and gear. Electric guitar requires an amp (even a small practice amp) to hear the instrument properly, which is an extra cost and a bit more setup than acoustic, which needs nothing more than the guitar itself.',
      'Our instructors generally recommend acoustic first if a student is completely new to fretted instruments and hasn’t decided on a specific style yet, since the technique transfers cleanly to electric later. We recommend starting on electric if a student already knows they want to play a specific style of electric-driven music, or if finger pain in the first month is likely to be the difference between sticking with lessons and giving up.',
      'Whichever you choose, our guitar curriculum at Seven Swaras covers chords, strumming patterns and lead technique across both acoustic and electric, so switching later is a smooth transition rather than starting over.',
    ],
  },
  {
    slug: 'discipline-behind-every-bow-stroke-violin',
    heroImage: instrumentHeroImage(INSTRUMENTS.find((i) => i.key === 'violin')),
    tag: 'Violin',
    title: 'The Discipline Behind Every Bow Stroke: Learning Violin the Carnatic Way',
    excerpt: 'Carnatic violin training builds ear, posture and rhythm together. A look at how our structured curriculum takes a beginner to their first recital.',
    readTime: '4 min read',
    body: [
      'Violin has a reputation for being one of the harder instruments to start — and in some ways, that reputation is fair. Unlike keyboard, there are no frets or keys to mark exactly where a note is; the ear has to guide the finger. That’s exactly why our Carnatic violin curriculum starts with ear training before it asks a student to play a single full composition.',
      'A new violin student at Seven Swaras spends their first few weeks on posture, bow grip and open-string bowing — deliberately unglamorous work that builds the physical foundation everything else depends on. Rushing past this stage is the single most common reason self-taught violin students develop habits that are hard to unlearn later.',
      'From there, we introduce Sarali Varisai (the foundational Carnatic exercise patterns), building pitch accuracy and finger placement together with rhythm. Because Carnatic violin is traditionally taught by ear as much as by notation, students develop a strong sense of pitch far earlier than in many Western string curricula.',
      'Bowing technique is layered in gradually — long, even strokes first, then the ornamentations (gamakas) that give Carnatic violin its distinctive, expressive sound. This is where a student’s individual musicality really starts to show, and where our teachers spend the most one-on-one time correcting subtle technique.',
      'By the time a student reaches their first recital, usually within eight to twelve months of consistent practice, they’ve typically progressed from open strings to a complete varnam or simple kriti performed from memory — a genuinely proud moment for students of every age, from seven-year-old beginners to adult learners returning to an instrument they gave up decades ago.',
    ],
  },
  {
    slug: 'why-tabla-rhythms-build-timing',
    heroImage: HERO_IMAGES.tabla,
    tag: 'Tabla',
    title: "Why Tabla Rhythms Build a Musician's Sense of Timing",
    excerpt: 'Tabla is often the most underrated first instrument. Here is how learning taal early strengthens every other instrument a student picks up later.',
    readTime: '3 min read',
    body: [
      'If you ask most parents which instrument to start their child on, tabla rarely comes up first — and we think that’s a missed opportunity. Rhythm is the one musical skill that transfers to literally every other instrument, and tabla teaches it more directly than almost anything else.',
      'Tabla training begins with bols — the spoken syllables (dha, dhin, ta, ka) that represent each stroke. Students learn to recite a rhythm pattern verbally before they ever play it, which builds an internal sense of taal (rhythmic cycle) that sticks with them long after the lesson ends.',
      'This matters well beyond tabla itself. A keyboard or guitar student who has spent even six months learning taal typically shows noticeably better timing and rhythmic confidence than one who hasn’t — because they’ve trained their internal clock directly, rather than picking it up incidentally.',
      'We’ve taught tabla students from age six all the way to a retired engineer who enrolled at fifty-two with zero musical background. Age is genuinely no barrier: the physical technique (finger position, wrist relaxation) takes patient repetition rather than raw dexterity, and our teachers structure early lessons around exactly that.',
      'For any student who eventually wants to explore Indian classical music more broadly, starting with tabla — even alongside another instrument — builds a rhythmic foundation that makes every subsequent instrument easier to learn.',
    ],
  },
  {
    slug: 'breath-ragas-bansuri-flute-beginners-guide',
    heroImage: instrumentHeroImage(INSTRUMENTS.find((i) => i.key === 'flute')),
    tag: 'Flute',
    title: "Breath, Ragas and Bansuri: A Beginner's Guide to Learning Flute",
    excerpt: 'Breath control is the real starting point for flute, not finger placement. Our faculty share the warm-up routine every new student begins with.',
    readTime: '4 min read',
    body: [
      'New flute students almost always expect their first lesson to be about finger positions. It isn’t. The very first thing we teach on bansuri (bamboo flute) is breath control, because without it, no amount of correct fingering will produce a clean, stable tone.',
      'Our beginner warm-up starts with simple sustained-breath exercises away from the flute entirely — long, controlled exhales that build the diaphragm control needed to sustain a note evenly. Only once that’s reasonably comfortable do we introduce embouchure: the exact lip position and airflow angle across the blow hole that produces sound at all.',
      'The first few weeks can be quietly frustrating, since producing any clear tone at all takes longer on flute than on, say, keyboard. We tell every new student this upfront, because knowing it’s a normal part of the process — not a sign they’re "bad at it" — makes a real difference to whether they stick with it past week three.',
      'Once tone production is stable, we move into basic raga structures, since Carnatic and Hindustani flute repertoire is built around them from the very beginning. Finger positions for the seven basic notes are actually one of the more straightforward parts of the whole process, precisely because the breath foundation is already in place.',
      'Our online flute classes cover the exact same breath-control curriculum as our in-person ones — the teacher listens closely over video for tone quality and airflow issues, which is often easier to diagnose by ear than by eye. Students consistently tell us it’s one of the most physically satisfying instruments to finally get right.',
    ],
  },
  {
    slug: 'bedroom-practice-to-stage-drums',
    heroImage: instrumentHeroImage(INSTRUMENTS.find((i) => i.key === 'drums')),
    tag: 'Drums',
    title: 'From Bedroom Practice to the Stage: Learning Drums at Seven Swaras',
    excerpt: 'Dedicated practice rooms, structured grading and regular recitals — here is how our drum students go from their first beat to a live performance.',
    readTime: '3 min read',
    body: [
      'Drums present a challenge most other instruments don’t: you genuinely need a real kit, and space to play it, to progress properly. That’s the first thing we address with every new student — most begin lessons using our dedicated practice rooms before investing in a home kit (or an electronic kit for quieter practice).',
      'Technique starts with grip and stick control on a practice pad, well before a student sits behind a full kit. Getting rebound and stroke technique right early prevents the tension and inconsistent timing that’s much harder to correct once bad habits set in.',
      'From there, students move to a full kit and begin coordinating hands and feet independently — arguably the single hardest skill in early drum education, since it asks the brain to do four different things at once. We break this down gradually: hands first, then adding the hi-hat foot, then finally the kick drum, rather than expecting a beginner to coordinate everything simultaneously from day one.',
      'Rhythm reading and genre-specific grooves (rock, jazz, fusion, Latin) follow once basic coordination is solid, alongside structured grading through Rockschool exams for students who want a formal, internationally recognised benchmark of progress.',
      'The payoff is real: our drum students regularly perform at our monthly recitals, and several have gone on to play in school and college bands. Watching a student go from tentative, uneven strokes on a practice pad to confidently holding down a groove on stage is one of the most rewarding transformations we see at the academy.',
    ],
  },
]
