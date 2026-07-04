export const projects = [
  {
    id: 'ticketing-platform',
    title: 'Ticketing Platform',
    type: 'SaaS product system',
    description:
      'A scalable event ticketing platform covering admin workflows, event operations, frontend/backend integration, and maintainable product architecture.',
    focus: ['Scalable SaaS architecture', 'Admin systems', 'API integration', 'Maintainable frontend structure'],
    architecture: [
      'Separated admin and customer-facing workflows for cleaner ownership boundaries.',
      'Designed reusable dashboard patterns for event, ticket, and user management.',
      'Structured integration points around predictable API states and resilient UI feedback.',
    ],
    stack: ['Next.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'Redux'],
    contribution:
      'Led frontend architecture, built admin dashboard flows, integrated backend APIs, and shaped the system structure for long-term scalability.',
    liveLink: null,
    githubLink: null,
    featured: true,
    status: 'In Progress',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    type: 'Full-stack commerce application',
    description:
      'A full-stack e-commerce platform with user and admin systems, purchasing workflows, backend services, and structured state management.',
    focus: ['Scalable backend', 'Purchasing workflows', 'Admin/user systems', 'State management'],
    architecture: [
      'Built product, cart, order, and admin concerns as separate system flows.',
      'Implemented state management patterns that keep user actions predictable across pages.',
      'Designed backend routes and data models for practical product operations.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'TailwindCSS'],
    contribution:
      'Owned the end-to-end implementation across backend structure, user flows, admin functionality, and frontend integration.',
    liveLink: null,
    githubLink: null,
    featured: true,
    status: 'Completed',
  },
  {
    id: 'shanks-media',
    title: 'Shanks Media & Software Company Website',
    type: 'Company website',
    description:
      'A professional corporate website for Shanks Media & Software Company Limited, built with a clean content structure and responsive frontend.',
    focus: ['Responsive frontend', 'Brand presentation', 'Performance-minded UI'],
    architecture: [
      'Organized content around clear service, company, and conversion paths.',
      'Kept the frontend lightweight and maintainable for ongoing company updates.',
    ],
    stack: ['Next.js', 'TailwindCSS'],
    contribution: 'Built the frontend experience, responsive layouts, and performance-focused presentation.',
    liveLink: 'https://www.shanksmedia.com',
    githubLink: null,
    featured: true,
    status: 'Live',
  },
  {
    id: 'youtube-react-clone',
    title: 'YouTube React Clone',
    type: 'API-driven frontend',
    description:
      'A React-based video browsing interface with search, channel pages, API data rendering, and responsive UI composition.',
    focus: ['API integration', 'Search experience', 'Responsive UI'],
    architecture: [
      'Composed reusable UI surfaces for video lists, channel pages, and search states.',
      'Handled remote API data with clear loading, empty, and content rendering boundaries.',
    ],
    stack: ['React.js', 'RapidAPI', 'Material UI'],
    contribution: 'Built the API integration, UI structure, and responsive frontend implementation.',
    liveLink: null,
    githubLink: 'https://github.com/Abdullahi-Jimba/youtube-react-clone',
    featured: false,
    status: 'Completed',
  },
  {
    id: 'developer-utility-tools',
    title: 'Developer Utility Tools',
    type: 'Developer productivity suite',
    description:
      'A set of practical browser-based utilities including JSON formatting, color tooling, regex testing, and other developer helpers.',
    focus: ['Tool logic', 'Developer experience', 'Utility-first UI'],
    architecture: [
      'Built each tool as a focused module with reusable interface patterns.',
      'Prioritized fast interactions and low-friction workflows for repeated developer use.',
    ],
    stack: ['React.js', 'TailwindCSS'],
    contribution: 'Owned the tool logic, UI implementation, and deployment workflow.',
    liveLink: 'https://developer-utility-tools.vercel.app',
    githubLink: null,
    featured: false,
    status: 'Live',
  },
]
