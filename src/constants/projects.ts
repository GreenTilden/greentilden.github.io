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
    subtitle: 'Browser Arcade Game',
    description: 'Playable 4v4 multiplayer browser arcade game inspired by Killer Queen. Custom game engine with server-authoritative physics, WebSocket networking, and pixel art sprites.',
    image: null,
    media: [],
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Design'],
    achievements: [
      'Custom game engine with server-authoritative state',
      'Real-time multiplayer via WebSockets',
      'Original pixel art character sprites and animations',
      'Three simultaneous win conditions'
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