export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo / Brand */}
          <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
  
          {/* Links */}
          <div className="space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
  