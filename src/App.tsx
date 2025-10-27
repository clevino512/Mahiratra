import React, { useRef } from "react";
import Navbar from "./components/header/side";
import Home from "./components/body/home";
import Profil from "./components/body/profil";
import Formation from "./components/body/formation";
import Project from "./components/body/project";
import Competence from "./components/body/certification";
import Contact from "./components/body/contact";
import FooterNavs from "./components/header/FooterNavs";
import Footer from "./components/header/footer";
import "./App.css";

function App() {
  const topRef = useRef(null);

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div ref={topRef}>
        {/* Sidebar fixe en haut */}
        <nav className="sticky top-0 z-50">
          <Navbar />
        </nav>

        {/* Sections principales */}
        <section id="accueil" data-name="Accueil" className="min-h-screen scroll-mt-15">
          <Home />
        </section>

        <section id="profil" data-name="Profil" className="min-h-screen scroll-mt-10">
          <Profil />
        </section>

        <section id="experience" data-name="Expérience" className="min-h-screen scroll-mt-24">
          <Formation />
        </section>

        <section id="compétence" data-name="Compétence" className="min-h-screen scroll-mt-24">
          <Competence />
        </section>

        <section id="projects" data-name="Projects" className="min-h-screen scroll-mt-24">
          <Project />
        </section>


        <section id="contact" data-name="Contact" className="min-h-screen scroll-mt-24">
          <Contact />
        </section>

        {/* Bas de page */}
        <FooterNavs scrollToTop={() => topRef.current.scrollIntoView({ behavior: "smooth" })} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
