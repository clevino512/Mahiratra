import React from 'react'
import image from '../../assets/image.jpg';


export default function Home() {
  return (
    <section className="w-full px-6  dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl h-screen mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
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

          <div className=" overflow-hidden border-2 border-gray-400 dark:border-gray-600 shadow-lg ring-2 ring-indigo-300 dark:ring-indigo-500 transition-all duration-300 w-500 h-500 md:w-50 md:h-50 lg:w-150 lg:h-100 rounded-full">
            <img
              src={image}
              alt="photo de profil"
              className="auto-fit w-full h-full object-cover"
            />
          </div>

      </div>
    </section>
  )
}
