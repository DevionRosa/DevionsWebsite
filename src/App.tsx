import './App.css'
import Navbar from './components/NavBar'
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

        </section>
      </div>

      {/* Projects */}
      <div>
        <section id = "projects">
          <ProjectList />
        </section>
      </div>

      {/* Contact */}
      <div>
        <section id ="contact">
          
        </section>
      </div>
    </>
  )
}

export default App
