<template>
  <div class="services-page">
    <div class="container">
      <header class="page-header">
        <h1>Services</h1>
        <p class="lead">Practical technology solutions for businesses that want to own their stack</p>
      </header>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon">
            <i :class="service.icon"></i>
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
            <div class="service-pricing">
              <span class="pricing-label">{{ service.pricingModel }}</span>
              <span class="pricing-range">{{ service.priceRange }}</span>
            </div>
          </div>
        </div>
      </div>

      <section class="why-section">
        <h2 class="section-heading">Why Work With Me</h2>
        <div class="why-grid">
          <div class="why-card" v-for="(reason, index) in reasons" :key="index">
            <i :class="reason.icon"></i>
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.description }}</p>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <h2>Ready to talk?</h2>
        <p>I'm based in Indianapolis and available for local or remote work. Let's figure out if I can help.</p>
        <router-link to="/contact">
          <el-button class="theme-button primary-button" type="primary" size="large">Get In Touch</el-button>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          title: 'AI & RAG Development',
          icon: 'fas fa-brain',
          description: 'Build intelligent tools that let your team search, query, and interact with your own documents and data using AI — without sending anything to the cloud.',
          examples: [
            'Document Q&A systems for internal knowledge bases, SOPs, or case files',
            'AI-powered search across your existing documents and databases',
            'Workflow automation with AI decision-making (n8n, custom pipelines)',
            'Chat interfaces for customer-facing or internal use'
          ],
          audience: 'Businesses with lots of documents, legal/medical practices needing privacy, teams drowning in tribal knowledge.',
          pricingModel: 'Project or hourly',
          priceRange: '$75 - $150/hr'
        },
        {
          title: 'Managed Infrastructure & Hosting',
          icon: 'fas fa-server',
          description: 'Production hosting, monitoring, and maintenance on hardware you own or I manage. No surprise cloud bills, no vendor lock-in.',
          examples: [
            'Self-hosted business applications (email, file sync, project management)',
            'Monitoring and alerting with automated health checks',
            'Backup strategy and disaster recovery planning',
            'Docker deployment and server migration'
          ],
          audience: 'Small businesses tired of paying for cloud services they don\'t fully use, privacy-conscious organizations.',
          pricingModel: 'Monthly retainer',
          priceRange: '$50 - $200/mo'
        },
        {
          title: 'Custom Promotional Games',
          icon: 'fas fa-gamepad',
          description: 'Branded browser games for promotions, events, and customer engagement. Give your customers something fun to interact with instead of another ad.',
          examples: [
            'Custom-branded arcade games for restaurant or retail promotions',
            'Event-specific games with leaderboards and prize integration',
            'Interactive experiences for trade shows or marketing campaigns',
            'Loyalty program gamification'
          ],
          audience: 'Restaurants, retail, entertainment venues, event organizers, anyone wanting a unique marketing channel.',
          pricingModel: 'Fixed project',
          priceRange: '$500 - $2,000+'
        },
        {
          title: 'DevOps & Infrastructure Consulting',
          icon: 'fas fa-cogs',
          description: 'Hands-on help with deployment, automation, and infrastructure. I build it, hand it over, and make sure your team can run it.',
          examples: [
            'CI/CD pipeline setup and optimization',
            'Docker and container orchestration',
            'Linux server hardening and SSL/TLS configuration',
            'Monitoring stack deployment (Grafana, Uptime Kuma, alerting)'
          ],
          audience: 'Dev teams that need infrastructure help, businesses migrating off legacy systems.',
          pricingModel: 'Hourly or project',
          priceRange: '$75 - $125/hr'
        }
      ],
      reasons: [
        {
          icon: 'fas fa-running',
          title: 'I Ship, Not Slide-Deck',
          description: 'No lengthy discovery phases or 50-page proposals. I assess, build, and deliver working solutions.'
        },
        {
          icon: 'fas fa-lock',
          title: 'Your Data Stays Yours',
          description: 'Everything I build can run on your hardware or mine. No cloud vendor lock-in, no data leaving your control.'
        },
        {
          icon: 'fas fa-tools',
          title: 'Battle-Tested Infrastructure',
          description: 'I run 20+ production services on my own Proxmox cluster. I eat my own cooking — your workloads get the same treatment.'
        },
        {
          icon: 'fas fa-map-marker-alt',
          title: 'Local & Available',
          description: 'Based in Indianapolis with full-time availability. I can show up in person when the situation calls for it.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
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
  font-size: 2rem;
  color: var(--primary-color);
  background: linear-gradient(135deg, var(--icon-bg, rgba(74, 144, 226, 0.1)) 0%, var(--icon-bg, rgba(74, 144, 226, 0.05)) 100%);
  border-radius: 16px;
  border: 1px solid var(--icon-border, rgba(74, 144, 226, 0.2));
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

.service-pricing {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding: 0.5rem 1rem;
  background-color: rgba(74, 144, 226, 0.08);
  border-radius: 0.5rem;
  border: 1px solid rgba(74, 144, 226, 0.15);
}

.pricing-label {
  font-size: 0.85rem;
  color: var(--text-faded);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.pricing-range {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
}

/* Why Section */
.why-section {
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

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.why-card {
  background-color: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
}

.why-card i {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: block;
}

.why-card h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  color: var(--text-light);
  margin: 0 0 0.75rem 0;
}

.why-card p {
  color: var(--text-faded);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
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
}

@media (max-width: 767px) {
  .service-card {
    flex-direction: column;
    padding: 2rem 1.5rem;
  }

  .service-icon {
    width: 60px;
    height: 60px;
    font-size: 1.75rem;
  }

  .services-grid {
    gap: 1.5rem;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }
}
</style>
