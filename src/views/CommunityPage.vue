<template>
  <div class="community-page">
    <div class="container">
      <header class="page-header">
        <h1>Community Tech</h1>
        <p class="lead">Pro bono technology for organizations making a difference</p>
      </header>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon">
            <component :is="service.iconComponent" />
          </div>
          <div class="service-content">
            <h2>{{ service.title }}</h2>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-details">
              <h3>What this looks like:</h3>
              <ul>
                <li v-for="(item, i) in service.examples" :key="i">{{ item }}</li>
              </ul>
            </div>
            <div class="service-audience">
              <h3>Best for:</h3>
              <p>{{ service.audience }}</p>
            </div>
          </div>
        </div>
      </div>

      <section class="how-section">
        <h2 class="section-heading">How It Works</h2>
        <div class="how-grid">
          <div class="how-card" v-for="(step, index) in steps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </section>

      <section class="platforms-section">
        <h2 class="section-heading">Find Me On</h2>
        <p class="platforms-text">
          I'm also available through volunteer matching platforms where nonprofits can connect with skilled tech volunteers:
        </p>
        <div class="platforms-grid">
          <a href="https://www.catchafire.org" target="_blank" rel="noopener" class="platform-card">
            <strong>Catchafire</strong>
            <span>Skills-based volunteering for nonprofits</span>
          </a>
          <a href="https://www.taprootfoundation.org" target="_blank" rel="noopener" class="platform-card">
            <strong>Taproot Foundation</strong>
            <span>Pro bono services for social change</span>
          </a>
          <a href="https://www.techtotherescue.org" target="_blank" rel="noopener" class="platform-card">
            <strong>Tech To The Rescue</strong>
            <span>Tech solutions for NGOs worldwide</span>
          </a>
        </div>
      </section>

      <section class="cta-section">
        <h2>Let's Talk</h2>
        <p>I'm based in Indianapolis and available for local or remote work with qualified nonprofits and community organizations.</p>
        <router-link to="/contact">
          <el-button class="theme-button primary-button" type="primary" size="large">Get In Touch</el-button>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
import { h } from 'vue'

const ServerIcon = {
  render() {
    return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('rect', { x: '2', y: '2', width: '20', height: '8', rx: '2', ry: '2' }),
      h('rect', { x: '2', y: '14', width: '20', height: '8', rx: '2', ry: '2' }),
      h('line', { x1: '6', y1: '6', x2: '6.01', y2: '6' }),
      h('line', { x1: '6', y1: '18', x2: '6.01', y2: '18' })
    ])
  }
}

const CodeIcon = {
  render() {
    return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('polyline', { points: '16 18 22 12 16 6' }),
      h('polyline', { points: '8 6 2 12 8 18' })
    ])
  }
}

const ZapIcon = {
  render() {
    return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
    ])
  }
}

const SettingsIcon = {
  render() {
    return h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('circle', { cx: '12', cy: '12', r: '3' }),
      h('path', { d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' })
    ])
  }
}

export default {
  name: 'CommunityView',
  data() {
    return {
      services: [
        {
          title: 'Hosted Infrastructure',
          iconComponent: ServerIcon,
          description: 'Self-hosted apps like file sharing, project management, and websites — with monitoring and backups — on hardware I manage. No cloud bills for your organization.',
          examples: [
            'Nextcloud for file sharing and collaboration',
            'Internal wikis, project boards, and communication tools',
            'Website hosting with SSL and monitoring',
            'Automated backups and uptime alerts'
          ],
          audience: 'Nonprofits paying too much for cloud services, organizations needing data privacy and ownership.'
        },
        {
          title: 'Custom Web Applications',
          iconComponent: CodeIcon,
          description: 'Dashboards, internal tools, and public-facing sites built with modern web technologies. Designed for the people who actually use them.',
          examples: [
            'Volunteer coordination dashboards',
            'Inventory and resource tracking tools',
            'Public-facing sites for events and programs',
            'Data visualization for grant reporting'
          ],
          audience: 'Food banks, shelters, community centers, and nonprofits needing custom tools that off-the-shelf software doesn\'t cover.'
        },
        {
          title: 'Automation & Workflows',
          iconComponent: ZapIcon,
          description: 'Automate repetitive tasks, connect disconnected systems, and build notification pipelines so your team can focus on mission work.',
          examples: [
            'Automated data entry and report generation',
            'Connect intake forms to databases and notification systems',
            'Scheduled backups and alerts for critical processes',
            'Integration between existing tools (spreadsheets, email, calendars)'
          ],
          audience: 'Organizations doing manual data entry, teams with disconnected spreadsheets, anyone losing hours to repetitive tasks.'
        },
        {
          title: 'IT Consulting & Setup',
          iconComponent: SettingsIcon,
          description: 'Network setup, Linux desktops, server hardening, and technology planning. Practical IT help for organizations without a dedicated tech team.',
          examples: [
            'Office network setup and WiFi optimization',
            'Linux desktop deployment for cost savings',
            'Security hardening and access control',
            'Technology roadmapping and vendor-neutral advice'
          ],
          audience: 'Small organizations with no IT staff, schools, libraries, and community spaces needing reliable tech.'
        }
      ],
      steps: [
        {
          title: 'We Talk',
          description: 'Tell me what your organization needs. No jargon, no sales pitch — just a conversation about what\'s not working and what could be better.'
        },
        {
          title: 'I Scope It',
          description: 'I\'ll put together a project plan that fits your organization\'s size, timeline, and technical comfort level.'
        },
        {
          title: 'I Build It',
          description: 'I do the work and hand it over with documentation your team can actually use. No black boxes.'
        },
        {
          title: 'Ongoing Support',
          description: 'I don\'t disappear after launch. If something breaks or you need changes, I\'m available.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.community-page {
  padding: 2rem 0 4rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto;
}

/* Service Cards */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background-color: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2.5rem;
  display: flex;
  gap: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.service-icon {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.05) 100%);
  border-radius: 16px;
  border: 1px solid rgba(74, 144, 226, 0.2);
}

.service-content {
  flex: 1;
}

.service-content h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: var(--text-light);
  margin: 0 0 0.75rem 0;
}

.service-description {
  font-size: 1.05rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.service-details h3,
.service-audience h3 {
  font-size: 0.9rem;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 1rem 0 0.5rem;
}

.service-details ul {
  padding-left: 1.25rem;
  margin: 0;
}

.service-details li {
  color: var(--text-faded);
  margin-bottom: 0.4rem;
  line-height: 1.5;
}

.service-audience p {
  color: var(--text-faded);
  font-style: italic;
  margin: 0;
}

/* How It Works */
.how-section {
  margin-bottom: 4rem;
}

.section-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: var(--text-light);
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  display: block;
}

.section-heading::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 3px;
  margin: 12px auto 0;
}

.how-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.how-card {
  background-color: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
}

.step-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(74, 144, 226, 0.05) 100%);
  border: 2px solid rgba(74, 144, 226, 0.3);
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.how-card h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  color: var(--text-light);
  margin: 0 0 0.75rem 0;
}

.how-card p {
  color: var(--text-faded);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

/* Volunteer Platforms */
.platforms-section {
  margin-bottom: 4rem;
}

.platforms-text {
  text-align: center;
  color: var(--text-faded);
  font-size: 1.05rem;
  max-width: 700px;
  margin: 0 auto 2rem;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.platform-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background-color: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
}

.platform-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.platform-card strong {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.platform-card span {
  font-size: 0.9rem;
  color: var(--text-faded);
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: 3rem 2rem;
  background-color: var(--section-bg);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
}

.cta-section h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: var(--text-light);
  margin: 0 0 1rem 0;
}

.cta-section p {
  color: var(--text-faded);
  font-size: 1.1rem;
  margin: 0 0 1.5rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 767px) {
  .service-card {
    flex-direction: column;
    padding: 2rem 1.5rem;
  }

  .service-icon {
    width: 60px;
    height: 60px;
  }

  .services-grid {
    gap: 1.5rem;
  }

  .how-grid {
    grid-template-columns: 1fr;
  }

  .platforms-grid {
    grid-template-columns: 1fr;
  }
}
</style>
