import React from "react";

type Outil = {
  name: string;
  niveau: "base" | "bon" | "avancé";
};

type Categorie = {
  title: string;
  outils: Outil[];
};

const competences: Categorie[] = [
  {
    title: "Bases de données",
    outils: [
      { name: "MySQL", niveau: "base" },
      { name: "SQL", niveau: "bon" },
      { name: "MongoDB", niveau: "avancé" },
      { name: "PostgreSQL", niveau: "bon" },
    ],
  },
  {
    title: "Langages de programmation",
    outils: [
      { name: "JavaScript", niveau: "avancé" },
      { name: "Python", niveau: "bon" },
      { name: "C++", niveau: "base" },
    ],
  },
  {
    title: "Frameworks & environnements",
    outils: [
      { name: "React", niveau: "bon" },
      { name: "Django", niveau: "avancé" },
      { name: "Next.js", niveau: "base" },
    ],
  },

    {
    title: "Frameworks & environnements",
    outils: [
      { name: "React", niveau: "bon" },
      { name: "Django", niveau: "avancé" },
      { name: "Next.js", niveau: "base" },
    ],
  },

    {
    title: "Bases de données",
    outils: [
      { name: "MySQL", niveau: "base" },
      { name: "SQL", niveau: "bon" },
      { name: "MongoDB", niveau: "avancé" },
      { name: "PostgreSQL", niveau: "bon" },
    ],
  },

    {
    title: "Bases de données",
    outils: [
      { name: "MySQL", niveau: "base" },
      { name: "SQL", niveau: "bon" },
      { name: "MongoDB", niveau: "avancé" },
      { name: "PostgreSQL", niveau: "bon" },
    ],
  },
];

export default function Competences() {
  // Couleur automatique selon le niveau
  const getBadgeColor = (niveau: string) => {
    switch (niveau) {
      case "base":
        return "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      case "bon":
        return "bg-blue-500/20 text-blue-400";
      case "avancé":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <section className="mb-10 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Titre */}
      <div className="flex flex-col w-full border-b-2 border-gray-300 dark:border-gray-700  mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 text-gray-900 dark:text-white">
            Compétences
          </h1>

          {/* Légende des couleurs */}
          <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-700  font-medium text-gray-800 dark:text-gray-200">
              Base
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400  font-medium">
              Bon
            </span>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">
              Avancé
            </span>
          </div>
        </div>

      </div>
              {/* 🟡 Phrase introductive centrée */}
     <p className="text-center md:text-base   text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
        Voici un aperçu des compétences techniques que j’ai acquises au fil de mes expériences et de mes projets. 
        Chaque domaine regroupe les outils et technologies que je maîtrise à différents niveaux, allant des bases aux connaissances avancées.
      </p>

      {/* Grille de catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competences.map((cat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {cat.title}
            </h2>

            <div className="flex flex-wrap gap-3">
              {cat.outils.map((outil, i) => (
                <span
                  key={i}
                  className={`px-4 py-1 rounded-full text-sm font-medium ${getBadgeColor(
                    outil.niveau
                  )} hover:scale-105 transform transition-all duration-300 cursor-default`}
                >
                  {outil.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
