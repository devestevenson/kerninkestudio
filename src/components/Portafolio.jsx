import IMG5 from "/src/assets/images/IMG5.png";
import IMG6 from "/src/assets/images/IMG6.jpg";
import IMG7 from "/src/assets/images/IMG7.jpg";
import IMG8 from "/src/assets/images/IMG8.jpg";
import IMG9 from "/src/assets/images/IMG9.png";
import IMG10 from "/src/assets/images/IMG10.jpg";

const Portafolio = () => {
  return (
    <div id="portafolio" className="flex justify-center items-center flex-col mt-[100px] px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center overflow-hidden">

            
                <a data-aos="zoom-in" data-aos-duration="1100" href="#" className="imageStyle">
                    <img className="h-full w-full object-cover transition duration-300 hover:scale-110" src={IMG5} alt="" />
                </a>
                <a data-aos="zoom-in" data-aos-duration="1100" href="#" className="imageStyle">
                    <img className="h-full w-full object-cover transition duration-300 hover:scale-110" src={IMG6} alt="" />
                </a>
            
            
                <a data-aos="zoom-in" data-aos-duration="1100" href="#" className="imageStyle">
                    <img className="h-full w-full object-cover transition duration-300 hover:scale-110" src={IMG7} alt="" />
                </a>
                <a data-aos="zoom-in" data-aos-duration="1100" href="#" className="imageStyle">
                    <img className="h-full w-full object-cover transition duration-300 hover:scale-110" src={IMG8} alt="" />
                </a>
            
            
                <a data-aos="zoom-in" data-aos-duration="1100" href="#" className="imageStyle">
                    <img className="h-full w-full object-cover transition duration-300 hover:scale-110" src={IMG9} alt="" />
                </a>
                <a data-aos="zoom-in" data-aos-duration="1100" href="#" className="imageStyle">
                    <img className="h-full w-full object-cover transition duration-300 hover:scale-110" src={IMG10} alt="" />
                </a>
            

            
        </div>
        <a href="#servicios" data-aos="zoom-in" data-aos-duration="1100" className="btnServices mt-[50px]">
            Servicios
        </a>
    </div>
  )
}

export default Portafolio

{/* <div className="w-[300px] h-[600px] bg-green-600">1</div> */}