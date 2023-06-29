
const Hero = () => {
  return (
    <div className="mt-[100px] px-5 md:px-10">

        <div className="flex flex-col justify-center items-center">
            <h1 data-aos="zoom-in" data-aos-duration="800" className="text-kerninkWhite font-poppinsRegular text-[40px] md:text-[50px] max-w-2xl leading-[50px] md:leading-[60px] text-center">
                SOMOS <span className="text-kerninkYellow font-poppinsBold">KERNINK ESTUDIO</span> Diseñamos la imagen <br /> de tu marca
            </h1>

            <a href="#nosotros" data-aos="zoom-in" data-aos-duration="800" className="btnAbout mt-12">
                Conócenos
            </a>
        </div>
    </div>
  )
}

export default Hero