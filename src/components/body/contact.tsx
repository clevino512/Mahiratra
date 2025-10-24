import React from 'react'

export default function Contact() {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-red-700 dark:text-red-400">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Vous pouvez me contacter pour toute collaboration, mission freelance ou échange professionnel.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="text-lg font-semibold mb-1">Adresse</h3>
              <p className="text-gray-800 dark:text-gray-200">A 108 Adam Street, New York, NY 535022</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
              <p className="text-gray-800 dark:text-gray-200">+1 5589 55488 55</p>
              <p className="text-gray-800 dark:text-gray-200">+1 6678 254445 41</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-800 dark:text-gray-200">info@example.com</p>
              <p className="text-gray-800 dark:text-gray-200">contact@example.com</p>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Envoyer un message</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <input
              type="text"
              placeholder="Sujet"
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="5"
              placeholder="Votre message"
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
