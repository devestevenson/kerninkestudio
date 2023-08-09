import { useState, useEffect } from "react";
import { ArrowCircleUp, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";


const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  window.addEventListener("scroll", toggleVisibility);

  return () => {
      window.removeEventListener("scroll", toggleVisibility);
  };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="border-t border-kerninkGrayDark mt-[100px] py-8">
        <div className="sm:flex justify-between items-center px-5 md:px-10">




            <a href="/" className="mb-7 block text-cWhite font-poppinsRegular text-lg sm:text-xl"><span className="text-cYellow font-poppinsBold">KERNINK</span> © 2023</a>

            <ul className="flex flex-col mb-5">
                <a className="text-cWhite font-poppinsRegular text-lg sm:text-xl hover:text-cYellow" href="tel:+573245832155">
                  +57 324 583 3255
                </a>
                <a className="text-cWhite font-poppinsRegular text-lg sm:text-xl hover:text-cYellow" href="mailto:">
                  kerninkestudio@gmail.com
                </a>
            </ul> 

            <div className="flex gap-3">
                <a href="https://www.instagram.com/_kernink_/" target="_blank" rel="noreferrer">
                  <InstagramLogo fill="#FFFFFF" weight="fill" size={32} className="hover:fill-cYellow" />
                </a>
                <a href="https://www.facebook.com/KerninkEstudioGrafico" target="_blank" rel="noreferrer">
                  <FacebookLogo fill="#FFFFFF" weight="fill" size={32} className="hover:fill-cYellow" />
                </a>

                {isVisible && (
                  <button>
                    <ArrowCircleUp fill="#707070" weight="fill" size={32} className="fixed bottom-7 right-2 sm:bottom-[54px] hover:fill-cYellow" onClick={scrollToTop}/>
                  </button>
                )}
            </div>


        </div>
    </div>
  )
}

export default Footer