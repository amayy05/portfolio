import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Achievements } from './sections/Achievements';
import { Goals } from './sections/Goals';
import { Personal } from './sections/Personal';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Goals />
        <Personal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;