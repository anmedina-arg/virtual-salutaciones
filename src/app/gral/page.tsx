import Link from "next/link";
import { Saludo, saludos } from "../../mockdata/saludos";
import Button from "@/components/button";
import Carta from "@/components/carta";

export default function Saludo({ params: { id } }: { params: { id: string } }) {
  
  const saludoFinal : Saludo = {
    id: '000',
    name: 'Por último',
    message: 'Que sea un gran 2024 para todos! FELICIDADES'
  }

  return (
    <section className="flex flex-col justify-center items-center h-screen w-full gap-2">
      <Carta saludo={saludoFinal} />
      <Link href={'/'}>
        <Button label="salir"/>
      </Link>
    </section>
  )
} 