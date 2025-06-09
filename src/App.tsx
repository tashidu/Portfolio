import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Disabled Lenis for better scrolling performance
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1,
  //     easing: (t) => t,
  //     direction: 'vertical',
  //     gestureDirection: 'vertical',
  //     smooth: true,
  //     mouseMultiplier: 0.8,
  //     smoothTouch: false,
  //     touchMultiplier: 1.5,
  //     infinite: false,
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <ExtraCurricular />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Simplified Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

export default App;
