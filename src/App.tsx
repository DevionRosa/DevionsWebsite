import './App.css'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from './components/Navbar'
import ProjectList from './components/Projects'
import headshot from './assets/headshot.jpg'

function App() {
  return (
    <div className="min-h-screen text-white"> {/* Optional: Adds a consistent background */}
      <Navbar />
      
      {/* Main Container: This centers the entire website content */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Header Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold pb-4">Hello, I'm Devion👋</h1>
        
          <div className="text-2xl font-semibold text-purple-950">
            I'm a {' '}
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
        <hr className="border-t border-purple-950 my-12" />

          {/* About Me Section */}
        <section id="about" className="py-12text-center scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div>
           <ul className="space-y-2">
            <li className="before:content-['🚀'] before:mr-2">Built a React Portfolio</li>
            <li className="before:content-['💻'] before:mr-2">Sophomore CS Student</li>
            <li className="before:content-['🏎️'] before:mr-2">Working on a 2005 Infiniti G35x</li>
          </ul>
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
          <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
          <ProjectList />
        </section>

      

        {/* Contact Section */}
        <section id="contact" className="py-12 flex flex-col items-center gap-4 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
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