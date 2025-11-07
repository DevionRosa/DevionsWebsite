import './App.css'
import Navbar from './components/Navbar'
import ProjectList from './components/Projects'
import headshot from './assets/headshot.jpg'

function App() {
  return (
    <>
    <Navbar />
      {/* Header */}
      <div className='my-12'>
        <section id = "header">
              <div className="flex items-start gap-60">
                
                <div className = "top-0 left-0 h-auto w-1/2 text-white p-4 mt-4">
                  <h1 className='text-left pb-4'>Hello, my name is <br />Devion Rosa 👋</h1>
                  <p className='text-left'>I'm driven by my deep curiosity for machine learning and leveraging these skills to contribute to and transform the world.</p>
                </div>
                <img
                  src={headshot}
                  alt="Devion Rosa headshot"
                  className="w-100 h-100 object-cover rounded-full object-right"
                />
              </div>
        </section>
      </div>

      {/* Resume */}
      <div>
        <section id = "resume">
          <button>View Resume</button>
        </section>
      </div>

      {/* Projects */}
      <div>
        <section id = "projects">
          <ProjectList />
        </section>
      </div>

      {/* About Me */}
      <div>
        <section id ="about">
          <p>
            Since I was 3, I loved my computer. I never felt bored with the endless amount of knowledge at my fingertips. In high school, 
            I listened to the calling I've had my entire life and took my first coding class. From that point forward, 
            I saw myself in front of the screen more than ever. <br></br>
            
            I have always been pushed by my parents to give my best effort in everything I do, and that mindset has shaped how I approach 
            challenges. Combining my drive with my love for computers kept me learning and improving. Not only does technology challenge me 
            but it gives me the power to contribute and transform the world.
            </p>
        </section>
      </div>

      {/* Contact */}
      <div>
        <section id ="contact">
          <a>devionrosa@gmail.com</a>
          <a>LinkedIn</a>
        </section>
      </div>
    </>
  )
}

export default App
