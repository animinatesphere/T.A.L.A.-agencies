export const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Authors',  to: '/authors' },
  { label: 'Blog',     to: '/blog' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
  // { label: 'Admin',    to: '/admin' },
]

export const pricingPlans = [
  {
    name: 'Basic',
    price: '117,000',
    currency: 'NGN',
    desc: 'The essential foundation for a professional author presence.',
    features: [
     'Homepage', 'About the author', 'E-commerce integration', 'Contact page', 'Social media integration', 'Local payment gateway integration', 'Six months hosting', 'Blog'
    ]
  },
  {
    name: 'Hybrid',
    price: '150,000',
    currency: 'NGN',
    isPopular: true,
    desc: 'The complete toolkit for global storytelling and engagement.',
    features: [
      'Homepage', 'About the author', 'E-commerce integration', 'Contact page', 'Social media integration', 'Local and international payment gateway integration', 'Six months hosting', 'Blog', 'Interviews and features page', 'Appearance and events page', 'Awards and recognition page', 'Rich media integration'
    ]
  },
  {
    name: 'Professional',
    price: '250,000',
    currency: 'NGN',
    desc: 'The ultimate literary engine for authors seeking global excellence.',
    features: [
       'Homepage', 'About the author', 'E-commerce integration', 'Contact page', 'Social media integration', 'Local and international payment gateway integration', 'Six months hosting', 'Blog', 'Interviews and features page', 'Appearance and events page', 'Awards and recognition page', 'Rich media integration', 'Giveaway page', 'Signed books page', 'Advanced Readers Copy page', 'Premium design customisation', 'AI chatbot for support'
    ]
  }
]

export const stats = [
  { value: '500+',  label: 'Websites Built' },
  { value: '1,200+', label: 'Happy Authors' },
  { value: '25',     label: 'Global Partners' },
  { value: '100%',   label: 'Success Rate' },
]

export const services = [
  { 
    icon: '🌐', 
    title: 'Website design and build', 
    desc: 'Beautiful, bespoke websites for authors, publishers, and literary agencies. Custom designs that are easy to manage and evolve.' 
  },
  { 
    icon: '🎨', 
    title: 'Branding and design',      
    desc: 'Brand identities for publishing startups and authors, including marketing materials for print and social media.' 
  },
  { 
    icon: '📈', 
    title: 'Marketing',       
    desc: 'Strategic reach through social media, dedicated events pages, and campaign-ready digital assets.' 
  },
  { 
    icon: '💬', 
    title: 'Training and support',      
    desc: 'Hands-on sessions and remote support to ensure you are comfortable. Our site master plugin offers life-long help.' 
  },
  { 
    icon: '💎', 
    title: 'Premium Design',  
    desc: 'Unique, high-end aesthetics that make your literary project stand out on any screen or device.' 
  },
  { 
    icon: '🚀', 
    title: 'Launch Support',  
    desc: 'From ARC pages to giveaway management, we handle the technical side of your high-impact launch.' 
  },
]

export const authors = [
  { name: 'Adaeze Okonkwo',  country: 'Nigeria',      genre: 'Fiction',        award: 'Website by BlackQuill',   bio: 'Author of "The Weight of Rivers", leveraging a bespoke BlackQuill platform for global sales.',                        initial: 'A' },
  { name: 'Sipho Dlamini',   country: 'South Africa', genre: 'Poetry',         award: 'Professional Client',     bio: 'His collection "Embers of Soweto" reached #1 on his integrated e-commerce store.',                          initial: 'S' },
  { name: 'Fatou Diallo',    country: 'Senegal',      genre: 'Non-Fiction',    award: 'Hybrid Client',           bio: 'Journalist using her BlackQuill blog to connect with readers across Dakar and Paris.',                             initial: 'F' },
]
// ... rest of the file (keeping other exports for now but focused on primary ones)
export const testimonials = [
  { 
    quote: "I am so pleased that I commissioned BlackQuill to develop my new author website, a replacement for my existing one. The initial brief meeting set the tone for the whole project. The team really listened to what I needed and provided a wide range of options and examples. Their expert knowledge of the publishing industry was a huge bonus as well. My finished website is so straightforward to manage – being able to easily add or change my own content is an excellent feature. Highest of recommendations for BlackQuill!",
    name: "Ayodeji Ajagbe", 
    role: "International Best Selling & Award-Winning Author", 
    country: "Nigeria",   
    initial: "A" 
  },
  { 
    quote: "Turner: “We were struggling to find a good website designer until we met with BlackQuill team. Suddenly we understood the difference that a truly professional, experienced and client-focused web design team could make to our project. BlackQuill are true professionals with the skill mix necessary to design, develop and host a website that says excellence. They are extremely patient and the team created for us a website of which we are extremely proud. We cannot recommend the BlackQuill team more highly.”",
    name: "The Africa Laureate Awards Limited", 
    role: "Strategic Partner", 
    country: "Corporate", 
    initial: "T" 
  },
]

export const teamMembers = [
  { name: 'Dr. Amina Koya',   role: 'Founder & Executive Director', bio: 'A published novelist and literary critic with 20 years in African publishing. Founded BlackQuill to give authors the platform they deserve.', initial: 'A' },
  { name: 'Emmanuel Eze',     role: 'Head of Development',          bio: 'Expert architect of bespoke literary platforms. Manages all technical builds and e-commerce integrations.',                               initial: 'E' },
]

export const partners = [
  { name: 'African Publishers Network', type: 'Publishing',  desc: 'Connecting BlackQuill authors with vetted African publishers.' },
  { name: 'Bookswarm Literary',         type: 'Web & Digital', desc: 'Collaborative support for international laureates.' },
]

export const values = [
  { icon: '✦', title: 'Specialization',   desc: 'We are Nigeria’s only agency dedicated specifically to the book publishing industry.' },
  { icon: '◈', title: 'Bespoke Quality',  desc: 'We move beyond basics, focusing on strategic objectives and unique designs.' },
  { icon: '◉', title: 'Empowerment',      desc: 'Hands-on training and lifelong support to make you comfortable with your site.' },
  { icon: '⬡', title: 'Global Reach',     desc: 'Based in Nigeria, we serve a global client base of authors and publishers.' },
]

export const blogPosts = [
  {
    id: 1,
    title: "The Rise of Independent African Publishing",
    category: "News",
    readTime: "5 min read",
    excerpt: "Exploring how digital platforms are empowering a new generation of African authors to reach global audiences.",
    date: "March 18, 2026"
  },
  {
    id: 2,
    title: "5 Tips for Marketing Your First Novel",
    category: "Resources",
    readTime: "8 min read",
    excerpt: "Practical advice on building an author brand, leveraging social media, and engaging with readers.",
    date: "March 15, 2026"
  }
]

export const awardCategories = [
  { icon: '🖋️', title: 'Best Independent Fiction', desc: 'Rewarding exceptional storytelling that breaks boundaries.' },
  { icon: '📜', title: 'Excellence in Poetry', desc: 'Recognising collections that capture the complexity of the continent.' }
]

export const awardTimeline = [
  { date: 'January 1, 2026', phase: 'Nominations Open', desc: 'Authors and publishers can submit works for consideration.' }
]

export const judgingCriteria = [
  { title: 'Literary Merit', desc: 'Exceptional craftsmanship and unique voice.' }
]

export const faqs = [
  { q: "Who is eligible to submit?", a: "Any author who has published a book independently within the last 24 months." }
]
