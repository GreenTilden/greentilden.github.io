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
  { label: 'AI & Data', value: 'ai' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Games', value: 'games' },
  { label: 'Lab Automation', value: 'automation' },
  { label: 'Software', value: 'software' }
]

export const PROJECT_DATA: Project[] = [
  {
    title: 'Homelab Production Cluster',
    subtitle: 'Self-Hosted Infrastructure',
    description: 'Two-node Proxmox cluster running 20+ production services including Nextcloud, Immich, n8n, and custom dashboards. Full SSO via Authelia, automated monitoring with Uptime Kuma, reverse proxy with nginx, VPN via Headscale, and ZFS-backed storage.',
    image: null,
    media: [],
    technologies: ['Proxmox', 'Docker', 'Nginx', 'Authelia', 'ZFS', 'Headscale', 'n8n', 'Grafana'],
    achievements: [
      '20+ production services with 99.9% uptime',
      'Full SSO and VPN access across all services',
      'Automated monitoring, alerting, and backup pipelines',
      'GPU-accelerated AI inference with RTX 5070 Ti'
    ],
    github: null,
    demoType: 'gallery',
    categories: ['infrastructure', 'ai'],
    featured: true,
    year: 2025
  },
  {
    title: 'AI-Powered RAG Pipeline',
    subtitle: 'Document Intelligence',
    description: 'Production retrieval-augmented generation system that turns document collections into searchable, queryable knowledge bases. Self-hosted vector databases, embedding models, and LLM integration — all running on local GPU hardware.',
    image: null,
    media: [],
    technologies: ['Python', 'Vector DB', 'LLM', 'n8n', 'Docker', 'RTX 5070 Ti'],
    achievements: [
      'End-to-end RAG pipeline from document ingestion to chat interface',
      'Self-hosted inference on local GPU — no cloud API costs',
      'Privacy-first architecture for sensitive document handling',
      'Automated workflow orchestration via n8n'
    ],
    github: null,
    demoType: 'gallery',
    categories: ['ai', 'software'],
    featured: true,
    year: 2026
  },
  {
    title: 'Diller Queen',
    subtitle: 'Browser Game',
    description: 'Fully playable browser-based arcade game built as a showcase for custom promotional game development. Demonstrates the kind of branded, interactive experiences that can be built for businesses and events.',
    image: null,
    media: [],
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Design'],
    achievements: [
      'Complete game loop with scoring and progression',
      'Mobile-responsive touch controls',
      'Proof of concept for branded promotional games',
      'Fast load times — no heavy frameworks'
    ],
    github: null,
    externalLink: 'https://greentilden.github.io/diller-queen/',
    demoType: 'interactive',
    categories: ['games', 'software'],
    featured: true,
    year: 2025
  },
  {
    title: 'Vue Dashboard & Command Server',
    subtitle: 'Full-Stack Application',
    description: 'Custom Vue 3 + TypeScript dashboard with a Flask command server backend. Integrates Home Assistant, baby monitor feeds, calendar data, recipe management, and smart home controls into a unified interface.',
    image: null,
    media: [],
    technologies: ['Vue 3', 'TypeScript', 'Flask', 'Python', 'Nginx', 'Home Assistant'],
    achievements: [
      'Real-time smart home control and monitoring',
      'Dual baby monitor video streaming',
      'CalDAV integration with Nextcloud',
      'RESTful API with token authentication'
    ],
    github: null,
    demoType: 'gallery',
    categories: ['software', 'infrastructure'],
    featured: true,
    year: 2026
  },
  {
    title: 'EllaBirdCam',
    subtitle: 'The Great Door Mystery',
    description: 'Motion-controlled camera system to solve how my dog Ella was mysteriously opening a closed door. Used open-source camera software with motion detection to catch the culprit in action.',
    image: null,
    media: [
      {
        type: 'video',
        url: '/videos/ella-door-mystery.mp4',
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
    categories: ['software'],
    featured: false,
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
    featured: false,
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
    featured: false,
    year: 2023
  }
]