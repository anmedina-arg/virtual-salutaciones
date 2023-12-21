import Image from "next/image";
import logoVirtual from "../../public/logo blanco.webp"

export const Header = () => {
  return (
    <section className="flex flex-col gap-4 w-full justify-center items-center p-4">
      <h1 className="text-gray-200 text-center items-center justify-center text-2xl top-4">Esta Navidad, regalamos afecto en cada palabra. Descubre nuestro mensaje especial, hecho con cariño solo para ti</h1>
    </section>
  )
}

export default Header;