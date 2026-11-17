export type ProgrammeModule = {
  code: string
  title: string
  credits: number
}

export type ProgrammeYear = {
  id: string
  label: string
  modules: ProgrammeModule[]
}

export const programmeYears: ProgrammeYear[] = [
  {
    id: 'year-01',
    label: 'Year 01',
    modules: [
      { code: 'PC1301', title: 'Basic of Counselling', credits: 3 },
      { code: 'PC1502', title: 'General Psychology', credits: 5 },
      { code: 'PC1303', title: 'Child and Developmental Psychology -I', credits: 3 },
      { code: 'PC1404', title: 'Abnormal Psychology - I', credits: 4 },
      { code: 'PC1405', title: 'Theories of Counselling', credits: 4 },
      { code: 'PC1306', title: 'Counselling Ethics & Skills', credits: 3 },
      { code: 'PC1307', title: 'Counselling Law', credits: 3 },
      { code: 'PC1508', title: 'Techniques of Counselling', credits: 5 },
    ],
  },
  {
    id: 'year-02',
    label: 'Year 02',
    modules: [
      { code: 'PC2301', title: 'Introduction to Psychology', credits: 3 },
      { code: 'PC2302', title: 'Health Psychology', credits: 3 },
      { code: 'PC2303', title: 'Positive Psychology', credits: 3 },
      { code: 'PC2504', title: 'Educational Psychology', credits: 5 },
      { code: 'PC2305', title: 'Social Psychology', credits: 3 },
      { code: 'PC2306', title: 'Counselling Psychology', credits: 3 },
      { code: 'PC2507', title: 'Cognitive Psychology', credits: 5 },
      { code: 'PC2508', title: 'Abnormal Psychology - II', credits: 5 },
    ],
  },
  {
    id: 'year-03',
    label: 'Year 03',
    modules: [
      { code: 'PC3301', title: 'Sexual Psychology', credits: 3 },
      { code: 'PC3302', title: 'Child and Developmental Psychology -II', credits: 3 },
      { code: 'PC3403', title: 'Psychological Research Methods', credits: 4 },
      { code: 'PC3504', title: 'Organizational Psychology', credits: 5 },
      { code: 'PC3305', title: 'Behavioral Psychology', credits: 3 },
      { code: 'PC3306', title: 'Cross-Cultural Psychology', credits: 3 },
      { code: 'PC3307', title: 'Disorders and Psychological Therapies', credits: 3 },
      { code: 'PC3608', title: 'Final Research Dissertation', credits: 6 },
    ],
  },
]

export const convocationEvents = [
  { id: 'july-2026', date: 'July 2026', year: 2026, image: '/sitc/convocation-2026-july.jpg' },
  { id: 'october-2025', date: 'October 2025', year: 2025, image: '/sitc/convocation-2025-october.jpg' },
  { id: 'april-2025', date: 'April 2025', year: 2025, image: '/sitc/convocation-2025-april.jpg' },
  { id: 'december-2024', date: 'December 2024', year: 2024, image: '/sitc/convocation-2024-december.jpg' },
  { id: 'july-2024', date: 'July 2024', year: 2024, image: '/sitc/convocation-2024-july.jpg' },
  { id: 'may-2024', date: 'May 2024', year: 2024, image: '/sitc/convocation-2024-may.jpg' },
  { id: 'january-2024', date: 'January 2024', year: 2024, image: '/sitc/convocation-2024-january.jpg' },
  { id: 'october-2023', date: 'October 2023', year: 2023, image: '/sitc/convocation-2023-october.jpg' },
  { id: 'september-2023', date: 'September 2023', year: 2023, image: '/sitc/convocation-2023-september.jpg' },
  { id: 'july-2023', date: 'July 2023', year: 2023, image: '/sitc/convocation-2023-july.jpg' },
  { id: 'april-2023', date: 'April 2023', year: 2023, image: '/sitc/convocation-2023-april.jpg' },
  { id: 'january-2023', date: 'January 2023', year: 2023, image: '/sitc/convocation-2023-january.jpg' },
  { id: 'august-2022', date: 'August 2022', year: 2022, image: '/sitc/convocation-2022-august.jpg' },
  { id: 'march-2022', date: 'March 2022', year: 2022, image: '/sitc/convocation-2022-march.jpg' },
] as const

export const facultyMembers = [
  { name: 'Dr. Ravindra Nikapitiya', image: '/sitc/faculty-ravindra-nikapitiya.jpg' },
  { name: 'Ms. Kalalani Dharmasiri', image: '/sitc/faculty-kalalani-dharmasiri.jpg' },
  { name: 'Mr. Isuru Perera', image: '/sitc/faculty-isuru-perera.jpg' },
  { name: 'Dr. Kumudu Ekanayake', image: '/sitc/faculty-kumudu-ekanayake.jpg' },
  { name: 'Mr. Sumudu Ginigaddra', image: '/sitc/faculty-sumudu-ginigaddra.jpg' },
  { name: 'Mr. Sandaruwan Jayanath', image: '/sitc/faculty-sandaruwan-jayanath.jpg' },
  { name: 'Ms. Sandamali Herath', image: '/sitc/faculty-sandamali-herath.jpg' },
  { name: 'Mr. Amila Nikapitiya', image: '/sitc/faculty-amila-nikapitiya.jpg' },
]

export const communityStories = [
  {
    category: 'Community outreach',
    title: 'A brighter place to learn',
    description: 'Supporting the Athpasura school improvement initiative as a Bronze Partner, alongside SLIIT Business School undergraduates.',
    image: '/sitc/csr-learning.jpg',
  },
  {
    category: 'Student wellbeing',
    title: 'Conversations that make a difference',
    description: 'Bringing students together for awareness sessions, shared learning and thoughtful conversations.',
    image: '/sitc/csr-wellbeing.jpg',
  },
  {
    category: 'Celebrating achievement',
    title: 'Recognising the next generation',
    description: 'Supporting student achievement and celebrating memorable milestones at Glory Night 2022.',
    image: '/sitc/csr-achievement.jpg',
  },
  {
    category: 'Youth development',
    title: 'Confidence. Voice. Opportunity.',
    description: "Sharing knowledge at Oratorio, an inter-school and inter-university oratory competition organised by J'pura Voice.",
    image: '/sitc/csr-youth.jpg',
  },
  {
    category: 'Women in technology',
    title: 'More voices in technology',
    description: 'Silver sponsorship of WiCSaT 2022, celebrating Women in Computer Science and Technology at UCSC.',
    image: '/sitc/csr-technology.jpg',
  },
  {
    category: 'Community partnerships',
    title: 'A platform for emerging voices',
    description: "Supporting Supernova Phase II, an inter-university trilingual news presenting competition organised by J'pura Voice.",
    image: '/sitc/csr-voices.jpg',
  },
]

export const banks = [
  {
    id: 'boc',
    name: 'Bank of Ceylon',
    localName: 'ලංකා බැංකුව',
    logo: '/sitc/bank-boc.png',
    accountNumber: '888 05 443',
  },
  {
    id: 'sampath',
    name: 'Sampath Bank',
    localName: 'සම්පත් බැංකුව',
    logo: '/sitc/bank-sampath.png',
    accountNumber: '1101 1402 8522',
  },
  {
    id: 'commercial',
    name: 'Commercial Bank',
    localName: 'කොමර්ෂල් බැංකුව',
    logo: '/sitc/bank-commercial.png',
    accountNumber: '801 41811 04',
  },
  {
    id: 'peoples',
    name: "People's Bank",
    localName: 'මහජන බැංකුව',
    logo: '/sitc/bank-peoples.png',
    accountNumber: '0182 0016 0063 841',
  },
] as const

export const faqs = [
  {
    question: 'How long is the programme?',
    answer: 'The complete programme spans 3 academic years. Eligible diploma holders may receive a 1-year exemption, leaving 2 academic years of study, subject to assessment.',
  },
  {
    question: 'What qualification do I need?',
    answer: 'The brochure lists a SITC Campus Diploma, a relevant SLQF Level 3 Diploma, or a one-year diploma with 30 credits. Admissions must confirm relevance and eligibility.',
  },
  {
    question: 'When is the next intake?',
    answer: 'The next intake is December 2027. Contact SITC for the timetable and scholarship availability.',
  },
  {
    question: 'Are classes online, and when are they held?',
    answer: 'The brochure describes Zoom classes on Saturdays and Sundays from 7 pm to 10 pm, with class links shared through WhatsApp. It states that classes are not held on Poya days or public holidays. Confirm the timetable for your intake with admissions. (Brochure pages 9 and 17.)',
  },
  {
    question: 'What language are lectures taught in?',
    answer: 'Lectures use a mix of Sinhala and English, according to the programme brochure. (Brochure page 9.)',
  },
  {
    question: 'Are recordings available if I miss a class?',
    answer: 'The brochure says students must attend classes, and Zoom recordings are provided the following day if a student cannot attend. (Brochure page 17.)',
  },
  {
    question: 'Do I need to attend practical sessions?',
    answer: 'Yes. After the first six months, the brochure requires attendance at one weekend practical session per month. Ask admissions to confirm the location and arrangements. (Brochure pages 9 and 17.)',
  },
  {
    question: 'Can I pay the course fee in instalments?',
    answer: 'The scholarship payment plan in the brochure lists 24 monthly instalments of LKR 14,500, totalling LKR 348,000, with a separate registration fee of LKR 20,700. Admissions can confirm the current plan and scholarship eligibility. (Brochure page 15.)',
  },
  {
    question: 'Who awards the degree, and what documents are shown?',
    answer: 'The brochure names PSB University as the awarding body and includes examples of a degree certificate, academic transcript and online certificate verification. Recognition information appears on pages 2–5; document examples appear on page 12.',
  },
  {
    question: 'What can I study or work towards after the programme?',
    answer: 'The brochure outlines routes in community support, student welfare, HR and employee wellbeing, research assistance, and further study in Psychology, Counselling, Social Work and related fields. Postgraduate entry depends on the receiving institution’s requirements. (Brochure page 14.)',
  },
]

export const locations = [
  {
    name: 'Colombo, Sri Lanka',
    address: 'World Trade Center, East Tower, Level 26, Colombo 01, Sri Lanka.',
    phone: '+94 11 759 8568',
    tel: '+94117598568',
    directions: 'https://www.google.com/maps/search/?api=1&query=World%20Trade%20Center%20East%20Tower%20Colombo%20Sri%20Lanka',
  },
  {
    name: 'Dubai, UAE',
    address: 'Al Majaz 2, Faya Business Park Tower, Level 7, Office 704, Sharjah, UAE.',
    phone: '+971 54 774 2498',
    tel: '+971547742498',
    directions: 'https://www.google.com/maps/search/?api=1&query=Faya%20Business%20Park%20Tower%20Al%20Majaz%202%20Sharjah%20UAE',
  },
  {
    name: 'Gampola, Sri Lanka',
    address: 'No. 285, Hospital Road, Gampola, Sri Lanka.',
    phone: '+94 81 313 8993',
    tel: '+94813138993',
    directions: 'https://www.google.com/maps/search/?api=1&query=285%20Hospital%20Road%20Gampola%20Sri%20Lanka',
  },
]

export const guidanceNotes = {
  programme: 'Programme structure and module credits are reproduced from the supplied brochure.',
  fees: 'The supplied brochure lists LKR 14,500 per month for 24 months, a LKR 20,700 registration fee. Confirm current fees with SITC before payment.',
  eligibility: 'Entry requirements and exemptions are subject to review by SITC admissions. This page provides preliminary guidance only.',
  recognition: 'The supplied brochure names PSB University as the awarding body. Current recognition, accreditation, membership and awarding details require official verification with SITC.',
  intake: 'The next intake is December 2027. Contact SITC for the timetable and scholarship availability.',
  faculty: 'Names shown are listed in the supplied brochure. Ask admissions for the current teaching team.',
  community: 'These activities are documented in the supplied materials. Confirm current partners and initiatives before publication.',
}
