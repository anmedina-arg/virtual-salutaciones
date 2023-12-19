import Image from "next/image";
import logoVirtualNegro from '../../public/logo negro.webp'

export const Footer = () => {
  return (
    <div className="flex flex-col items-end mt-10 mb-4 mr-4">
      <div className="flex flex-col items-center gap-4">
        <p className="text-right">El Team Virtual Remote Partner 😎</p>
        <Image src={logoVirtualNegro} width={50} height={50} alt='logo virtual remote partner negro' />
      </div>
    </div>
  )
};

export default Footer;