import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-skyblue-400 w-full h-screen'>
      <div className='max-w-6xl mx-auto'>
        <Header />
        <div className='text-white'>
          <h1>fredydlemus Blog</h1>
          <p>¡Bienvenidos a mi blog! Soy un desarrollador web apasionado y aquí comparto consejos y trucos sobre desarrollo web, discuto las últimas tendencias y tecnologías, y ofrezco soluciones a problemas comunes. Además, encontrarás recursos educativos para principiantes y programadores experimentados. ¡Gracias por visitarme!</p>
        </div>
      </div>
    </div>
  )
}
