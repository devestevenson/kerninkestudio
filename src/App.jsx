import {useEffect} from 'react'

import About from "./components/About"
import Carousel from "./components/carousel/Carousel"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/navbar/Nav"
import Portafolio from "./components/Portafolio"
import Services from "./components/Services"
import Contact from "./Contact"

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-kerninkBlack">
      <div className="w-full max-w-screen-2xl h-auto m-auto bg-kerninkBlack">
        <Nav />
        <Hero />
        <Carousel />
        <About />
        <Portafolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
