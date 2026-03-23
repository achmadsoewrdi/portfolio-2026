import Cursor from '../components/ui/Cursor'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProfileSection from '../components/sections/about/ProfileSection'
import EducationSection from '../components/sections/about/EducationSection'

export default function About() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="min-h-screen bg-bg pt-24">
        <ProfileSection/>
        <EducationSection/>
      </main>
      <Footer />
    </>
  )
}