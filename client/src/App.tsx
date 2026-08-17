import './App.css'

import { LanguageProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import ParallaxImage from "./components/ParallaxImage";
import About from "./components/About";
import TechMarquee from "./components/TechMarquee";
import Cases from "./components/Cases";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
    return (
        <LanguageProvider>
            <SmoothScroll />

            <Navbar />
            <Presentation />
            <ParallaxImage />
            <About />
            <TechMarquee />
            <Cases />
            <Services />
            <Contact />
            <Footer />
        </LanguageProvider>
    );
}

export default App;