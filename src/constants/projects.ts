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
    description: 'Two-node Proxmox cluster running 20+ containerized services with SSO, self-hosted Headscale VPN, GPU-accelerated AI inference on RTX 5070 Ti, and full infrastructure monitoring. Includes reverse proxy with Let\'s Encrypt, ZFS storage, and automated backups.',
    image: null,
    media: [],
    technologies: ['Proxmox', 'Docker', 'Nginx', 'Caddy', 'ZFS', 'Authelia', 'Headscale', 'Prometheus'],
    achievements: [
      '20+ services across LXC containers and Docker stacks',
      'Self-hosted Headscale VPN with subnet routing for remote access',
      'RTX 5070 Ti GPU passthrough running 4 concurrent LLM models',
      'SSO authentication with Authelia OIDC across all services'
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
    description: 'AI-powered pixel art sprite generator using SDXL with pixel-art LoRA via ComfyUI, running on local GPU. Features IP-Adapter for character identity consistency, a RAG-assisted prompt builder using pgvector retrieval, and a post-processing pipeline that quantizes 1024px renders down to 64px game-ready sprites.',
    image: null,
    media: [],
    technologies: ['Express', 'TypeScript', 'ComfyUI', 'SDXL', 'IP-Adapter', 'PostgreSQL', 'pgvector', 'Ollama', 'Docker'],
    achievements: [
      'SDXL generation with pixel-art LoRA and IP-Adapter for style consistency',
      'Post-processing pipeline: 1024px → 64px quantization for game-ready sprites',
      'Hybrid retrieval (70% vector / 30% full-text) for reference-driven generation',
      'Per-project configuration with corpus management and component metadata'
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
    subtitle: 'Virtual Applications Scientist Platform',
    description: 'AI-powered laboratory automation intelligence platform with embedded expert judgment, modern C# code generation, and equipment safety validation. Features a 30-stage composable RAG pipeline, Neo4j knowledge graph, and 4 concurrent local LLM models running on GPU for domain-specific querying and pattern detection.',
    image: null,
    media: [],
    technologies: ['Vue 3', 'Express', 'TypeScript', 'Neo4j', 'PostgreSQL', 'pgvector', 'Ollama', 'D3.js', 'Docker'],
    achievements: [
      '30-stage composable RAG pipeline with 6 specialized profiles',
      '100% schema consolidation across 30+ database tables',
      'FAT remediation system with 126-item scorecard template',
      '4 concurrent LLM models on GPU — fully local inference'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['ai', 'software'],
    featured: true,
    year: 2026
  },
  {
    title: 'Articles Digest',
    subtitle: 'AI-Powered Article Summarization Pipeline',
    description: 'Automated pipeline that ingests articles from RSS feeds via FreshRSS, summarizes them with a local LLM using multiple summarization modes, and delivers personalized daily digests. Per-user configuration with contextual, key-point, and full-narration summary styles.',
    image: null,
    media: [],
    technologies: ['FastAPI', 'Vue 3', 'PostgreSQL', 'FreshRSS', 'Ollama', 'Docker'],
    achievements: [
      'Three summarization modes: key points, contextual summary, full narration',
      'Per-user YAML configuration for personalized digest feeds',
      'End-to-end automation from RSS ingestion to delivered summaries',
      'Local LLM inference with no cloud API dependencies'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['ai', 'software'],
    featured: false,
    year: 2026
  },
  {
    title: 'Casey Junior',
    subtitle: 'Project Automation & Ops Platform',
    description: 'Automated project management platform built for founder-operators. Features a Three-Pillar kanban system (Professional/Personal/Domestic), voice recording pipeline with local STT and LLM intent extraction, AI-generated daily newspaper briefings, and a 5-phase Tiger Team deployment lifecycle tracker with traceability gates.',
    image: null,
    media: [],
    technologies: ['FastAPI', 'Python', 'Ollama', 'OpenAI Whisper', 'PostgreSQL', 'Docker'],
    achievements: [
      '5-phase Tiger Team deployment lifecycle with enforced traceability gates',
      'Voice-to-intent pipeline: STT → LLM analysis → automated task extraction',
      'AI-generated AM/PM newspaper briefings via local Ollama',
      'Service registry with live health checks across 20+ services'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['ai', 'software'],
    featured: true,
    year: 2026
  },
  {
    title: 'DArnTech Ops Dashboard',
    subtitle: 'Consulting Operations Hub',
    description: 'Unified operations dashboard for a consulting entity, serving as the single source of truth for project status, financial health, R&D tracking, and decision gates across 6+ child projects. Integrates financial APIs, Nextcloud CalDAV, and homelab infrastructure monitoring.',
    image: null,
    media: [],
    technologies: ['Vue 3', 'TypeScript', 'FastAPI', 'PostgreSQL', 'CalDAV', 'Docker'],
    achievements: [
      'Unified oversight across 6+ active child projects',
      'Financial gates with goals, risks, expenses, and scenario modeling',
      'R&D hour tracking for tax credit documentation',
      'Task and calendar sync via Nextcloud CalDAV integration'
    ],
    github: null,
    demo: null,
    demoType: 'gallery',
    categories: ['software'],
    featured: true,
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