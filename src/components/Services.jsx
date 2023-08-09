
const Services = () => {

    //Para reenviar al usuario a WhatsApp
const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/SBPDMVUHOTAHJ1', '_blank');
};

  return (
    <>
        <div id="servicios" className="w-full h-auto px-5 md:px-10 mt-[100px]">
          <div className="w-full h-full bg-cWhite grid justify-center items-center rounded-2xl px-5">

            <div className="flex items-center justify-evenly border-b-2 py-10">
              <h2 data-aos="fade-up" data-aos-duration="1000"
              className="text-base text-cBlack font-poppinsBold"
              >
                SERVICIOS
              </h2>
              <button
              onClick={handleWhatsAppClick}
              className="btnCotizar"
              data-aos="zoom-in" data-aos-duration="800"
              >
                Cotizar
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center border-b-2 py-12">
              <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl text-cBlack font-poppinsSemibold">
                Diseño para <br/> redes sociales
              </h2>
              <div data-aos="fade-up" data-aos-duration="1500">
                <p className="max-w-[560px] text-2xl text-cGrayLight font-poppinsRegular">
                  Diseñamos tus redes sociales para transmitir tu mensaje de manera impactante y efectiva.
                </p>
                <p className="text-2xl text-cBlack font-poppinsBold mt-6">
                  Desde 400,000COP
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center border-b-2 py-12">
              <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl text-cBlack font-poppinsSemibold">
                Logotipos e <br/> Identidad de marca
              </h2>
              <div data-aos="fade-up" data-aos-duration="1500">
                <p className="max-w-[580px] text-2xl text-cGrayLight font-poppinsRegular">
                  Diseñamos logotipos e identidad de marca que representen tu esencia y destaquen tu negocio.
                </p>
                <p className="text-2xl text-cBlack font-poppinsBold mt-6">
                  Desde 150,000COP
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center border-b-2 py-12">
              <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl text-cBlack font-poppinsSemibold">
                Diseño y desarrollo <br/> de sitios web
              </h2>
              <div data-aos="fade-up" data-aos-duration="1500">
                <p className="max-w-[530px] text-2xl text-cGrayLight font-poppinsRegular">
                Ofrecemos servicios de diseño y desarrollo de sitios web personalizados para personas y negocios.
                </p>
                <p className="text-2xl text-cBlack font-poppinsBold mt-6">
                  Desde 550,000COP
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center border-b-2 py-12">
              <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl text-cBlack font-poppinsSemibold">
                Diseño de <br/> piezas gráficas
              </h2>
              <div data-aos="fade-up" data-aos-duration="1500">
                <p className="max-w-[490px] text-2xl text-cGrayLight font-poppinsRegular">
                  Diseñamos piezas gráficas como posts, banners, portadas, tarjetas y más, con el fin potenciar tu presencia visual.
                </p>
                <p className="text-2xl text-cBlack font-poppinsBold mt-6">
                  Desde 30,000COP
                </p>
              </div>
            </div>

            <a href="#portafolio"
            data-aos="zoom-in" data-aos-duration="800"
            className="py-4 px-8 bg-cYellow rounded-md max-w-max  text-2xl font-poppinsRegular text-cBlack transition duration-300 hover:text-cYellow hover:bg-cBlack m-auto my-10"
            >
              Portafolio
            </a>

          </div>
        </div>
    </>
  )
}

export default Services