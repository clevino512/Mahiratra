import React from 'react';
import website from '../../assets/website.jpg';

const projects = [
  {
    title: "Creative Branding",
    image: website,
    description: "Maecenas ante magna. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate.",
    link: "/projects/branding",
    date: "Janvier 2023 - Présent",
  },
  {
    title: "Web Development",
    image: website,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/projects/web-development",
    date: "Février 2023 - Présent",
  },
  {
    title: "Design Systems",
    image: website,
    description: "Praesent euismod varius tellus, vel bibendum nunc interdum at. Donec vehicula diam vel metus.",
    link: "/projects/design-systems",
    date: "Mars 2023 - Présent",
  },
];

export default function Project() {
  return (
    <section className="px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-12">Projets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-gray-200 transition-all duration-300"
          >
            {/* Hover button */}
            <a
              href={project.link}
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white"
            >
              Visiter
            </a>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover bg-gray-100 dark:bg-gray-700"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">{project.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
