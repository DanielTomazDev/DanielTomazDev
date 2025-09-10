import React from 'react';
import Navbar from './components/Navbar';
import StarField from './components/StarField';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechSection from './components/TechSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-sw-dark text-white overflow-x-hidden">
      {/* Star Field Background */}
      <StarField />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <AboutSection />
        <TechSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
