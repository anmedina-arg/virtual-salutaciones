import Link from "next/link";
import { saludos } from "../../mockdata/saludos";
import Button from "@/components/button";
import Carta from "@/components/carta";

export default function Saludo({ params: {id} }: { params: {id: string} }) {
  
  const saludo = saludos.find((objeto) => objeto.id.toString() === id);

  const buttonMessage = saludo ? "Continuar" : "Salir";

  const errorMessage = "Error! ingresaste un codigo invalido!"

  const route = saludo ? "/gral" : "/"

  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen w-full gap-2">
        {saludo ? <Carta message={saludo.mensaje}/> : <Carta message={errorMessage} error/>}
        <Link href={`${route}`}>
          <Button label={`${buttonMessage}`} />
        </Link>
      </section>
    </>
  )
} 