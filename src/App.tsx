import { useSmoothScroll } from './lib/useSmoothScroll'
import { LangProvider } from './lib/useLang'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { CustomCursor } from './components/ui/CustomCursor'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'

export default function App() {
  useSmoothScroll()
  return (
    <LangProvider>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </LangProvider>
  )
}
