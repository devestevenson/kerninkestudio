
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../carousel/Carousel.css';

// Import images
import IMG0 from '/src/assets/images/IMG0.jpg'
import IMG1 from '/src/assets/images/IMG1.jpg'
import IMG2 from '/src/assets/images/IMG2.jpg'
import IMG3 from '/src/assets/images/IMG3.jpg'
import IMG4 from '/src/assets/images/IMG4.jpg'


const Carousel = () => {
  return (
    <>

        <section id="nosotros" data-aos="zoom-in" data-aos-duration="1100" className='swiperCarousel'>

            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 1600,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={IMG0} alt="Imagen 1" /></SwiperSlide>
                <SwiperSlide><img src={IMG1} alt="Imagen 1" /></SwiperSlide>
                <SwiperSlide><img src={IMG2} alt="Imagen 2" /></SwiperSlide>
                <SwiperSlide><img src={IMG3} alt="Imagen 3" /></SwiperSlide>
                <SwiperSlide><img src={IMG4} alt="Imagen 4" /></SwiperSlide>
            </Swiper>

        </section>

    </>
  )
}

export default Carousel