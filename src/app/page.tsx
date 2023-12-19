'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";

export default function Home() {
  const [filtro, setFiltro] = useState<string>('');

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigateToSaludo();
  }
  
  const navigateToSaludo = () => {
    router.push(`/${filtro}`)
  }

  return (
    <main className="flex flex-col h-full">
      <h1 className="text-gray-200 text-center items-center justify-center w-screen absolute text-2xl top-4">Bienvenido al saludador de Virtual!</h1>
      <div className="h-screen flex flex-col justify-center items-center gap-10">
        <p className="text-gray-200 w-3/4 text-2xl text-center ">Por favor ingresa tus ultimos 3 del DNI para que veas el mensajito que preparamos para vos!</p>
        <form onSubmit={handleSubmit} className="flex gap-2 items-center justify-center ">
          <input type="text" onChange={handleChange} value={filtro} className="p-2 rounded-md" />
          <Link href={`/${filtro}`}>
            <Button label="ver mi saludo"/>
          </Link>
        </form>
      </div>
    </main>
  );
}
