<template>
  <div class="home">
    <div class="container">
      <!-- Hero Section -->
      <transition name="fade" appear>
        <section class="hero-section">
          <ParticlesCanvas />
          <div class="hero-content">
            <h1 class="hero-title">Build Smarter. Ship Faster.</h1>
            <h2 class="hero-role">AI Development &amp; Infrastructure Consulting</h2>
            <p class="intro-paragraph">I build AI-powered tools, self-hosted infrastructure, and custom web applications for businesses that want to own their technology stack. Based in Indianapolis with 10+ years of automation and engineering experience.</p>
            <p class="tagline">From RAG pipelines to branded browser games — practical solutions, not slide decks.</p>
            <el-space wrap alignment="center" class="cta-buttons">
              <router-link to="/services">
                <el-button class="theme-button primary-button" type="primary" size="large">View Services</el-button>
              </router-link>
              <router-link to="/contact">
                <el-button class="theme-button secondary-button" type="info" size="large">Get In Touch</el-button>
              </router-link>
            </el-space>
          </div>
        </section>
      </transition>

      <div class="section-divider"></div>

      <!-- Services Overview Section -->
      <section class="specialties-section">
        <h2 class="section-heading expertise-heading">What I Do</h2>
        <div class="expertise-grid">
          <div
            v-for="(specialty, index) in specialties"
            :key="'specialty-'+index"
            class="expertise-card"
            v-observe-visibility="(isVisible) => onVisibilityChange(isVisible, index)"
            :class="{ visible: visibleCards[index] }"
          >
            <div class="card-icon expertise-icon">
              <i :class="specialty.icon"></i>
            </div>
            <div class="card-content">
              <h3>{{ specialty.title }}</h3>
              <p>{{ specialty.description }}</p>
            </div>
          </div>
        </div>
        <div class="section-cta">
          <router-link to="/services">
            <el-button class="theme-button primary-button" type="primary" size="large">See Full Service Details</el-button>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ObserveVisibility } from 'vue3-observe-visibility';
import ParticlesCanvas from '@/components/ParticlesCanvas.vue';

export default {
  name: 'HomeView',
  directives: {
    'observe-visibility': ObserveVisibility
  },
  components: {
    ParticlesCanvas
  },
  data() {
    return {
      visibleCards: [],
      specialties: [
        {
          title: 'AI & RAG Development',
          description: 'Custom AI tools powered by retrieval-augmented generation. Document Q&A systems, intelligent search, and workflow automation — all self-hosted so your data stays yours.',
          icon: 'fas fa-brain'
        },
        {
          title: 'Infrastructure & DevOps',
          description: 'Production-grade hosting, monitoring, and automation on infrastructure you control. Docker, Proxmox, CI/CD, and full-stack deployment without the cloud markup.',
          icon: 'fas fa-server'
        },
        {
          title: 'Custom Game Development',
          description: 'Branded browser games for promotions, events, and customer engagement. A unique marketing channel that drives interaction and keeps customers coming back.',
          icon: 'fas fa-gamepad'
        },
        {
          title: 'Web Application Development',
          description: 'Modern Vue.js dashboards, internal tools, and data-driven applications. From interactive demos to production business tools — clean code that scales.',
          icon: 'fas fa-code'
        }
      ]
    };
  },
  methods: {
    onVisibilityChange(isVisible, index) {
      if (isVisible) this.visibleCards[index] = true;
    }
  },
  mounted() {
    this.visibleCards = new Array(this.specialties.length).fill(false);
  }
};
</script>

<style>
/* Page background - ensures consistent dark theme */
body {
  background-color: var(--bg-color);
}

/* Hero Section - creates the main banner area with particle background */
.hero-section {
  position: relative;
  overflow: hidden;
  background-color: var(--card-bg);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 5rem 2rem 4rem;
  text-align: center;
  z-index: 1;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Hero background effects - creates subtle grid pattern and texture */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: linear-gradient(rgba(74, 144, 226, 0.07) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(74, 144, 226, 0.07) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: center center;
  opacity: 0.8;
  z-index: -2;
  animation: grid-scroll-x 40s infinite linear;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.02;
  z-index: -1;
}

/* Hero content - styles the main heading and introductory text */
.intro-paragraph {
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
}

.section-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border-color), transparent);
  margin: 4rem auto;
  width: 80%;
}

.hero-title {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-light);
  z-index: 1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--text-light) 0%, var(--primary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
}

.hero-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--primary-color) 50%, transparent 100%);
  animation: slide-underline 3s infinite;
}

.hero-role {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
}

.tagline {
  font-size: 1.125rem;
  color: var(--text-faded);
  max-width: 700px;
  margin: 0 auto 2rem auto;
  text-align: center;
  line-height: 1.6;
  font-weight: 300;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
}

.cta-buttons {
  margin-top: 1.5rem;
  justify-content: center;
  position: relative;
  z-index: 1;
}

/* Standardized Theme-Aware Buttons */
.theme-button {
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.theme-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.theme-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Primary button styling */
.primary-button {
  background-color: var(--primary-color);
  color: #fff;
}

.primary-button:hover {
  background-color: var(--primary-dark);
}

/* Secondary button styling */
.secondary-button {
  background-color: transparent;
  color: var(--text-light);
  border: 2px solid var(--primary-color);
}

.secondary-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: var(--primary-dark);
}

/* Special handling for monochrome theme */
[data-theme="monochrome"] .primary-button {
  color: #000;
}

[data-theme="monochrome"] .secondary-button {
  border-color: var(--primary-color);
}

/* Specialties Section - contains the expertise cards in a clean layout */
.specialties-section {
  margin-top: 5rem;
  background-color: var(--section-bg);
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.section-cta {
  margin-top: 2.5rem;
}


.expertise-heading {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.section-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
  color: var(--text-light);
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.section-heading::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 3px;
}

/* Expertise Grid - responsive grid system with consistent heights */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

/* Expertise Cards - enhanced design with consistent heights */
.expertise-card {
  background: linear-gradient(135deg, var(--card-gradient-start) 0%, var(--card-gradient-end) 100%);  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(20px);
  opacity: 0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  min-height: 180px;
}

/* Special handling for monochrome theme cards */
[data-theme="monochrome"] .expertise-card {
  background: linear-gradient(135deg, var(--card-bg) 0%, rgba(70, 70, 70, 0.9) 100%);
  border: 1px solid var(--border-color);
}

.expertise-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.expertise-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.expertise-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.12);
  border-color: rgba(74, 144, 226, 0.6);
}

.expertise-card:hover::before {
  opacity: 1;
}

/* Card Icon - enhanced with gradient background and better positioning */
.card-icon {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--secondary-color);
  background: linear-gradient(135deg, var(--icon-bg) 0%, var(--icon-bg) 100%);  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  border: 1px solid var(--icon-border);
}


/* Card Content - enhanced typography and spacing */
.card-content {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-content h3 {
  font-family: 'Poppins', sans-serif;
  color: var(--text-light);
  font-size: 1.375rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.card-content p {
  color: var(--text-faded);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
}

/* Animation Classes - handles the fade-in effects for page transitions */
.fade-enter-active,
.fade-appear-active {
  transition: opacity 0.5s ease-in, transform 0.5s ease-out;
  transform: translateY(0);
}

.fade-enter-from,
.fade-appear-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-appear-to {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Design - adapts layout for different screen sizes */

/* Large screens - 2 cards per row with enhanced spacing and sizing */
@media (min-width: 1200px) {
  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    grid-auto-rows: minmax(200px, 1fr);
  }
  
  .expertise-card {
    padding: 3rem;
    min-height: 200px;
  }
  
  .card-icon {
    width: 80px;
    height: 80px;
    font-size: 3rem;
  }
  
  .card-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
  
  .card-content p {
    font-size: 1.1rem;
  }
}

/* Medium screens - 2 cards per row with optimized sizing */
@media (min-width: 768px) and (max-width: 1199px) {
  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    grid-auto-rows: minmax(180px, 1fr);
  }
  
  .expertise-card {
    padding: 2.25rem;
    min-height: 180px;
  }
  
  .card-icon {
    width: 65px;
    height: 65px;
    font-size: 2.25rem;
  }
  
  .card-content h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  .card-content p {
    font-size: 0.95rem;
  }
}

/* Mobile screens - single column with vertical card layout */
@media (max-width: 767px) {
  .hero-title {
    font-size: 2.25rem;
  }

  .hero-role {
    font-size: 1.25rem;
  }

  .intro-paragraph {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .hero-section {
    padding: 3rem 1rem 2.5rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .theme-button {
    width: 100%;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    min-width: 130px;
  }

  .specialties-section {
    padding: 2rem 1rem;
  }

  .section-divider {
    margin: 3rem auto;
  }

  .expertise-heading {
    font-size: 2rem;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    grid-auto-rows: auto;
  }

  .expertise-card {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
    min-height: auto;
    gap: 1.5rem;
  }

  .card-icon {
    width: 80px;
    height: 80px;
    font-size: 3rem;
    margin: 0 auto;
  }

  .card-content {
    text-align: center;
  }

  .card-content h3 {
    font-size: 1.375rem;
    margin-bottom: 1.25rem;
  }

  .card-content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}

/* Keyframe Animations - creates the moving background effects */
@keyframes grid-scroll-x {
  0% { background-position: 0 0; }
  100% { background-position: 80px 0; }
}

@keyframes slide-underline {
  0% { opacity: 0; transform: translateX(-100%); }
  50% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(100%); }
}

/* Pacers theme icon styles */
[data-theme="pacers"] .expertise-icon i {
  color: var(--icon-color, #00285e);
}

[data-theme="pacers"] .card-icon {
  background: rgba(0, 40, 94, 0.2);
  border: 1px solid rgba(0, 40, 94, 0.4);
}

[data-theme="pacers"] .expertise-card {
  background: linear-gradient(135deg, var(--card-bg) 0%, rgba(253, 187, 48, 0.7) 100%);
  border: 1px solid rgba(253, 187, 48, 0.4);
}

/* Purdue theme icon styles */
[data-theme="purdue"] .expertise-icon i {
  color: var(--icon-color, #8a7429);
}

[data-theme="purdue"] .card-icon {
  background: rgba(138, 116, 41, 0.2);
  border: 1px solid rgba(138, 116, 41, 0.4);
}
</style>