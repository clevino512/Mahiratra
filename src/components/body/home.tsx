import React from 'react';
import Njeva_Linkedin from '../../assets/Njeva_Linkedin.jpg';

export default function Home() {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 flex items-center overflow-hidden">
      
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
        
        {/* Texte */}
        <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
          <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold break-words">
            <span className="text-indigo-500">Product Owner Senior</span>
          </h1>

          <h2 className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-tight">
            RANDRIAMANANTENASOA Njeva 
          </h2>

          <p className="text-sm sm:text-base md:text-3xl lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Product Owner Senior | Expert Agile / Scrum | Leader d’équipes de développement<br />
            Full Remote | Freelance
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 w-full">
            <button className="flex-1 sm:flex-none min-w-[120px] sm:min-w-[150px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Contact
            </button>
            <button className="flex-1 sm:flex-none min-w-[120px] sm:min-w-[150px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Télécharger CV
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-gray-400 dark:border-gray-600 shadow-lg ring-2 ring-indigo-300 dark:ring-indigo-500 transition-transform duration-300 hover:scale-105">
          <img
            src={Njeva_Linkedin}
            alt="photo de profil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
