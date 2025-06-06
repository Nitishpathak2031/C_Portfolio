import Navbar from './components/navbar'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Projects from './components/pages/Projects'
import Teams from './components/pages/Teams'
import Contacts from './components/pages/Contacts'
import Testimonial from './components/pages/Testimonial'
import Home from './components/pages/Home'


function App() {
  return (
    <>
      <Navbar />
      {/* Put each component inside a section with the right id */}
      <section id='home'><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="teams"><Teams /></section>
      <section id="testimonial"><Testimonial /></section>
      <section id="contact"><Contacts /></section>
    </>
  )
}

export default App
