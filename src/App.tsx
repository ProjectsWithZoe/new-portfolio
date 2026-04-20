import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ProjectGrid from './components/ProjectGrid'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <Nav dark={dark} onToggle={toggle} />
      <main>
        <Hero />
        <About />
        <ProjectGrid />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}
