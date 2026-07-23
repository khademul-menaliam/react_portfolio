import type { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexus-core-ui',
    title: 'Nexus Core UI',
    description: 'A high-performance glassmorphic dashboard interface engineered for real-time financial data visualization, built with bleeding-edge web technologies.',
    tags: ['React', 'Three.js', 'Tailwind', 'WebSocket'],
    client: 'FinTech Global Solutions',
    timeline: 'Q3 2023 - Q1 2024',
    role: 'Lead Front-end Architect',
    overview: 'The Nexus Core UI project aimed to solve the latency issues inherent in traditional web-based trading platforms. By implementing a custom WebGL rendering engine layered beneath a reactive DOM structure, we achieved 60fps data updates without compromising the rich, glassmorphic aesthetic. Key challenges included managing the z-index complexity of translucent panels while ensuring the underlying data streams remained legible. The solution involved a meticulous color palette relying on deep obsidian base layers (#0a0a0f) and high-contrast neon accents for critical data points.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIcTFaQ04EQm0zG6mxEHvoOjqAYHhKBC6d_VR_0BwCAl0_tWVqaaH23megIB3iStmFFfcdh-TjppmQ9hNqx72VIOpOwD9D0JHJ2LKmpePVpCHyvW952OVgRaXKJJVOeGC6ysaczk4Vak_xl3M3u1A2Vwm40J0VmKdZqRvJuFbamJCekT-7IBfx3-WCQg1YrTf3ci-Mt0O7pQ0_EXNbuF9tuSRgevWJY62G_eDroroqcHVZkqQDEAbX9IbUroHx3-zinYnfQqt2RcU',
    visibility: 'public'
  },
  {
    id: 'quantum-ml-pipeline',
    title: 'Quantum-ML Pipeline',
    description: 'An automated machine learning orchestration pipeline designed to train, evaluate, and deploy predictive models with minimal human intervention. Integrates tightly with cloud-native storage.',
    tags: ['PYTHON', 'TENSORFLOW', 'DOCKER'],
    client: 'BioTech Innovations',
    timeline: 'Q2 2024 - Present',
    role: 'MLOps Engineer',
    overview: 'Engineered a scalable machine learning pipeline that automates model retraining based on incoming data streams. Utilizing TensorFlow for model architecture and Docker for containerized deployment, the system has reduced manual model update times by over 80%. Cloud integration allows seamless storage and versioning of datasets and model checkpoints.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmO5485No5uX4h7vj-63lzNd96BJrjcycddOlYcmxirwJOHeRBRhysbB7ZA4I89jtFb0mV7BvpHColbqsj1n8Q2FkLiI5HwGEjHeWB0c5r_ah4WEyEUKHnxqqqMyLkun05Q76itOgoGkGyRqcYfdn_9uKzKmgnfhshs8VmydvU0Rs3iMIHZaDqCiW3gbwNNEHB3EzFJErtB39iTzILhabAh56LP7rcEYJ6Up0JzSlovIpiCT1De2kEidkEjXktTSk5tLR_ghOxaEk',
    visibility: 'lock'
  },
  {
    id: 'omnisync-mobile',
    title: 'OmniSync Mobile',
    description: 'Cross-platform mobile application for decentralized task management. Built with a local-first architecture ensuring seamless offline functionality and eventual consistency sync.',
    tags: ['FLUTTER', 'DART', 'SQLITE'],
    client: 'SaaS Productivity Corp',
    timeline: 'Q1 2024 - Q3 2024',
    role: 'Mobile App Lead',
    overview: 'Developed a secure task and project management mobile application operating under a local-first database paradigm. SQLite cache serves all reads/writes locally, while a background sync engine handles reconciliation with remote databases once a network connection is re-established. Built cross-platform using Flutter and Dart.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUs6yGWY7gC6bE3cYIF5PMsHH7sNLzts0Iam_yJ9LcyNAX-7_F6KxUgr7Vetq8ipE9upBalkLZdYJpXHa6-gfzwrQD0oEkUzYQvr6xF1NrizFO7aWF7XtCz8wm79lXzXfyvoJ-xjhEJ9WratFwreD1mZExUSLwy209xj6qsfA388kqm3NRUhwFBdp2IfCy4xipVkGBbK4DLG1WvxMCzRl-_0SHX5LScIdbbxLMLB49jry1cHcORW_CXVpsgtmDvkoKyCrgv7ANork',
    visibility: 'smartphone'
  },
  {
    id: 'sysadmin-cli-toolkit',
    title: 'SysAdmin CLI Toolkit',
    description: 'A suite of command-line utilities built in Go for rapid infrastructure provisioning, log parsing, and automated security auditing across diverse server environments.',
    tags: ['GOLANG', 'BASH', 'LINUX'],
    client: 'Internal DevOps',
    timeline: 'Ongoing',
    role: 'Systems Engineer',
    overview: 'Designed and implemented a lightweight command line tool to aid system administrators in parsing gigabytes of server logs, setting up standard Linux configurations, and running system health checks. The tool compiles down to a single binary with zero dependencies using Go, making it easily deployable across fleet servers.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGTZjyRpm-6v6KstWO2FfJsXTw6t0nklb-AxyJYTprcruTLk9sLGa3MFOHgeAd9FP2j5ZXDlow2EBTjzSrgy1gTU6cIUWJf6x-VSR3dmFf0Rw3AYMpifYRbamRMqTjuld5lkCjVzJJBcFQPrV7F2z9dtXaEr_0aGhTAsfD2DaBfVO7fDl6FVqD2C98QOLAWPoMbi4o7wgaRkFNi4ioYs60CA6QjLcXRBMl0wP88aCi0mUa9u4c6iJDvgpsUXkPD8_kNKFPGv-qElI',
    visibility: 'terminal'
  },
  {
    id: 'aether-api-gateway',
    title: 'Aether API Gateway',
    description: 'A robust, lightweight API gateway managing authentication, rate limiting, and request routing for microservices. Designed for extreme low-latency environments.',
    tags: ['RUST', 'REDIS', 'KUBERNETES'],
    client: 'Neo-Web Systems',
    timeline: 'Q4 2024 - Present',
    role: 'Backend Architect',
    overview: 'Created an API gateway written in Rust utilizing Redis for fast session lookup and token-bucket rate limiting. Replaced an older, bulky node-based gateway to decrease routing overhead from 15ms down to less than 2ms. Integrated cleanly into Kubernetes clusters for automatic scaling.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC60ZL644qxNctKjG_7RWWbLyUaHB1eAcX98bLpgR4bzqbWiV63EWk6Skz1Pzqt5y1jA5rVmV8oep2Y7C6Tx9lGwhnCu-AhFjWLLGGSu6nnjiX6R6nQMIYsdWMokv5gZFMKCbV8vSa-7tCFM8A8ZEOO4pbggFdHTjYF3hwRFHCgGg76sjk18v1tTo1r47pC-M5lnXFwUoWqK_MMDP843fNSacdbW3pmRt1h_SvWNTe6f_L-ZvjXS1OTicpkNOotNZIVGAFI2ZpU40o',
    visibility: 'api'
  },
  {
    id: 'hyperstore-front',
    title: 'HyperStore Front',
    description: 'A headless e-commerce frontend leveraging edge computing for sub-second page loads globally. Features a highly modular component system and seamless checkout flows.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'GRAPHQL'],
    client: 'Apex Retail Group',
    timeline: 'Q2 2024',
    role: 'Frontend Engineer',
    overview: 'Developed a modern React application utilizing Next.js, serving headless store pages rendered statically and updated via incremental static regeneration. Queries Shopify\'s GraphQL API, producing a super fast shopping experience with integrated payment processors.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnAgOuFS6dycfV-KdbQuF9p0fr0HgzMWRCEOaS-5K-AFt5UPy2cBKLFeiQSmR9y_ndhYgBq0FbQq6QxF5jl-I6h0HMCa0d450UXbbdDJopT4kt-mP38Jbz7T9pl_VidxHPBjcrBc8U5d9XwZtdV6pWAg06ZmdasQ99C5CYjWAXaIR-CxDy7SlrQ9AyNwP9b6EZJcUgEUX6H8405wD5xoKyzbWv8ySfjKYoFZ1qq58a1bjfQI_g26oimPACtAILPIA90aPo6hSz2so',
    visibility: 'shopping_cart'
  }
];
