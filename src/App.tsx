import './index.css'
import { Typewriter } from 'react-simple-typewriter'
import CardNav, { type CardNavItem } from './components/CardNav'
import ProjectWall from './components/ProjectWall'
import headshot from './assets/headshot.jpg'
import Experience from './components/Work'
import Galaxy from './components/Galaxy.tsx';
import Reveal from './components/Reveal'
import { FaEnvelope, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa'


const navItems: CardNavItem[] = [
  {
    label: 'About',
    bgColor: '#1B1722',
    textColor: '#fff',
    links: [
      { label: 'About Me', href: '#about', ariaLabel: 'Go to the about section' },
      { label: 'Skills', href: '#skills', ariaLabel: 'Go to the skills section' }
    ]
  },
  {
    label: 'Work',
    bgColor: '#2F293A',
    textColor: '#fff',
    links: [
      { label: 'Experience', href: '#work', ariaLabel: 'Go to the work experience section' },
      { label: 'Projects', href: '#projects', ariaLabel: 'Go to the projects section' }
    ]
  },
  {
    label: 'Contact',
    bgColor: '#3B0764',
    textColor: '#fff',
    links: [
      { label: 'Email', href: 'mailto:devionrosa@gmail.com', ariaLabel: 'Send an email to Devion' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devion-rosa', ariaLabel: "Devion's LinkedIn profile" },
      { label: 'Instagram', href: 'https://www.instagram.com/shmevdoestech/', ariaLabel: "Devion's Instagram" },
      { label: 'TikTok', href: 'https://www.tiktok.com/@shmevion', ariaLabel: "Devion's TikTok" }
    ]
  }
]

function App() {
  return (
    <div className="min-h-screen text-white font-sans relative"> {/* Optional: Adds a consistent background */}
      {/* Animated galaxy background (fixed, full viewport, behind everything, ignores pointer events) */}
      <div className="galaxy-bg" aria-hidden="true">
        <Galaxy mouseInteraction={false} />
      </div>

      <CardNav
        items={navItems}
        logoText="Devion"
        baseColor="#151022"
        menuColor="#fff"
        buttonBgColor="#3B0764"
        buttonTextColor="#fff"
        buttonText="Contact Me"
      />
      
      {/* Main Container: This centers the entire website content */}
      <main className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        
        {/* Header Section — fills the first viewport; hidden at the top until you scroll */}
        <Reveal mode="scroll" className="min-h-svh flex items-center">
          <div className="w-full max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold pb-4 pt-4">Hello, I'm Devion👋</h1>
            <div className="text-3xl font-semibold text-white flex items-center justify-center gap-x-2">
              I'm a
              <div className="text-purple-950">
                {' '}
                <span>
                  <Typewriter
                    words={['Software Engineer', 'Team Leader', 'ML Enthusiast']}
                    loop={0} // 0 means infinite loops
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <hr className="border-t border-purple-950 my-12" />
        </Reveal>


        {/* About Me Section */}
        <section id="about" className="py-12 text-center scroll-mt-32">
          <Reveal>
            <h2 className="text-6xl font-bold mb-12">About Me</h2>
          </Reveal>
          
            <div className="flex space-x-8">
              <Reveal delay={120} className="relative flex items-center justify-center w-100 h-100 group">
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-60 animate-pulse opacity-80 transition-opacity"></div>
              <img src={headshot} alt="Devion Rosa" className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-purple-950 shadow-xl"/>
              </Reveal>
              <div className="flex-1">
                <ul className="space-y-20 text-left">

                  <li>
                    <Reveal delay={200} className="flex items-start gap-3">
                    <span className="text-4xl shrink-0">💻</span>
                    <span className="leading-relaxed">I'm a Software Engineer aiming to build systems that don't just execute commands but intelligently adapt to user needs.</span>
                    </Reveal>
                  </li>
                  
                  <li>
                    <Reveal delay={300} className="flex items-start gap-3">
                    <span className="text-4xl shrink-0">🎓</span>
                    <span className="leading-relaxed">Currently pursuring a B.S. in Computer Science (Class of 2027), focusing on the mathematical foundations of Machine Learning and the practicalities of scalable full-stack development.</span>
                    </Reveal>
                  </li>
                  
                  <li>
                    <Reveal delay={400} className="flex items-start gap-3">
                    <span className="text-4xl shrink-0">💡</span>
                    <span className="leading-relaxed">From exploring my first system at age 3 to architecting complex NLP bots today, my journey has been defined by a relentless curiosity.</span>
                    </Reveal>
                  </li>
                </ul>
              </div>
            </div>
          
        </section>

        {/* Work Section */}
        <section id="work" className="py-12 text-center scroll-mt-32">
          <Reveal>
            <h2 className="text-6xl font-bold mb-12">Professional Experience</h2>
          </Reveal>
          <Reveal delay={150}>
            <Experience />
          </Reveal>
        </section>

        {/* Resume Section
        <section id="resume" className="flex justify-center my-12 scroll-mt-20">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all">
            View Resume
          </button>
        </section> */}

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-32">
          <Reveal>
            <h2 className="text-6xl font-bold mb-12">Projects</h2>
          </Reveal>
          <Reveal delay={150}>
            <ProjectWall />
          </Reveal>
        </section>

        <section id="skills" className="py-12 scroll-mt-32">
          <Reveal>
            <h2 className="text-6xl font-bold mb-12">Skills</h2>
          </Reveal>
          <Reveal delay={150}>
            <p>In progress!!</p>
          </Reveal>
        </section>
      

        {/* Contact Section */}
        <section id="contact" className="py-12 flex flex-col items-center gap-4 scroll-mt-32">
          <Reveal>
            <h2 className="text-6xl font-bold mb-12">Get In Touch</h2>
          </Reveal>
          <Reveal delay={150} className="flex items-center gap-6">
            <a
              href="mailto:devionrosa@gmail.com"
              aria-label="Send an email to Devion"
              title="Email"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-all hover:scale-110 hover:bg-purple-600"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/devion-rosa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devion's LinkedIn profile"
              title="LinkedIn"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-all hover:scale-110 hover:bg-purple-600"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/shmevdoestech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devion's Instagram"
              title="Instagram"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-all hover:scale-110 hover:bg-purple-600"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@shmevion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devion's TikTok"
              title="TikTok"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-all hover:scale-110 hover:bg-purple-600"
            >
              <FaTiktok aria-hidden="true" />
            </a>
          </Reveal>
        </section>

      </main>
    </div>
  )
}

export default App