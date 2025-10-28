import React from 'react';
import StackedListBadgeActionButton from './profil_parcours';
import { FaAddressCard, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Langues from './profil_langues';

export default function Profil() {
  return (
    <section className="w-full min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="w-full space-y-10">
        
        {/* Titre + Description */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Profil</h1>
          <p className="text-center text-sm md:text-xl lg:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
            Product Owner Senior avec plus de 5 ans d’expérience dans la conception et le pilotage de produits digitaux (logiciels, applications mobiles, plateformes web).
            Spécialiste des méthodologies Agile/Scrum, j’ai dirigé et accompagné des équipes de 1 à 6 développeurs. Véritable leader et motivateur, je transforme la vision business en solutions digitales concrètes et performantes.
            Passionné par la technologie et l’innovation, je recherche des missions freelance en remote au sein d’ESN francophones en Europe.
          </p>
        </div>

        {/* Grille Info + Parcours */}
        <div className="flex flex-col md:flex-row justify-between px-4 md:px-10 gap-6 md:gap-10 overflow-hidden">     
          {/* Info-contact + Langues */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-center font-bold mb-4">Info-contact</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <FaAddressCard className="text-indigo-500 text-xl" />
                  <span>Product Owner Senior</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-indigo-500 text-xl" />
                  <span>P.O. Box 14, Ornella Center, Antalaha 206, Madagascar</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-indigo-500 text-xl" />
                  <span>+261 32 59 435 52</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-indigo-500 text-xl" />
                  <span>njeva@mahiratra-groupe.com</span>
                </li>
              </ul>
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
  );
}
