import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import GlobeSection from './components/GlobeSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <GlobeSection />
      <Footer />
    </div>
  )
}

export default App
