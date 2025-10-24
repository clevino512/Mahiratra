import React from 'react'
import StackedListBadgeActionButton from './profil_parcours'
import { FaAddressCard, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import Langues from './profil_langues'

export default function Profil() {
  return (
    <section className="w-full py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-100 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Titre + Description */}
        <div className="space-y-6">
          <h1 className="text-center text-5xl font-bold">Profil</h1>
          <p className="text-justify leading-relaxed text-lg text-gray-700 dark:text-gray-300">
            Product Owner Senior avec plus de 5 ans d’expérience dans la conception et le pilotage de produits digitaux (logiciels, applications mobiles, plateformes web).
            Spécialiste des méthodologies Agile/Scrum, j’ai dirigé et accompagné des équipes de 1 à 6 développeurs. Véritable leader et motivateur, je transforme la vision business en solutions digitales concrètes et performantes.
            Passionné par la technologie et l’innovation, je recherche des missions freelance en remote au sein d’ESN francophones en Europe.
          </p>
        </div>

        {/* Grille Info + Parcours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-semibold">
          {/* Info-contact */}
          <div className="space-y-6">
            <h2 className="text-2xl text-center font-bold">Info-contact</h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <FaAddressCard className="text-indigo-500 text-xl" />
                <span>Entreprise XYZ</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-500 text-xl" />
                <span>Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-indigo-500 text-xl" />
                <span>+261 34 07 123 45</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-500 text-xl" />
                <span>contact@exemple.com</span>
              </li>
            </ul>

            {/* Langues */}
            <div className="space-y-4 mt-8">
              <h2 className="text-xl font-bold">Langues</h2>
              <Langues />
            </div>
          </div>

          {/* Parcours Académiques */}
          <div className="space-y-6">
            <h2 className="text-2xl text-center font-bold">Parcours Académiques</h2>
            <StackedListBadgeActionButton />
          </div>
        </div>
      </div>
    </section>
  )
}
