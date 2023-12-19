import { Saludo } from "@/mockdata/saludos";

type CartaProps = {
  saludo: Saludo,
}
const Carta = ({ saludo }: CartaProps) => {
  
  const { message, name, id } = saludo;

  const letter = message.split('\n')

  return (
    <section className={'text-neutral-900 bold font-medium w-full md:w-3/4 p-2 text-center text-xs md:text-xl bg-white rounded-md'}>
      <h5 className="text-left">{name}...</h5>
      {letter.map( (paragraph, i) => <p key={i} className="before:content-[''] before:p-2 text-justify">{paragraph}</p>)}
      
      <p className="text-right">Atte,</p>
      <p className="text-right">El Team Virtual Remote Partner 😎</p>
    </section>
  )
}

export default Carta;