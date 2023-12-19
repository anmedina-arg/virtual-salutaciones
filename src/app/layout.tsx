import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import logoVirtual from '../../public/logo blanco.webp'

const inter = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virtual Remote Partner',
  description: 'Generated by Virtual Remote Partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[url('../../public/bg_image1.webp')] bg-cover ps-4 flex flex-col items-center`}>
        <Image className='mt-4' src={logoVirtual} width={150} height={150} alt='logo virtual remote partner'/>
        {children}
      </body>
    </html>
  )
}
