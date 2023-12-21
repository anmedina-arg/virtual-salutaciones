import { Saludo } from "@/mockdata/saludos";
import Footer from "./footer";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: '400', preload: true, subsets: ['latin'] })

type CartaProps = {
  saludo: Saludo,
  atte?: boolean,
  footer?: boolean,
}
const Carta = ({ saludo, footer, atte }: CartaProps) => {
  
  
  const { message, name, id } = saludo;

  const letter = message.split('\n')

  return (
    <section className={`${pacifico.className} p-10 pt-12 bg-[url('../../public/fondo_carta_vertical.webp')] md:bg-[url('../../public/fondo_carta.webp')] bg-no-repeat text-neutral-900 bold font-medium w-full md:w-3/4 md:p-32 text-center text-ms md:text-xl rounded-md`} style={{'backgroundSize': '100% 100%'}}>
      {name !== '' ? <h5 className="text-left capitalize mb-4 after:content-['...']">{name}</h5> : ""}
      {letter.map((paragraph, i) => <p key={i} className="before:content-[''] before:p-2 text-justify">{paragraph}</p>)}
      {atte && <p className="text-left before:content-[''] before:p-2">Atte,</p>}
      { footer && <Footer/> }
    </section>
  )
}

export default Carta;