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
    <main className="flex flex-col min-h-screen">
      <h1 className="text-gray-300 text-center items-center justify-center w-screen absolute">bienvenido al saludador de Virtual!</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 items-center justify-center min-h-screen">
        <input type="text" onChange={handleChange} value={filtro} className="p-2 rounded-md"/>
        <Link href={`/${filtro}`}>
          <Button label="ver mi saludo"/>
        </Link>
      </form>
    </main>
  );
}
