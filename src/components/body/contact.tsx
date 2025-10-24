import React, { useState } from 'react'
import { FaClipboard, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const email = 'enjevalandyrandriamanantenasoa@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Vous pouvez me contacter pour toute collaboration, mission freelance ou échange professionnel.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <h2 className="text-2xl font-bold">Adresse</h2>
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-indigo-500 text-xl" />
                  <span>Antananarivo, Madagascar</span>
                </li>

                <h2 className="text-2xl font-bold mt-10 ">Téléphone</h2>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-indigo-500 text-xl" />
                  <span>+261 34 07 123 45</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-indigo-500 text-xl" />
                  <span>+261 34 07 123 45</span>
                </li>
              </ul>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold mt-10 mb-1">Email</h3>
              <div className="flex items-center gap-3 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md w-fit shadow-md">
                <span className="text-gray-800 dark:text-gray-100 font-medium select-all">{email}</span>
                <button
                  onClick={handleCopy}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  title="Copier"
                >
                  <FaClipboard className="w-5 h-5" />
                </button>
                {copied && (
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Copié !</span>
                )}
              </div>
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
