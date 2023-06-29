import { ArrowSquareDown } from "@phosphor-icons/react";

const Services = () => {
  return (
    <>
        <div className="w-full h-auto mt-[100px] px-5 md:px-10">
            <div className="w-full h-full bg-kerninkWhite rounded-2xl px-4 md:px-10 pb-10">

                <div className="flex items-center justify-evenly border-b-2 border-gray-200 py-5">
                    <p data-aos="fade-up" data-aos-duration="1000" className="text-kerninkBlack text-base font-poppinsBold">SERVICIOS</p>
                    <a data-aos="fade-up" data-aos-duration="1000" className="btnWhatsApp" href="/">WhatsApp</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 py-12 border-b-2 border-gray-200">
                    <i data-aos="fade-up" data-aos-duration="1500" className="text-kerninkGrayLight text-base font-poppinsItalic block mb-5">01</i>
                    <h2 data-aos="fade-up" data-aos-duration="1500" className="text-kerninkBlack text-2xl font-poppinsRegular mb-5">Diseño para <br /> redes sociales</h2>
                    <div data-aos="fade-up" data-aos-duration="1500" className="">
                        <p className="max-w-[460px] text-kerninkGrayLight text-xl font-poppinsRegular mb-6">Diseñamos tus redes sociales para transmitir tu mensaje de manera impactante y efectiva.</p>
                        <h6 className="text-kerninkWhatsApp text-xl font-poppinsBold">Desde 400.000COP</h6>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 py-12 border-b-2 border-gray-200">
                    <i data-aos="fade-up" data-aos-duration="1500" className="text-kerninkGrayLight text-base font-poppinsItalic block mb-5">02</i>
                    <h2 data-aos="fade-up" data-aos-duration="1500" className="text-kerninkBlack text-2xl font-poppinsRegular mb-5">Logos e<br />Identidad de Marca</h2>
                    <div data-aos="fade-up" data-aos-duration="1500" className="">
                        <p className="max-w-[460px] text-kerninkGrayLight text-xl font-poppinsRegular mb-6">Diseñamos logotipos e identidad de marca que representen tu esencia y destaquen tu negocio.</p>
                        <h6 className="text-kerninkWhatsApp text-xl font-poppinsBold">Desde 150.000COP</h6>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 py-12 border-b-2 border-gray-200">
                    <i data-aos="fade-up" data-aos-duration="1500" className="text-kerninkGrayLight text-base font-poppinsItalic block mb-5">03</i>
                    <h2 data-aos="fade-up" data-aos-duration="1500" className="text-kerninkBlack text-2xl font-poppinsRegular mb-5">Diseño de piezas<br />gráficas</h2>
                    <div data-aos="fade-up" data-aos-duration="1500" className="">
                        <p className="max-w-[460px] text-kerninkGrayLight text-xl font-poppinsRegular mb-6">Diseñamos piezas gráficas como posts, banners, portadas, tarjetas y más, con el fin potenciar tu presencia visual.</p>
                        <h6 className="text-kerninkWhatsApp text-xl font-poppinsBold">Desde 30.000COP</h6>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="500" className="mt-10">
                    <ArrowSquareDown size={50} weight="fill" color="#707070" className="m-auto hover:fill-kerninkGrayDark" />
                </div>
            </div>
        </div>  
    </>
  )
}

export default Services