import React from 'react'

const formations = [
  {
    titre: "Développeur Frontend React",
    date: "Janvier 2023 - Présent",
    contenu: "Développement d’interfaces utilisateur modernes et responsives.",
    descriptions: [
      "Intégration de maquettes Figma avec React et Tailwind CSS.",
      "Mise en place de composants réutilisables et stateless.",
      "Optimisation des performances et accessibilité."
    ],
    badges: ["React", "Tailwind CSS", "TDD", "Jira", "VS Code", "Unitaire"]
  },
  {
    titre: "Stage en développement web",
    date: "Juillet 2022 - Décembre 2022",
    contenu: "Participation à la refonte d’un portail académique.",
    descriptions: [
      "Utilisation de Laravel pour la gestion du backend.",
      "Création de composants dynamiques avec Vue.js.",
      "Collaboration avec une équipe Agile."
    ],
    badges: ["Laravel", "Vue.js", "BDD", "Jenkins", "Intégration", "Postman"]
  }
]

export default function Formation() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100   hover:shadow-gray-200 transition-all duration-300">
      <h1 className="text-center font-bold text-4xl md:text-5xl mb-6">Expériences professionnelles</h1>
      <p className="text-center max-w-2xl mb-10 text-gray-600 dark:text-gray-300">
        Voici un aperçu de mes expériences professionnelles récentes, illustrant mes compétences techniques et ma capacité à m’adapter à différents contextes.
      </p>

      {formations.map((formation, index) => (
        <div
          key={index}
          className="w-full max-w-4xl border border-gray-300 dark:border-gray-700 hover:border-blue-400 rounded-2xl p-6 mb-8 bg-white dark:bg-gray-800 shadow-md transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 gap-2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{formation.titre}</h2>
            <span className="text-xs text-gray-500 dark:text-gray-400">{formation.date}</span>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-bold">Contenu :</span> {formation.contenu}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {formation.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {formation.badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-medium bg-blue-600 dark:bg-blue-500 text-white rounded-full border border-blue-700 dark:border-blue-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
