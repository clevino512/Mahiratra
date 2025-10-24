import React from 'react'

const certifications = [
  {
    title: "ISTQB® Certified Tester – Foundation Level (CTFL) 4.0",
    issuer: "GASQ",
    year: "2015 - 2035",
    verifiable: true,
    link: "https://www.gasq.org/certification/verify"
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    year: "2024",
    verifiable: true,
    link: "https://www.coursera.org/account/accomplishments"
  },
  {
    title: "Introduction to Object-Oriented Programming in Java",
    issuer: "University of Pennsylvania",
    year: "2024",
    verifiable: false
  },
  {
    title: "Introduction to Big Data (Spark / Hadoop)",
    issuer: "IBM",
    year: "2024",
    verifiable: false
  },
  {
    title: "Software Engineering: Software Design and Project Management",
    issuer: "HKUST",
    year: "2024",
    verifiable: true,
    link: "https://www.edx.org/verify"
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    year: "2024",
    verifiable: false
  }
]

export default function Certifications() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-12">Certifications</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{cert.title}</h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span className="font-medium">Organisme :</span> {cert.issuer}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              <span className="font-medium">Année :</span> {cert.year}
            </p>

            {cert.verifiable && (
              <span className="inline-block bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Vérifiable en ligne
              </span>
            )}

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
              >
                Accéder à la certification
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
