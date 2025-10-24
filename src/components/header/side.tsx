import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

import { useEffect, useState } from 'react'

const sections = [
  'Accueil',
  'À propos',
  'Formations',
  'Compétences',
  'Projets',
  'Expériences',
  'Certifications',
  'Contact'
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('Accueil')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) {
          const id = visible.target.id.replace(/-/g, ' ')
          setActiveSection(capitalize(id))
        }
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase().replace(/\s/g, '-'))
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (section) => {
    const el = document.getElementById(section.toLowerCase().replace(/\s/g, '-'))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <aside className="border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-6 md:p-8 bg-white dark:bg-gray-900 shadow-xl w-full max-w-xs space-y-10 sticky top-10 h-fit">
        <nav className="space-y-8">
          <ul className="text-lg md:text-xl font-semibold space-y-4 text-gray-800 dark:text-gray-100">
              {sections.map((item) => (
                <li
                   key={item}
                        onClick={() => scrollToSection(item)}
                        className={`cursor-pointer transition-colors ${
                          activeSection === item
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'hover:text-indigo-600 dark:hover:text-indigo-400'
                        }`}
                      >
                        {item}
                </li>
             ))}
        </ul>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700 space-x-4">
          <a
            href="mailto:contact@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaFacebook className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/njeva-randriamanantenasoa-947816175/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/clevin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>

      </nav>
    </aside>
  )
}
