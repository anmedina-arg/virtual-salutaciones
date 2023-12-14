type ButtonProp = {
  label: string
}

const Button = ({label}: ButtonProp) => {
  return <button className="text-gray-900 bg-gray-200 rounded-md p-2 uppercase font-semibold border-2 border-solid border-gray-700">{label}</button>
}

export default Button