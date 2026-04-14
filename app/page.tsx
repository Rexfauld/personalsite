import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'
import Vision from '@/components/sections/Vision'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Vision />
      <Contact />
    </main>
  )
}
