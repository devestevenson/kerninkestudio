
const About = () => {
  return (
    <div className="w-full px-5 md:px-10 mt-[100px]">
        <div className="flex flex-col justify-center items-center bg-kerninkYellow rounded-2xl px-5">
            <h2 data-aos="fade-up" data-aos-duration="800" className="font-poppinsBold text-base py-[50px]">NOSOTROS</h2>
            <div className="max-w-[931px]">
                <p data-aos="fade-up" data-aos-duration="1000" className="font-poppinsRegular text-2xl sm:text-3xl text-center">
                    Somos un equipo de diseñadores gráficos especializados
                    en diversas áreas del diseño: desde el diseño de logotipos,
                    identidades corporativas y contenido para redes sociales, 
                    hasta la elaboración de folletos, carteles, banners, entre otros.
                </p>
                <p data-aos="fade-up" data-aos-duration="1000" className="font-poppinsRegular text-2xl sm:text-3xl text-center my-8">
                    Nuestro objetivo principal es brindarte soluciones que
                    permitan a tu marca comunicar un mensaje de manera 
                    efectiva y cautivadora.
                </p>
                <p data-aos="fade-up" data-aos-duration="1000" className="font-poppinsRegular text-2xl sm:text-3xl text-center">
                    Permítenos ser tu aliado creativo y trabajemos juntos 
                </p>
            </div>
            <button data-aos="zoom-in" data-aos-duration="1100" className="btnPortafolio my-[60px]">
                Portafolio
            </button>
        </div>
    </div>
  )
}

export default About