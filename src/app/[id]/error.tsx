'use client'
import Link from "next/link";
import Button from "@/components/button";
export default function ErrorComponent() {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full gap-2">
      <h1 className="text-neutral-900 bold font-medium w-full md:w-1/2 p-2 text-center text-ms md:text-xl bg-red-400 rounded-md">Error! ingresaste un codigo invalido!</h1>
      <Link href={'/'}>
        <Button label={"Volver a intentar"} />
      </Link>
    </section>
  )
}