import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Cursor from "./components/Cursor/Cursor";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import TechMarquee from "./components/TechMarquee/TechMarquee";
import SocialDock from "./components/SocialDock/SocialDock";
import SEO from "./components/SEO/SEO";
import PageLoader from "./components/PageLoader/PageLoader";
import ScrollStory from "./components/ScrollStory";
import { useState, useEffect } from "react";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <>
      <ParticleBackground />
      <ScrollStory />
      <SEO />
      <Cursor />
      <SocialDock />
      <ScrollProgress />

      <Navbar />

      <Hero />
      <TechMarquee />

      <About />
      <Services />
      <Experience />
      <Stats />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;