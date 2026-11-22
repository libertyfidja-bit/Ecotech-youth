const COURSES = [
  {
    e: '🌿', bg: 'linear-gradient(135deg,#c8f0d8,#2d7a4f)',
    title: 'Introduction to Green Entrepreneurship',
    cat: 'Business', dur: '4 hours', mods: 8, prog: 0, lvl: 'Beginner',
    desc: 'Learn how to identify green business opportunities and build enterprise models with real social and environmental impact. Designed for youth with no prior business experience — start from zero and finish with a real business idea.',
    modules: [
      'What is the green economy and why it matters for Rwanda',
      'Identifying environmental problems as business opportunities',
      'The lean startup method applied to eco-ventures',
      'Building your Minimum Viable Product (MVP)',
      'Green revenue models that actually work',
      'Social and environmental impact measurement',
      'Pitching your green idea to funders and judges',
      'Building partnerships with NGOs and government agencies'
    ],
    outcomes: [
      'Identify a viable green business opportunity in your community',
      'Build a complete business model canvas for your idea',
      'Understand how to measure social and environmental impact',
      'Pitch your idea confidently to investors and judges'
    ]
  },
  {
    e: '💻', bg: 'linear-gradient(135deg,#c8e6ff,#4a90d9)',
    title: 'Web & App Development for Green Projects',
    cat: 'Technology', dur: '8 hours', mods: 12, prog: 35, lvl: 'Intermediate',
    desc: 'Build real digital tools for the green economy. Learn HTML, CSS and JavaScript from scratch and apply them to build environmental dashboards, job boards and community platforms — just like EcoTech Youth itself.',
    modules: [
      'Introduction to web development — how the internet works',
      'HTML fundamentals — structuring your content',
      'CSS fundamentals — styling and layout',
      'JavaScript basics — making pages interactive',
      'Building forms and collecting user data',
      'Connecting to APIs and displaying live data',
      'Building a simple green jobs board from scratch',
      'Building an environmental impact dashboard',
      'Introduction to mobile-responsive design',
      'Version control with GitHub — saving and sharing code',
      'Deploying your website on Vercel for free',
      'Final project — build and launch your own green platform'
    ],
    outcomes: [
      'Build a complete, working website using HTML, CSS and JavaScript',
      'Create interactive forms and dynamic content',
      'Deploy a live website on the internet for free using Vercel',
      'Use GitHub to manage and share your code professionally'
    ]
  },
  {
    e: '☀️', bg: 'linear-gradient(135deg,#fff3c0,#f5a623)',
    title: 'Solar Energy & Clean Power Basics',
    cat: 'Clean Energy', dur: '5 hours', mods: 9, prog: 0, lvl: 'Beginner',
    desc: 'Understand how solar energy works, how panels are installed and maintained, and how clean energy is transforming Rwanda\'s rural communities. No technical background needed — this course starts from the basics.',
    modules: [
      'How solar energy works — from sunlight to electricity',
      'Types of solar systems — off-grid, on-grid and hybrid',
      'Reading and understanding solar panel specifications',
      'Basic electrical safety for solar installation',
      'Step-by-step solar panel installation guide',
      'Connecting batteries, inverters and charge controllers',
      'Routine maintenance and troubleshooting common faults',
      'Solar energy business opportunities for Rwandan youth',
      'Case studies — Rwanda Energy Group and rural electrification'
    ],
    outcomes: [
      'Explain how solar energy systems work from panel to plug',
      'Identify all the components of a basic solar installation',
      'Carry out routine inspection and maintenance on a solar system',
      'Identify at least 3 business opportunities in Rwanda\'s clean energy sector'
    ]
  },
  {
    e: '🌍', bg: 'linear-gradient(135deg,#c8f0d8,#6dd99a)',
    title: 'Climate Change & Rwanda',
    cat: 'Environment', dur: '3 hours', mods: 6, prog: 70, lvl: 'Beginner',
    desc: 'Understand the science of climate change, how Rwanda is already being affected, and what the government and youth are doing about it. Essential knowledge for anyone working in Rwanda\'s green economy.',
    modules: [
      'What is climate change and why does it matter now?',
      'How Rwanda is already experiencing climate impacts',
      'Rwanda\'s National Determined Contributions (NDCs)',
      'Rwanda\'s Green Growth and Climate Resilience Strategy 2050',
      'Youth-led climate action — inspiring case studies from Rwanda',
      'How to get involved in local and national climate policy'
    ],
    outcomes: [
      'Explain climate change and its specific impact on Rwanda',
      'Describe Rwanda\'s key environmental commitments and policies',
      'Identify 3 concrete local climate action opportunities',
      'Connect your project or business directly to national sustainability goals'
    ]
  },
  {
    e: '🌱', bg: 'linear-gradient(135deg,#e8f5d0,#b8e06a)',
    title: 'Sustainable Agriculture & Agri-Business',
    cat: 'Agriculture', dur: '6 hours', mods: 9, prog: 15, lvl: 'Beginner',
    desc: 'Explore eco-friendly farming methods, soil health, water management and how to build viable agri-enterprises in Rwanda. Perfect for youth interested in farming, food security or rural development.',
    modules: [
      'Introduction to sustainable agriculture in Rwanda',
      'Soil health — composting and organic matter management',
      'Water-smart farming techniques and irrigation basics',
      'Organic pest management without chemicals',
      'Agroforestry — combining trees, crops and livestock',
      'Market access and selling your produce profitably',
      'Building an agri-business plan step by step',
      'Using mobile apps for farm management and record keeping',
      'Youth agri-business success stories from Rwanda'
    ],
    outcomes: [
      'Apply at least 3 sustainable farming techniques on a real plot',
      'Build a complete farm business plan including costings',
      'Connect with farmers markets, cooperatives and buyers in Rwanda',
      'Design a simple agroforestry system for a community plot'
    ]
  },
  {
    e: '📸', bg: 'linear-gradient(135deg,#f9d8e8,#f5a0c8)',
    title: 'Environmental Storytelling & Media',
    cat: 'Media', dur: '5 hours', mods: 7, prog: 0, lvl: 'Beginner',
    desc: 'Learn to use photography, video and social media to tell powerful stories about environmental issues and green solutions in your community. Build a professional portfolio as you complete each module.',
    modules: [
      'Why storytelling is the most powerful tool for environmental change',
      'Finding your unique environmental story angle',
      'Smartphone photography techniques for environmental content',
      'Filming and editing short eco-documentaries on your phone',
      'Writing compelling articles for environmental blogs and social media',
      'Building an audience and growing your green content channel',
      'Pitching your environmental stories to media organisations and NGOs'
    ],
    outcomes: [
      'Capture professional-quality environmental photos on a smartphone',
      'Produce a compelling 60-second environmental video',
      'Write an engaging blog post or article on a green topic',
      'Build and grow a social media audience around sustainability content'
    ]
  },
  {
    e: '🏢', bg: 'linear-gradient(135deg,#e8d5f5,#a855f7)',
    title: 'Green Business Finance & Revenue Models',
    cat: 'Business', dur: '4 hours', mods: 7, prog: 0, lvl: 'Intermediate',
    desc: 'Learn how green businesses make money sustainably. Understand revenue streams, pricing, cash flow and how to become financially self-sufficient without depending on donations or grants.',
    modules: [
      'Why most green ventures fail financially — and how to avoid it',
      'Revenue models for social enterprises in Africa',
      'Pricing your product or service for sustainability',
      'Building a simple profit and loss statement',
      'Understanding cash flow — the lifeblood of any business',
      'Grants, loans and impact investment — what\'s available in Rwanda',
      'Financial planning for your first 12 months of operation'
    ],
    outcomes: [
      'Design a multi-stream revenue model for your green venture',
      'Build a simple 12-month financial projection',
      'Identify at least 3 funding sources available to green businesses in Rwanda',
      'Understand and explain your business finances clearly to any investor'
    ]
  },
  {
    e: '🤝', bg: 'linear-gradient(135deg,#fde8d8,#f97316)',
    title: 'Community Project Management',
    cat: 'Community', dur: '4.5 hours', mods: 8, prog: 0, lvl: 'Beginner',
    desc: 'Learn how to plan, run and measure the impact of community eco-projects. From writing a project proposal to managing a team and reporting results to funders — this course covers it all.',
    modules: [
      'What makes a successful community eco-project?',
      'Identifying community needs through participatory research',
      'Writing a winning project proposal for NGO and government funding',
      'Building and managing a volunteer and paid project team',
      'Project planning — timelines, budgets and milestones',
      'Running community engagement events and workshops',
      'Monitoring and evaluating your project\'s real impact',
      'Writing impact reports that impress donors and partners'
    ],
    outcomes: [
      'Write a full project proposal ready to submit to a funder',
      'Build a detailed project plan with timeline and budget',
      'Run a community engagement event from start to finish',
      'Produce a professional impact report for your project'
    ]
  },
  {
    e: '🔋', bg: 'linear-gradient(135deg,#d1fae5,#059669)',
    title: 'Waste Management & Circular Economy',
    cat: 'Environment', dur: '3.5 hours', mods: 6, prog: 0, lvl: 'Beginner',
    desc: 'Discover how waste can become a resource. Learn the principles of the circular economy and how Rwandan youth are turning plastic, organic and electronic waste into income-generating green businesses.',
    modules: [
      'Rwanda\'s waste challenge — the scale of the problem',
      'Introduction to the circular economy — waste as a resource',
      'Plastic waste — collection, sorting and upcycling into products',
      'Organic waste — composting and biogas production basics',
      'E-waste — safe handling and refurbishment opportunities',
      'Building a waste-to-income business in Rwanda — case studies and startup guide'
    ],
    outcomes: [
      'Explain the circular economy and how it applies to Rwanda',
      'Identify 3 viable waste-to-income business opportunities in your area',
      'Understand the basics of plastic upcycling, composting and e-waste handling',
      'Design a simple waste collection and processing business model'
    ]
  },
  {
    e: '🧠', bg: 'linear-gradient(135deg,#fce7f3,#ec4899)',
    title: 'Mental Health & Wellbeing at Work',
    cat: 'Wellbeing', dur: '3 hours', mods: 6, prog: 0, lvl: 'Beginner',
    desc: 'Understand the connection between meaningful work, mental health and personal wellbeing. Learn practical tools for managing stress, building resilience and creating psychologically safe workplaces — especially important for young entrepreneurs.',
    modules: [
      'Understanding mental health — breaking the stigma in Rwanda',
      'The link between purposeful work and mental wellbeing',
      'Stress, burnout and how to recognise them early',
      'Practical tools for daily mental health management',
      'Building resilience as a young entrepreneur or worker',
      'Creating a psychologically safe team and workplace culture'
    ],
    outcomes: [
      'Explain the connection between work, purpose and mental wellbeing',
      'Identify signs of stress and burnout in yourself and teammates',
      'Apply at least 3 daily mental health management techniques',
      'Create a simple wellbeing plan for yourself or your team'
    ]
  },
  {
    e: '📊', bg: 'linear-gradient(135deg,#fff7ed,#f97316)',
    title: 'Data & Impact Measurement for Green Projects',
    cat: 'Technology', dur: '4 hours', mods: 7, prog: 0, lvl: 'Intermediate',
    desc: 'Learn how to collect, analyse and present data that proves your green project is making a real difference. Master Google Sheets, charts and impact reporting frameworks used by NGOs and investors worldwide.',
    modules: [
      'Why data and impact measurement matter for green projects',
      'Setting SMART goals and key performance indicators (KPIs)',
      'Collecting data — surveys, observation and digital tools',
      'Google Sheets for impact tracking — from zero to dashboard',
      'Visualising your data with charts, graphs and maps',
      'Common impact frameworks — Theory of Change and Logical Framework',
      'Writing and presenting an impact report to donors and partners'
    ],
    outcomes: [
      'Set clear, measurable goals and KPIs for any green project',
      'Build a complete impact tracking dashboard in Google Sheets',
      'Create compelling charts and visualisations from your data',
      'Write a professional impact report ready to share with funders'
    ]
  },
  {
    e: '💰', bg: 'linear-gradient(135deg,#fff0d8,#ffc875)',
    title: 'Pitching Green Businesses to Investors',
    cat: 'Business', dur: '3 hours', mods: 5, prog: 0, lvl: 'Advanced',
    desc: 'Master the art of pitching your green business idea. Learn to build an investor-ready deck, tell your impact story compellingly, handle tough questions from funders and win competitions like this hackathon.',
    modules: [
      'What impact investors and judges look for in green ventures',
      'Structuring your 3-minute pitch — the proven winning formula',
      'Building a powerful 7-slide pitch deck from scratch',
      'Financial modelling basics — revenue, costs and projections',
      'Practising, refining and delivering your pitch with total confidence'
    ],
    outcomes: [
      'Build a complete 7-slide investor pitch deck for your green business',
      'Deliver a confident, compelling 3-minute pitch to any audience',
      'Answer tough funder questions about viability, impact and scalability',
      'Apply to at least one real green business competition or funding opportunity in Rwanda'
    ]
  }
];
