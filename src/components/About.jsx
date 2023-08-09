
const About = () => {
  return (
    <div id="nosotros" className="w-full h-auto px-5 md:px-10 mt-[100px]">
        <div className="w-full h-full bg-cYellow flex flex-col items-center justify-center text-center rounded-2xl py-[40px] px-5">
            <h1
              data-aos="fade-up" data-aos-duration="800"
              className="text-base text-cBlack font-poppinsBold mb-12">Nosotros</h1>
            <div>

              <p 
                data-aos="fade-up" data-aos-duration="1000"
                className="max-w-[620px] text-2xl md:text-3xl text-cBlack font-poppinsMedium mb-8 m-auto">
                En nuestro estudio de diseño gráfico con sede en Medellín, nos apasiona diseñar.
              </p>

              <p 
                data-aos="fade-up" data-aos-duration="1000"
                className="max-w-[670px] text-2xl md:text-3xl text-cBlack font-poppinsMedium mb-8 m-auto">
                Diseñamos todos los aspectos visuales de tu marca, brindándote soluciones creativas.
              </p>

              <p 
                data-aos="fade-up" data-aos-duration="1000"
                className="max-w-[650px] text-2xl md:text-3xl text-cBlack font-poppinsMedium mb-8 m-auto">
                Nos enfocamos en diseñar piezas visuales que transmitan la esencia de tu marca.
              </p>

              <p 
                data-aos="fade-up" data-aos-duration="1000"
                className="max-w-[660px] text-2xl md:text-3xl text-cBlack font-poppinsMedium mb-8 m-auto">
                Estamos comprometidos en brindarte toda nuestra experiencia en diseño, entregando resultados satisfactorios.
              </p>

              <p 
                data-aos="fade-up" data-aos-duration="1000"
                className="max-w-[300px] md:max-w-[520px] text-2xl md:text-3xl text-cBlack font-poppinsSemibold mb-12 m-auto">
                !Permítenos ser tu aliado creativo y trabajemos juntos en tu marca!
              </p>

              <a href="#servicios"
                data-aos="zoom-in" data-aos-duration="1100"
                className="btnPortafolio m-auto block">
                Servicios
              </a>

            </div>
        </div>
    </div>
  )
}

export default About