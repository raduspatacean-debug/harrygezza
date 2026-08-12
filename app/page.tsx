import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Divider from '@/components/Divider'
import About from '@/components/About'
import Releases from '@/components/Releases'
import Studio from '@/components/Studio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Hero />
      {/* matches the About section's top colour so there's no seam */}
      <Divider bg="#2E1B4D" />
      <About />
      {/* bridge the two purple sections */}
      <Divider bg="linear-gradient(#472D62, #2E1B4D)" />
      <Studio />
      {/* all four sections now share the same purple wash, so this bridges flat */}
      <Divider bg="#472D62" />
      <Releases />
      <Divider bg="#472D62" />
      <Contact />
      <Footer />
    </main>
  )
}
