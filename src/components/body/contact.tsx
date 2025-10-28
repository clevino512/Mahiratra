import React, { useState } from "react";
import {
  FaClipboard,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const email = "njeva@mahiratra-groupe.com";
  const [copied, setCopied] = useState(false);
  const [notification, setNotification] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setNotification("Message envoyé avec succès ✅");
        setTimeout(() => setNotification(null), 3000);
      } else {
        setNotification("Erreur lors de l’envoi du message ❌");
        setTimeout(() => setNotification(null), 3000);
      }
    } catch (error) {
      console.error("Erreur :", error);
      setNotification("Erreur serveur ❌");
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <>
      {notification && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-slide-in">
          {notification}
        </div>
      )}

      <section className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Infos de contact */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Vous pouvez me contacter pour toute collaboration, mission freelance ou échange professionnel.
            </p>

            <div className="space-y-6 text-sm">
              {/* Adresse */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Adresse</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-indigo-500 text-xl" />
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=P.O.+Box+14,+Ornella+Center,+Antalaha+206,+Madagascar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      P.O. Box 14, Ornella Center, Antalaha 206, Madagascar
                    </a>
                  </li>
                </ul>
              </div>

              {/* Téléphone */}
              <div>
                <h3 className="text-2xl font-bold mt-10 mb-4">Téléphone</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-indigo-500 text-xl" />
                    <a href="tel:+261325943552" className="hover:underline">
                      +261 32 59 435 52
                    </a>
                  </li>
                </ul>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-lg font-semibold mt-10 mb-1">Email</h3>
                <div className="flex items-center gap-3 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md w-fit shadow-md">
                  <span className="text-gray-800 dark:text-gray-100 font-medium select-all">
                    {email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copier l'adresse email"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    <FaClipboard className="w-5 h-5" />
                  </button>
                  {copied && (
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium animate-pulse">
                      Copié !
                    </span>
                  )}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex w-full justify-start p-4 items-center gap-4 text-2xl md:text-4xl lg:text-6xl">
                <a
                  href="https://wa.me/33789374834"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-green-500 duration-150"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/in/njeva-randriamanantenasoa-947816175/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-600 duration-150"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/LaMa-Log"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-gray-800 dark:hover:text-white duration-150"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Envoyer un message</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet"
                required
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Votre message"
                required
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
    </>
  );
}
