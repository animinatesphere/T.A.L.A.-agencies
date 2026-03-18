export const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Awards',   to: '/awards' },
  { label: 'Authors',  to: '/authors' },
  { label: 'Services', to: '/services' },
  { label: 'About',    to: '/about' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Contact',  to: '/contact' },
]

export const stats = [
  { value: '1,200+', label: 'Registered Authors' },
  { value: '18',     label: 'African Countries'  },
  { value: '6',      label: 'Award Categories'   },
  { value: '8',      label: 'Years Running'       },
]

export const awardCategories = [
  { icon: '📖', title: 'Fiction of the Year',   desc: 'Honouring the finest novel or short story collection by an African author published in the award year.' },
  { icon: '🖋',  title: 'Poetry Collection',     desc: "Celebrating outstanding poetry that reflects Africa's cultural depth, diversity and creative power." },
  { icon: '📚', title: 'Non-Fiction & Memoir',  desc: 'Recognising exceptional works of creative non-fiction, biography, and memoir from African writers.' },
  { icon: '🌱', title: 'Debut Author',           desc: 'Championing first-book authors who demonstrate extraordinary promise and authentic African voice.' },
  { icon: '✨', title: "Children's Literature", desc: "Celebrating books that bring Africa's stories, fables and imagination to young readers." },
  { icon: '🌍', title: 'Lifetime Achievement',  desc: "The highest honour — bestowed upon a writer whose body of work has shaped African literature." },
]

export const awardTimeline = [
  { date: 'Jan 1 – Mar 31', phase: 'Nominations Open',     desc: 'Authors and publishers submit works across all six categories.' },
  { date: 'April 1 – 30',  phase: 'Judging Panel Review', desc: 'Our panel of literary experts reviews all submitted works.' },
  { date: 'May 15',        phase: 'Shortlist Announced',   desc: 'Five finalists per category are announced publicly.' },
  { date: 'June 1 – 20',   phase: 'Public Reading Period', desc: 'Shortlisted works are featured and discussed across our platforms.' },
  { date: 'July 12',       phase: 'Awards Ceremony',       desc: 'Winners announced at the annual T.A.L.A. Ceremony in Lagos.' },
]

export const judgingCriteria = [
  { title: 'Originality of Voice', desc: 'Does the work present a distinctive, authentic African perspective?' },
  { title: 'Literary Quality',     desc: 'Is the prose, poetry or narrative craft of a high literary standard?' },
  { title: 'Cultural Resonance',   desc: 'Does the work engage meaningfully with African culture, history or society?' },
  { title: 'Emotional Impact',     desc: 'Does the work move, challenge or inspire its readers?' },
  { title: 'Eligibility',          desc: 'Work must be self-published or independently published within the award year.' },
]

export const faqs = [
  { q: 'Who is eligible to enter?',            a: 'Any author of African nationality or origin who has self-published or independently published a work within the current award year.' },
  { q: 'Is there a submission fee?',           a: 'No. T.A.L.A. is committed to accessibility — there is no fee for any category. Cost should never be a barrier to recognition.' },
  { q: 'Can I submit to multiple categories?', a: 'A single work may only go into one category, but an author may submit different works to different categories.' },
  { q: 'What formats are accepted?',           a: 'Print books, e-books, and digital manuscripts. Works must be in English, French, Portuguese, or any major African language with an English synopsis.' },
  { q: 'When are winners announced?',          a: 'Shortlists are announced in May; winners are revealed at the Annual Ceremony in July. All finalists are notified by email.' },
]

export const authors = [
  { name: 'Adaeze Okonkwo',  country: 'Nigeria',      genre: 'Fiction',        award: 'Fiction of the Year 2024',   bio: 'Author of the acclaimed "The Weight of Rivers", exploring the Igbo experience across three generations.',                        initial: 'A' },
  { name: 'Sipho Dlamini',   country: 'South Africa', genre: 'Poetry',         award: 'Poetry Collection 2024',     bio: 'His debut collection "Embers of Soweto" reimagines post-apartheid memory through vivid, precise verse.',                          initial: 'S' },
  { name: 'Fatou Diallo',    country: 'Senegal',      genre: 'Non-Fiction',    award: 'Non-Fiction 2023',           bio: 'Journalist and author of "The Invisible Thread" — a memoir of growing up between Dakar and Paris.',                             initial: 'F' },
  { name: 'Amara Mwangi',    country: 'Kenya',        genre: 'Debut Fiction',  award: 'Debut Author 2023',          bio: '"Salt and Dust" is a stunning first novel mapping the complexities of modern Nairobi life.',                                     initial: 'A' },
  { name: 'Kofi Asante',     country: 'Ghana',        genre: "Children's Lit", award: "Children's Lit 2023",        bio: "Creator of the beloved \"Anansi's World\" series, retelling Ghanaian folktales for a new generation.",                          initial: 'K' },
  { name: 'Nadia El-Rashid', country: 'Egypt',        genre: 'Fiction',        award: 'Shortlisted 2024',           bio: '"The Cairo Letters" weaves family secrets, revolution, and the resilience of womanhood.',                                       initial: 'N' },
  { name: 'Blessing Nduka',  country: 'Nigeria',      genre: 'Poetry',         award: 'Shortlisted 2024',           bio: '"Harmattan Psalms" draws on Yoruba oral tradition and contemporary urban life.',                                               initial: 'B' },
  { name: 'Thabo Mokoena',   country: 'South Africa', genre: 'Fiction',        award: 'Fiction of the Year 2022',   bio: '"Red Dust Roads" follows three generations across the political upheavals of 20th-century South Africa.',                       initial: 'T' },
  { name: 'Laila Osman',     country: 'Sudan',        genre: 'Non-Fiction',    award: 'Shortlisted 2023',           bio: '"Letters from Khartoum" is a haunting memoir of life, love, and loss through Sudan\'s political crises.',                      initial: 'L' },
  { name: 'Chukwuemeka Ibe', country: 'Nigeria',      genre: "Children's Lit", award: "Children's Lit 2022",        bio: '"The Boy Who Spoke to Stars" has become a beloved classroom text across West Africa.',                                          initial: 'C' },
  { name: 'Grace Wanjiru',   country: 'Kenya',        genre: 'Debut Fiction',  award: 'Debut Author 2022',          bio: '"Roots and Rain" explores the emotional landscape of a woman returning to rural Kenya after years in London.',                 initial: 'G' },
  { name: 'Omar Benali',     country: 'Morocco',      genre: 'Fiction',        award: 'Fiction of the Year 2021',   bio: '"The Blue Medina" weaves magical realism through the alleyways of a fictional Moroccan coastal city.',                        initial: 'O' },
]

export const testimonials = [
  { quote: 'T.A.L.A. gave my work a platform and a community I did not know I was missing. Winning the Debut Author award changed the trajectory of my career.',                           name: 'Amara Mwangi', role: 'Debut Author Award, 2023', country: 'Kenya',   initial: 'A' },
  { quote: 'As a self-published author from Senegal, I felt invisible. T.A.L.A. made me feel seen — and connected me with readers across Africa.',                                        name: 'Fatou Diallo', role: 'Non-Fiction Award, 2023',  country: 'Senegal', initial: 'F' },
  { quote: 'The mentorship programme alone is worth every moment. My mentor pushed my manuscript to a level I could not have reached alone.',                                              name: 'Kwame Asiedu', role: 'Mentorship Alumnus',       country: 'Ghana',   initial: 'K' },
]

export const blogPosts = [
  { id: 1, title: 'Why African Independent Authors Need More Than Talent',   category: 'Opinion',   date: 'March 5, 2026',  readTime: '5 min', excerpt: 'In a global publishing landscape dominated by a handful of mega-publishers, independent African authors face unique structural challenges — and unique opportunities.',  author: 'T.A.L.A. Editorial'     },
  { id: 2, title: 'The 2025 Laureate Ceremony: A Night of Voices',          category: 'News',      date: 'Feb 20, 2026',   readTime: '4 min', excerpt: "A recap of the most memorable moments from this year's ceremony — the speeches, the surprises, and the stories that moved us.",                                 author: 'T.A.L.A. Editorial'     },
  { id: 3, title: 'Self-Publishing in Africa: A Practical Guide for 2026',  category: 'Resources', date: 'Feb 2, 2026',    readTime: '8 min', excerpt: 'From manuscript to market: we break down the tools, platforms, and strategies that independent African authors are using to succeed.',                          author: 'Guest: Adaeze Okonkwo'  },
  { id: 4, title: 'Nominating Your Work: What the Judges Look For',         category: 'Awards',    date: 'Jan 18, 2026',   readTime: '6 min', excerpt: 'Our judging panel shares, candidly, what separates shortlisted entries from the rest — and it\'s not what you might expect.',                                 author: 'T.A.L.A. Editorial'     },
  { id: 5, title: 'Translating Africa: The Case for Literary Translation',  category: 'Culture',   date: 'Jan 5, 2026',    readTime: '7 min', excerpt: 'With over 2,000 languages on the continent, what does it mean to tell African stories in English, French, or Portuguese?',                                   author: 'Guest: Prof. Kofi Mensah'},
  { id: 6, title: 'Meet the Class of 2025: Where Are They Now?',           category: 'Profiles',  date: 'Dec 10, 2025',   readTime: '5 min', excerpt: 'We check in with our 2025 laureates one year on — new books, international deals, and the ways recognition changed their paths.',                              author: 'T.A.L.A. Editorial'     },
]

export const services = [
  { icon: '◈', title: 'Award Nomination',     desc: 'Submit your work across six prestigious categories. Nominations open annually to all independent African authors.',  cta: 'Nominate Your Work',   to: '/awards'  },
  { icon: '✦', title: 'Author Profile',       desc: 'Create a permanent, searchable profile on the T.A.L.A. platform — your biography, books, awards, and contact.',    cta: 'Create Profile',       to: '/contact' },
  { icon: '◉', title: 'Publisher Directory',  desc: 'Connect with African-friendly publishers, literary agents, and self-publishing support services.',                   cta: 'Browse Directory',     to: '/contact' },
  { icon: '⬡', title: 'Mentorship',           desc: 'Emerging authors are matched with established writers for a structured 6-month mentorship experience.',             cta: 'Apply for Mentorship', to: '/contact' },
  { icon: '◎', title: 'Book Launch Support',  desc: 'From press releases to social campaigns, we help our authors launch with maximum visibility and reach.',            cta: 'Get Support',          to: '/contact' },
  { icon: '⬢', title: 'Residencies & Events', desc: 'Writing residencies, panel talks, and literary festivals — connecting authors across the continent.',               cta: 'View Events',          to: '/contact' },
]

export const teamMembers = [
  { name: 'Dr. Amina Koya',   role: 'Founder & Executive Director', bio: 'A published novelist and literary critic with 20 years in African publishing. Founded T.A.L.A. to give independent authors the platform they deserve.', initial: 'A' },
  { name: 'Emmanuel Eze',     role: 'Head of Awards',               bio: 'Former editor at a major Lagos publishing house. Manages all award categories, judging panels, and the annual ceremony.',                               initial: 'E' },
  { name: 'Zainab Abdullahi', role: 'Author Relations',             bio: 'Connects authors to the T.A.L.A. community, manages the mentorship programme, and coordinates residencies.',                                            initial: 'Z' },
  { name: 'Tunde Oloruntoba', role: 'Digital & Communications',     bio: 'Runs all digital platforms, the blog, social media, and the T.A.L.A. newsletter. Passionate about storytelling in every medium.',                      initial: 'T' },
]

export const partners = [
  { name: 'African Publishers Network', type: 'Publishing',  desc: 'Connecting T.A.L.A. authors with vetted African publishers.' },
  { name: 'Bookswarm Literary',         type: 'Web & Digital', desc: 'Helping our laureates build professional author websites.' },
  { name: 'Pan-African Writers Guild',  type: 'Community',   desc: 'Shared membership benefits and co-hosted writing workshops.' },
  { name: 'Lagos Book & Art Festival',  type: 'Events',      desc: 'Annual platform for T.A.L.A. shortlisted authors to read and engage.' },
]

export const values = [
  { icon: '✦', title: 'Accessibility',   desc: 'No submission fees. No gatekeepers. African stories belong to everyone.' },
  { icon: '◈', title: 'Excellence',      desc: 'We hold our awards to the highest literary standards without apology.' },
  { icon: '◉', title: 'Representation', desc: 'We actively seek works in African languages, from every region of the continent.' },
  { icon: '⬡', title: 'Community',       desc: "Authors don't succeed alone. We build networks that last beyond the award cycle." },
]
