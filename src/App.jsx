import Hero from "./sections/Hero";
import ShowcaseSections from "./sections/ShowcaseSections";
import NavBar from "./components/NavBar";
import LogoSections from "./components/LogoSections";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSections />
      <LogoSections />
      <FeatureCards />
      {/* <ExperienceSection /> */}
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
