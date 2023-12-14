import Link from "next/link";
import { saludos } from "../../mockdata/saludos";
import Button from "@/components/button";

export default function Saludo({ params: {id} }: { params: {id: string} }) {
  
  const saludo = saludos.find((objeto) => objeto.id.toString() === id);

  return (
    <section className="flex flex-col justify-center items-center h-screen w-full gap-2">
      <h3>Mensaje general deseando buenos augurios para el 2024</h3>
      <Link href={'/'}>
        <Button label="salir"/>
      </Link>
    </section>
  )
} 