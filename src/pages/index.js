
import Meta from '@/components/meta/Meta'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='w-full flex flex-col items-center '>
    <Meta title="GREENTUNES"/>
   
   <div className='container flex flex-col  justify-center bg-blue-400'>
   <h1>Home</h1>
   </div>
   </main>
  )
}
