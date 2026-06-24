import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkFlowSection from './components/WorkFlowSection'
import PeopleSection from './components/PeopleSection'
import IndustriesSection from './components/IndustriesSection'
import ProcessSection from './components/ProcessSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkFlowSection />
        <PeopleSection />
        <ProcessSection />
        <IndustriesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
