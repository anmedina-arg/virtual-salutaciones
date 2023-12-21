import Link from "next/link";
import { Saludo, saludos } from "../../mockdata/saludos";
import Button from "@/components/button";
import Carta from "@/components/carta";

export default function Saludo({ params: { id } }: { params: { id: string } }) {
  
  const saludoFinal : Saludo = {
    id: '000',
    name: '',
    message: 'Te deseamos una muy feliz navidad y un prospero 2024. ¡Felices fiestas!'
  }

  return (
    <section className="flex flex-col justify-center items-center h-screen w-full gap-2">
      <Carta saludo={saludoFinal} footer/>
      <Link href={'/'}>
        <Button label="salir"/>
      </Link>
    </section>
  )
} 