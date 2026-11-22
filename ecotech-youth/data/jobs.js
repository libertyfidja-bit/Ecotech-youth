const JOBS = [
  {
    cat: 'energy', icon: '☀️', bg: '#fff9e6',
    org: 'Rwanda Energy Group', loc: 'Kigali', badge: 'Full Time', bc: 'badge-green',
    pay: 'RWF 80,000/mo', dl: 'Closes Dec 15',
    title: 'Solar Installation Technician (Trainee)',
    tags: ['Solar', 'Technical', 'Field Work'],
    desc: 'Join our youth solar program and learn to install and maintain solar panels in rural communities while earning a stipend. This is an entry-level role with full on-the-job training provided — no experience needed.',
    duties: ['Install solar panels on homes and community buildings', 'Carry out routine maintenance and fault checks', 'Train community members on basic solar upkeep', 'Record installation data and report to supervisors'],
    reqs: ['O-Level certificate or equivalent', 'Basic interest in electrical/technical work', 'Willingness to travel to rural areas', 'No prior experience needed — full training provided'],
    offer: ['Full on-the-job training and national certification', 'Monthly stipend of RWF 80,000', 'Transport allowance for field work', 'Potential for permanent employment after 6 months']
  },
  {
    cat: 'media', icon: '📸', bg: '#f0f4ff',
    org: 'Green Earth Media', loc: 'Kigali / Remote', badge: 'Part Time', bc: 'badge-sky',
    pay: 'RWF 60,000/mo', dl: 'Closes Dec 20',
    title: 'Environmental Content Creator',
    tags: ['Content', 'Photography', 'Social Media'],
    desc: 'Create compelling stories about Rwanda\'s natural environment for digital platforms. Produce photography, short videos, social media content and written articles that inspire action on environmental issues.',
    duties: ['Photograph and film Rwanda\'s natural landscapes and green initiatives', 'Write short articles and social media captions', 'Manage the organisation\'s Instagram and X accounts', 'Collaborate with NGO partners on awareness campaigns'],
    reqs: ['Passion for environment and storytelling', 'Basic smartphone photography skills', 'Active social media presence', 'A-Level student or above preferred'],
    offer: ['Flexible remote working arrangement', 'Build a professional media portfolio', 'RWF 60,000 monthly retainer', 'Mentorship from senior environmental journalists']
  },
  {
    cat: 'agri', icon: '🌱', bg: '#f0faf4',
    org: 'AgriRwanda Cooperative', loc: 'Musanze', badge: 'Full Time', bc: 'badge-green',
    pay: 'RWF 70,000/mo', dl: 'Closes Jan 5',
    title: 'Sustainable Farming Coordinator',
    tags: ['Agriculture', 'Community', 'Training'],
    desc: 'Support small-scale farmers across the Northern Province in adopting eco-friendly practices. Deliver training workshops, monitor farm progress and connect farmers to profitable markets.',
    duties: ['Facilitate farmer training workshops on organic and sustainable methods', 'Monitor and document farm productivity improvements', 'Connect farmers with buyers and market platforms', 'Report progress to AgriRwanda management quarterly'],
    reqs: ['Diploma or degree in Agriculture, Environment or related field', 'Good communication skills in Kinyarwanda and French/English', 'Willingness to work in rural Musanze district', 'Motorcycle licence an advantage'],
    offer: ['RWF 70,000 monthly salary', 'Accommodation support in Musanze', 'Motorbike provided for field work', 'Annual performance bonus']
  },
  {
    cat: 'education', icon: '📚', bg: '#fff0f8',
    org: 'EcoLearn Rwanda', loc: 'Various Districts', badge: 'Contract', bc: 'badge-earth',
    pay: 'RWF 55,000/mo', dl: 'Closes Dec 30',
    title: 'Green Education Facilitator',
    tags: ['Education', 'Youth', 'Environment'],
    desc: 'Deliver environmental awareness workshops in secondary schools across Rwanda. Inspire the next generation to care for their environment through creative, hands-on learning sessions.',
    duties: ['Deliver 2-hour environmental workshops in assigned schools', 'Facilitate student eco-clubs and projects', 'Prepare lesson materials and activity packs', 'Submit attendance and feedback reports after each session'],
    reqs: ['Currently studying education, environment or social sciences', 'Strong public speaking and facilitation skills', 'Passion for youth development and sustainability', 'Ability to travel between schools in assigned district'],
    offer: ['RWF 55,000 monthly contract payment', 'All travel and materials fully covered', 'Accredited facilitator certificate on completion', 'Priority hiring for future permanent roles']
  },
  {
    cat: 'energy', icon: '⚡', bg: '#fff9e6',
    org: 'CleanTech Hub Kigali', loc: 'Kigali', badge: 'Full Time', bc: 'badge-green',
    pay: 'RWF 120,000/mo', dl: 'Closes Dec 18',
    title: 'Green Tech Developer (Junior)',
    tags: ['Tech', 'App Dev', 'Clean Energy'],
    desc: 'Build apps and digital platforms supporting Rwanda\'s clean energy transition. Perfect for Computer Science students who want to use their tech skills to drive real environmental impact.',
    duties: ['Build and maintain web and mobile apps for clean energy clients', 'Develop data dashboards to track energy usage and carbon metrics', 'Collaborate with designers and project managers on client solutions', 'Participate in agile sprint cycles and weekly code reviews'],
    reqs: ['Studying or graduated in Computer Science or Software Engineering', 'Proficiency in HTML, CSS, JavaScript or Python', 'Portfolio of at least one personal or academic project', 'Passion for clean technology and sustainability'],
    offer: ['RWF 120,000/mo — highest entry-level salary in this cohort', 'Work in a modern co-working space in Kigali', 'Paid access to Coursera and Udemy learning platforms', 'Fast-track to senior developer within 12 months']
  },
  {
    cat: 'agri', icon: '🍃', bg: '#f0faf4',
    org: 'Rwanda Reforestation Initiative', loc: 'Nyungwe Region', badge: 'Full Time', bc: 'badge-green',
    pay: 'RWF 65,000/mo', dl: 'Closes Jan 10',
    title: 'Community Reforestation Officer',
    tags: ['Forestry', 'Community', 'Conservation'],
    desc: 'Lead tree planting drives and train local communities on forest conservation and sustainable land use across the Nyungwe buffer zone — one of Rwanda\'s most important conservation programs.',
    duties: ['Organise and lead community tree planting events', 'Train community groups in sustainable land and soil management', 'Monitor survival rates of planted trees and update records', 'Coordinate with local government officials and community leaders'],
    reqs: ['Background in forestry, environment or natural resource management', 'Comfortable working outdoors in forest and rural settings', 'Kinyarwanda fluency essential; English or French beneficial', 'Strong community engagement and leadership skills'],
    offer: ['RWF 65,000 monthly salary', 'Field accommodation provided in Nyungwe area', 'Training in GIS and forest monitoring tools', 'Certificate in Conservation Management upon contract completion']
  },
  {
    cat: 'energy', icon: '🔋', bg: '#f0fff4',
    org: 'GreenPower Rwanda', loc: 'Kigali / Huye', badge: 'Full Time', bc: 'badge-green',
    pay: 'RWF 90,000/mo', dl: 'Closes Jan 20',
    title: 'Renewable Energy Sales Officer',
    tags: ['Sales', 'Solar', 'Business Development'],
    desc: 'Drive adoption of solar home systems and clean cooking solutions in peri-urban communities. Build relationships with community leaders, households and small businesses to grow Rwanda\'s renewable energy market.',
    duties: ['Identify and visit potential customers in assigned areas', 'Demonstrate solar products and clean cooking solutions', 'Process sales orders and coordinate delivery and installation', 'Build long-term relationships and handle after-sales support'],
    reqs: ['Diploma or degree in business, marketing or related field', 'Strong communication and negotiation skills', 'Comfortable working in the field across communities', 'Experience in sales or community outreach preferred'],
    offer: ['RWF 90,000 base salary plus commission', 'Motorcycle and fuel provided', 'Monthly performance bonuses on sales targets', 'Full product training and ongoing coaching']
  },
  {
    cat: 'education', icon: '🏫', bg: '#fff0f8',
    org: 'MKU Green Campus Initiative', loc: 'Kigali', badge: 'Part Time', bc: 'badge-sky',
    pay: 'RWF 40,000/mo', dl: 'Closes Jan 2',
    title: 'Campus Sustainability Ambassador',
    tags: ['Campus', 'Sustainability', 'Youth Leadership'],
    desc: 'Lead MKU\'s green campus movement — organise sustainability events, run awareness campaigns and implement waste reduction initiatives across the university. Perfect for passionate MKU students.',
    duties: ['Organise monthly campus sustainability events and clean-up drives', 'Run social media campaigns on campus environmental issues', 'Coordinate with university administration on green policy', 'Recruit and manage a team of 10+ volunteer green champions'],
    reqs: ['Current MKU student in any year or department', 'Strong leadership and event organisation skills', 'Passion for sustainability and campus development', 'Active on social media with communication skills'],
    offer: ['RWF 40,000 monthly stipend', 'Official MKU leadership certificate', 'Priority recommendation for green internships and jobs', 'Networking with university staff and industry partners']
  }
];
