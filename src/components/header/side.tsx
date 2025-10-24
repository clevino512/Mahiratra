import React from 'react'

export default function Sidebar() {
  return (
    <aside className="border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-8 md:p-12 bg-white dark:bg-gray-900 shadow-xl w-full max-w-xs">
      <nav>
        <ul className="text-lg md:text-xl font-semibold space-y-6 text-gray-800 dark:text-gray-100">
          {[
            'Accueil',
            'À propos',
            'Formations',
            'Compétences',
            'Projets',
            'Expériences',
            'Certifications',
            'Contact'
          ].map((item, index) => (
            <li
              key={index}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
