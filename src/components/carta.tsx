type CartaProps = {
  message: string,
  error?: boolean
}
const Carta = ({ message, error }: CartaProps) => {
  
  const errorStyle = error ? "bg-red-400" : "";

  return <p className={`text-gray-200 w-1/2 text-2xl text-center ${errorStyle}`}>{message}</p>
}

export default Carta;