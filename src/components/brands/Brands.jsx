
import styles from '../brands/Brands.module.css'

import logo1 from '../../assets/images/logos/charlotte.png'
import logo2 from '../../assets/images/logos/creative.png'
import logo3 from '../../assets/images/logos/dosformas.png'
import logo4 from '../../assets/images/logos/ferre.png'
import logo5 from '../../assets/images/logos/fundacion.png'
import logo6 from '../../assets/images/logos/kooldent.png'
import logo7 from '../../assets/images/logos/multixpress.png'
import logo8 from '../../assets/images/logos/pequeñosexploradores.png'
import logo9 from '../../assets/images/logos/printyourmood.png'
import logo10 from '../../assets/images/logos/roast.png'
import logo11 from '../../assets/images/logos/spartan.png'
import logo12 from '../../assets/images/logos/updt.png'

const Brands = () => {
  return (
    <div className='flex flex-col mt-[100px]'>

        <h2
            data-aos="fade-up" data-aos-duration="1100"
            className="text-base text-cWhite font-poppinsBold mb-5 m-auto">HAN CONFIADO EN NOSOTROS</h2>

        <div className={styles.slider}>

            <div className={styles.slide_track}>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo1} alt="logo1" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo2} alt="logo2" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo3} alt="logo3" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo4} alt="logo4" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo5} alt="logo5" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo6} alt="logo6" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo7} alt="logo7" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo8} alt="logo8" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo9} alt="logo9" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo10} alt="logo10" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo11} alt="logo11" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo12} alt="logo12" />
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide_track}>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo1} alt="logo1" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo2} alt="logo2" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo3} alt="logo3" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo4} alt="logo4" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo5} alt="logo5" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo6} alt="logo6" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo7} alt="logo7" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo8} alt="logo8" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo9} alt="logo9" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo10} alt="logo10" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo11} alt="logo11" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className={styles.slide}>
                    <img src={logo12} alt="logo12" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Brands