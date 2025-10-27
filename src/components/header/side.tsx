import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);

  // Liste des sections à faire défiler
  const navItems = [
    { name: "Accueil", id: "accueil" },
    { name: "Profil", id: "profil" },
    { name: "Expérience", id: "experience" },
    { name: "Compétence", id: "compétence" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll fluide vers une section
  const handleClick = (name, id) => {
    setActiveItem(name);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Met à jour la couleur active selon la section visible à l’écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const name = visibleSection.target.getAttribute("data-name");
          setActiveItem(name);
        }
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="bg-white dark:bg-neutral-800 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-indigo-600 dark:text-white">
          <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
          Portfolio
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-gray-600 dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu principal */}
        <ul
          className={`flex flex-col sm:flex-row md:flex-row sm:space-x-8 mt-4 sm:mt-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden sm:flex"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleClick(item.name, item.id)}
                className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeItem === item.name
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
