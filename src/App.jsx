import {useEffect, useState} from 'react'

import About from "./components/About"
import Carousel from "./components/carousel/Carousel"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/navbar/Nav"
import Portafolio from "./components/Portafolio"
import Services from "./components/Services"
import Contact from "./components/Contact"

import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './components/PreLoader'
import Brands from './components/brands/Brands'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App bg-cBlack">
        {isLoading ? (
          <Preloader />
        ) : (
          <div className="w-full max-w-screen-2xl h-auto m-auto bg-kerninkBlack">
            <Nav />
            <Hero />
            <Carousel />
            <About />
            <Services />
            <Portafolio />
            <Brands />
            <Contact />
            <Footer />
          </div>
        )}
        
    </div>
  )
}

export default App
