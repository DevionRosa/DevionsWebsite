import './index.css'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from './components/Navbar'
import ProjectList from './components/Projects'
import headshot from './assets/headshot.jpg'

function App() {
  return (
    <div className="min-h-screen text-white font-sans"> {/* Optional: Adds a consistent background */}
      <Navbar />
      
      {/* Main Container: This centers the entire website content */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Header Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold pb-4">Hello, I'm Devion👋</h1>
          <div className="text-3xl font-semibold text-white flex gap-x-2">
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
        <hr className="border-t border-purple-950 my-12" />

          {/* About Me Section */}
        <section id="about" className="py-12 text-center scroll-mt-20">
          <h2 className="text-6xl font-bold mb-12">About Me</h2>
          
            <div className="flex space-x-8">
              <div className="relative flex items-center justify-center w-100 h-100 group">              
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-60 animate-pulse opacity-80 transition-opacity"></div>
              <img src={headshot} alt="Devion Rosa" className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-purple-950 shadow-xl"/>
              </div>
              <div className="flex-1">
                <ul className="space-y-20 text-left">

                  <li className="flex items-start gap-3">
                    <span className="text-4xl shrink-0">💻</span>
                    <span className="leading-relaxed">I's a Software Engineer aiming to build systems that don't just execute commands but intelligently adapt to user needs.</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <span className="text-4xl shrink-0">🎓</span>
                    <span className="leading-relaxed">Currently pursuring a B.S. in Computer Science (Class of 2027), focusing on the mathematical foundations of Machine Learning and the practicalities of scalable full-stack development.</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <span className="text-4xl shrink-0">💡</span>
                    <span className="leading-relaxed">From exploring my first system at age 3 to architecting complex NLP bots today, my journey has been defined by a relentless curiosity.</span>
                  </li>
                </ul>
              </div>
            </div>
          
        </section>

        {/* Resume Section
        <section id="resume" className="flex justify-center my-12 scroll-mt-20">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all">
            View Resume
          </button>
        </section> */}

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <h2 className="text-6xl font-bold mb-12">Featured Projects</h2>
          <ProjectList />
        </section>

      

        {/* Contact Section */}
        <section id="contact" className="py-12 flex flex-col items-center gap-4 scroll-mt-20">
          <h2 className="text-6xl font-bold mb-12">Get In Touch</h2>
          <a href="mailto:devionrosa@gmail.com" className="text-blue-400 hover:underline text-xl">
            devionrosa@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/devion-rosa" className="text-blue-400 hover:underline text-xl">
            LinkedIn
          </a>
        </section>

      </main>
    </div>
  )
}

export default App