import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBand from './components/TrustBand'
import Why from './components/Why'
import Services from './components/Services'
import Process from './components/Process'
import Team from './components/Team'
import Law from './components/Law'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'
import WaFloat from './components/WaFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <Why />
        <Services />
        <Process />
        <Team />
        <Law />
        <CtaFinal />
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}
