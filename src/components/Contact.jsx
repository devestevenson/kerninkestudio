
const Contact = () => {

  //Para reenviar al usuario a WhatsApp
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/SBPDMVUHOTAHJ1', '_blank');
  };

  return (
    <div id="contacto" className="flex justify-center items-center mt-[100px] px-5 md:px-10">
        <div className="w-full max-w-[1130px] h-96 flex flex-col justify-center items-center rounded-2xl bg-cYellow px-10">
            <h2 data-aos="zoom-in" data-aos-duration="800" className="font-poppinsBold text-[40px] leading-[50px] md:text-[50px] md:leading-[50px] text-center">
                Trabajemos juntos en tu marca
            </h2>

            <button data-aos="zoom-in" data-aos-duration="1000" className="btnPortafolio mt-10" onClick={handleWhatsAppClick}>
                Contratar
            </button>
        </div>
    </div>
  )
}

export default Contact