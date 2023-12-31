import type { Metadata } from 'next'
import { Roboto_Condensed, Pacifico } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import logoVirtual from '../../public/logo_blanco.webp'

const roboto = Roboto_Condensed({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Virtual Remote Partner',
  description: 'Generated by Virtual Remote Partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  //bg-gradient-to-tl from-[#00001e] to-[#010044]
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col items-center bg-no-repeat bg-cover bg-[url('../../public/fondo_mobile_large.webp')] md:bg-[url('../../public/bg_image.webp')] md:bg-cover md:bg-no-repeat`} >
        <Image className='mt-4' src={logoVirtual} width={150} height={150} alt='logo virtual remote partner'/>
        {children}
      </body>
    </html>
  )
}
