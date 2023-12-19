import { Saludo } from "@/mockdata/saludos";
import Footer from "./footer";

type CartaProps = {
  saludo: Saludo,
  atte?: boolean,
  footer?: boolean,
}
const Carta = ({ saludo, footer, atte }: CartaProps) => {
  
  const { message, name, id } = saludo;

  const letter = message.split('\n')

  return (
    <section className={'text-neutral-900 bold font-medium w-full md:w-3/4 p-2 text-center text-ms md:text-xl bg-white rounded-md'}>
      <h5 className="text-left capitalize mb-4">{name}...</h5>
      {letter.map((paragraph, i) => <p key={i} className="before:content-[''] before:p-2 text-justify">{paragraph}</p>)}
      {atte && <p className="text-left before:content-[''] before:p-2">Atte,</p>}
      { footer && <Footer/> }
    </section>
  )
}

export default Carta;