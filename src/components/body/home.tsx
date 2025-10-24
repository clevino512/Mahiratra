import React from 'react'
import reactLogo from '../../assets/react.svg'

export default function Home() {
  return (
    <section className="w-full py-16 px-6  dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texte */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold">Portfolio</h1>
          <h2 className="text-3xl md:text-4xl font-bold">RABENANTENAINA Clévin</h2>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold">
              Je suis un <span className="text-indigo-500">Product Owner Senior</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Product Owner Senior | Expert Agile / Scrum | Leader d’équipes de développement
              Full Remote | Freelance
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full transition">
              Contact
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full transition">
              Contact
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 border-2 border-gray-400 dark:border-gray-600 rounded-full w-40 h-40 flex items-center justify-center overflow-hidden shadow-lg">
          <img src={reactLogo} alt="photo de profil" className="w-32 h-32 object-cover" />
        </div>
      </div>
    </section>
  )
}
