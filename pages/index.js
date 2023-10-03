import Hero from '@/components/Hero'
import About from '@/components/About'
import Contato from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Hero heading="Me chamo Paulo Albuquerque" message='DESENVOLVEDOR FRONT-END | UI/UX DESIGNER' />
      <About />
      <Contato />
    </main>
    </>
  )
}
