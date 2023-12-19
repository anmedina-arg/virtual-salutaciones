import Link from "next/link";
import { saludos } from "../../mockdata/saludos";
import Button from "@/components/button";
import Carta from "@/components/carta";
import ErrorComponent from "./error";

export default function Saludo({ params: {id} }: { params: {id: string} }) {
  
  const saludo = saludos.find((objeto) => objeto.id.toString() === id);

  if (!saludo) {
    // Manejo de error, por ejemplo, redirigir a la página de error personalizada
    return <ErrorComponent />;
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen w-full gap-2">
        <Carta saludo={saludo}/>
        <Link href={'/gral'}>
          <Button label={"Continuar"} />
        </Link>
      </section>
    </>
  )
} 