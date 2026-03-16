import { useState } from 'react'
import LoadingScreen from './components/ui/LoadingScreen'
import Cursor from './components/ui/Cursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import MarqueeBanner from './components/sections/MarqueeBanner'
import AboutSection from './components/sections/AboutSection'
import WorkSection from './components/sections/WorkSection'
import SkillsSection from './components/sections/SkillsSection'
import ProcessSection from './components/sections/ProcessSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {loaded && (
        <>
          <Cursor />
          <Navbar />
          <main>
            <HeroSection />
            <MarqueeBanner />
            <AboutSection />
            <WorkSection />
            <SkillsSection />
            <ProcessSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}