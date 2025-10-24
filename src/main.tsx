import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './components/body/home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/admin/login.tsx'
import Certifications from './components/body/certification.tsx'
import Contact from './components/body/contact.tsx'
import Formation from './components/body/formation.tsx'
import Project from './components/body/project.tsx'
import Profil from './components/body/profil.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/profil" element={<Profil />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
