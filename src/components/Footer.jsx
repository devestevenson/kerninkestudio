import { LinkedinLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";


const Footer = () => {
  return (
    <div className="border-t border-kerninkGrayDark mt-[100px] py-8">
        <div className="sm:flex justify-between items-center px-5 md:px-10">




            <a href="/" className="mb-7 block text-kerninkWhite font-poppinsRegular text-lg sm:text-xl"><span className="text-kerninkYellow font-poppinsBold">KERNINK</span> © 2023</a>

            <ul className="flex flex-col mb-5">
                <a className="text-kerninkWhite font-poppinsRegular text-lg sm:text-xl hover:text-kerninkYellow" href="tel:+573245832155">+57 324 583 3255</a>
                <a className="text-kerninkWhite font-poppinsRegular text-lg sm:text-xl hover:text-kerninkYellow" href="mailto:">kerninkestudio@gmail.com</a>
            </ul> 

            <div className="flex gap-3">
                <a href="#"><LinkedinLogo fill="#FFFFFF" weight="fill" size={32} className="hover:fill-[#0E76A8]" /></a>
                <a href="#"><InstagramLogo fill="#FFFFFF" weight="fill" size={32} className="hover:fill-[#C13584]" /></a>
                <a href="#"><FacebookLogo fill="#FFFFFF" weight="fill" size={32} className="hover:fill-[#4267B2]" /></a>
            </div>


        </div>
    </div>
  )
}

export default Footer