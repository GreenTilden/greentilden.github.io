// Project data constants
export interface ProjectMedia {
  type: 'image' | 'video' | 'gif'
  url: string
  caption: string
  thumbnail?: string
}

export interface Project {
  title: string
  subtitle?: string
  description: string
  image: string | null
  media: ProjectMedia[]
  technologies: string[]
  achievements: string[]
  github: string | null
  demo?: string | null
  externalLink?: string
  demoType: 'interactive' | 'video' | 'gallery' | 'workflow'
  categories: string[]
  featured: boolean
  year: number
}

export interface ProjectFilter {
  label: string
  value: string
}

export const PROJECT_FILTERS: ProjectFilter[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI', value: 'ai' },
  { label: 'Automation', value: 'automation' },
  { label: 'Software', value: 'software' },
  { label: 'Personal', value: 'personal' }
]

export const PROJECT_DATA: Project[] = [
  {
    title: 'Homelab Infrastructure Cluster',
    subtitle: 'Self-Hosted Cloud Platform',
    description: 'Two-node Proxmox cluster running 20+ containerized services with SSO, monitoring, VPN, and GPU-accelerated AI inference. Full infrastructure-as-code approach with automated backups and ZFS storage.',
    image: null,
    media: [],
    technologies: ['Proxmox', 'Docker', 'Nginx', 'ZFS', 'Authelia', 'n8n'],
    achievements: [
      '20+ services across LXC containers and Docker',
      'SSO authentication with Authelia OIDC',
      'GPU passthrough for AI inference workloads',
      'Automated monitoring and alerting with Uptime Kuma'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['software', 'personal'],
    featured: true,
    year: 2025
  },
  {
    title: 'Diller Queen',
    subtitle: 'Multiplayer Browser Arcade Game',
    description: '4v4 multiplayer browser arcade game inspired by Killer Queen, built in Godot 4.3 with server-authoritative networking. Players compete as pickles across three simultaneous win conditions with client-side prediction and interpolation for smooth 60fps gameplay.',
    image: null,
    media: [],
    technologies: ['Godot 4.3', 'GDScript', 'FastAPI', 'WebSocket', 'PostgreSQL', 'Docker'],
    achievements: [
      'Server-authoritative physics at 20 tick/sec with client prediction',
      'Real-time 8-player multiplayer via WebSockets',
      'Original pixel art sprites with role-based animations',
      'Android APK export for kiosk deployment'
    ],
    github: null,
    externalLink: 'https://dq.darrenarney.com',
    demoType: 'interactive',
    categories: ['software', 'personal'],
    featured: true,
    year: 2025
  },
  {
    title: 'Retro Dashboard',
    subtitle: 'Smart Home Control Center',
    description: 'Vue 3 + TypeScript dashboard with Flask backend for smart home control, baby monitor streaming, calendar integration, and freezer meal planning with Tandoor recipes.',
    image: null,
    media: [],
    technologies: ['Vue 3', 'TypeScript', 'Flask', 'Python', 'Home Assistant'],
    achievements: [
      'Real-time smart home control via Home Assistant API',
      'Dual baby monitor HLS streaming proxy',
      'Freezer meal planning with recipe management',
      'CalDAV calendar and daily journal integration'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['software', 'personal'],
    featured: false,
    year: 2026
  },
  {
    title: 'Sprite Forge',
    subtitle: 'AI Pixel Art Generation Pipeline',
    description: 'Local AI-powered pixel art sprite generator using Stable Diffusion with pixel-art LoRA via ComfyUI. Features a RAG-assisted prompt builder that retrieves similar sprites from a vector-indexed corpus to improve generation quality and consistency across sprite sheets.',
    image: null,
    media: [],
    technologies: ['React', 'TypeScript', 'ComfyUI', 'Stable Diffusion', 'PostgreSQL', 'pgvector', 'Ollama', 'Docker'],
    achievements: [
      'Hybrid retrieval (70% vector / 30% full-text) for reference-driven generation',
      'Failure pattern analysis to iteratively improve prompts',
      'Corpus management with rating, tagging, and component metadata',
      'Real-time WebSocket updates during generation'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['ai', 'software'],
    featured: true,
    year: 2026
  },
  {
    title: 'GBGreg',
    subtitle: 'Local AI Intelligence Platform',
    description: 'Domain-specific AI platform that ingests structured files, builds a knowledge graph, detects semantic patterns, and enables RAG-powered querying over the extracted intelligence. Runs entirely on local hardware with Ollama for inference and Neo4j for relationship mapping.',
    image: null,
    media: [],
    technologies: ['Vue 3', 'Node.js', 'Neo4j', 'PostgreSQL', 'pgvector', 'Ollama', 'D3.js', 'Docker'],
    achievements: [
      'Parses 5 file types with 15+ semantic pattern detectors',
      'Interactive D3.js graph visualization with ELK layout engine',
      'Variable flow tracing across 93+ operations',
      'Fully local inference — no cloud API dependencies'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['ai', 'software'],
    featured: true,
    year: 2026
  },
  {
    title: 'Podcast Factory',
    subtitle: 'Automated Article-to-Podcast Pipeline',
    description: 'Automated pipeline that pulls articles from RSS feeds, summarizes them with a local LLM, converts to natural speech via Kokoro TTS, and publishes as a podcast feed. Runs on a schedule with zero manual intervention.',
    image: null,
    media: [],
    technologies: ['Python', 'Kokoro TTS', 'FreshRSS', 'Ollama', 'systemd', 'Docker'],
    achievements: [
      'End-to-end automation from RSS to published podcast',
      'Local TTS at 2.5x realtime on CPU with 54 voice options',
      'Scheduled generation via systemd timers',
      'Self-hosted feed served at a custom domain'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['ai', 'software'],
    featured: false,
    year: 2026
  },
  {
    title: 'Cathy Comics Bot',
    subtitle: 'Automated Bluesky Social Media Bot',
    description: 'Automated bot that scrapes classic Cathy comic strips, archives them by date, and posts them to Bluesky on a staggered daily schedule. Includes a web scraper with rate limiting, AT Protocol integration for social posting, and a dashboard widget with date navigation for browsing comic history.',
    image: null,
    media: [],
    technologies: ['Python', 'AT Protocol', 'Playwright', 'BeautifulSoup', 'Flask', 'Docker'],
    achievements: [
      'Staggered 3x daily posting schedule with duplicate prevention',
      'Headless browser scraping with batch rate limiting',
      'AT Protocol integration for native Bluesky image embeds',
      'Dashboard widget with multi-day history navigation'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['software', 'personal'],
    featured: false,
    year: 2026
  },
  {
    title: 'EllaBirdCam',
    subtitle: 'The Great Door Mystery',
    description: 'Motion-controlled camera system to solve how my dog Ella was mysteriously opening a closed door. Used open-source camera software with motion detection to catch the culprit in action.',
    image: null, // Will be video thumbnail
    media: [
      {
        type: 'video',
        url: '/videos/ella-door-mystery.mp4', // Placeholder for your video
        caption: 'Ella caught in the act of opening the door',
        thumbnail: '/images/ella-thumbnail.jpg'
      }
    ],
    technologies: ['Open Source Camera Software', 'Motion Detection', 'Webcam', 'Video Analysis'],
    achievements: [
      'Successfully identified door-opening technique',
      'Implemented automated motion detection',
      'Created entertaining technical documentation'
    ],
    github: null,
    demo: '/demos/ellabirdcam',
    demoType: 'video',
    categories: ['software', 'personal'],
    featured: true,
    year: 2021
  },
  {
    title: 'Automated HPLC Sample Preparation',
    subtitle: 'Laboratory Automation',
    description: 'Complete workflow automation for HPLC sample preparation using liquid handlers. Increased laboratory throughput by 300% while significantly reducing human error and sample contamination.',
    image: null,
    media: [],
    technologies: ['Python', 'Tecan EVOware', 'Hamilton STAR', 'Laboratory Automation'],
    achievements: [
      '300% increase in sample throughput',
      'Reduced human error by 95%',
      'Eliminated sample contamination events',
      'Standardized preparation protocols'
    ],
    github: null,
    demo: '/demos/liquid-handler',
    demoType: 'interactive',
    categories: ['automation'],
    featured: true,
    year: 2023
  },
  {
    title: 'Cell Imaging & Hit Picking Scheduler',
    subtitle: 'High-Throughput Screening',
    description: 'Intelligent scheduling system for cell imaging and hit picking determination in high-throughput screening workflows. Optimizes instrument time and sample processing order.',
    image: null,
    media: [],
    technologies: ['C#', 'XML Workflows', 'JavaScript', 'Vue.js', 'Scheduling Algorithms'],
    achievements: [
      'Optimized instrument utilization',
      'Reduced screening time by 40%',
      'Automated hit determination logic',
      'Streamlined workflow scheduling'
    ],
    github: null,
    demo: '/demos/cell-imaging-scheduler',
    demoType: 'interactive',
    categories: ['automation', 'software'],
    featured: false,
    year: 2022
  },
  {
    title: 'Laboratory Workflow Optimization',
    subtitle: 'Process Improvement',
    description: 'Comprehensive analysis and optimization of laboratory workflows using process mapping and discrete event simulation. Achieved significant improvements in turnaround times for high-priority samples.',
    image: null,
    media: [],
    technologies: ['Process Mapping', 'Discrete Event Simulation', 'Python', 'Data Analysis'],
    achievements: [
      '40% reduction in turnaround time',
      'Identified critical bottlenecks',
      'Implemented process improvements',
      'Created standardized workflows'
    ],
    github: null,
    demo: '/demos/workflow',
    demoType: 'workflow',
    categories: ['automation', 'software'],
    featured: true,
    year: 2023
  }
]