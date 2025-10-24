import { useRef } from 'react'
import './App.css'
import Sidebar from './components/header/side'
import Home from './components/body/home'
import ThemeToggle from './components/header/mode'
import Profil from './components/body/profil'
import Formation from './components/body/formation'
import Project from './components/body/project'
import Certifications from './components/body/certification'
import FooterNavs from './components/header/FooterNavs'
import Contact from './components/body/contact'

function App() {
  const topRef = useRef(null)

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Toggle Theme */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Layout principal */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar fixe */}
        <div className="hidden md:block fixed top-20 left-4 z-40">
          <Sidebar />
        </div>

        {/* Contenu principal */}
        <main className="w-full md:ml-[300px] px-6 py-10 space-y-12">
          <div ref={topRef}>
            <Home />
            <Profil />
            <Project />
            <Formation />
            <Certifications />
            <Contact />
            <FooterNavs scrollToTop={() => topRef.current.scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
