'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import {Header} from "@/components/header"

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
    <main className="flex flex-col">
      <Header />
      <div className="mt-32 flex flex-col justify-center items-center gap-10 ">
        <p className="text-gray-200 w-3/4 text-lg text-center ">Ingresa tus últimos 3 números del DNI para ver tu mensajito!</p>
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
