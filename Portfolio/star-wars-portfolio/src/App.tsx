import React from 'react';
import Navbar from './components/Navbar';
import StarField from './components/StarField';
import FloatingTech from './components/FloatingTech';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechSection from './components/TechSection';
import ServicesSection from './components/ServicesSection';
import GitHubProjects from './components/GitHubProjects';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-sw-dark text-white overflow-x-hidden">
      {/* Star Field Background */}
      <StarField />
      
      {/* Floating Tech Icons */}
      <FloatingTech />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <AboutSection />
        <GitHubProjects />
        <TechSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
