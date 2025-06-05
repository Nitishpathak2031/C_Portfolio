
import { Route, Routes } from 'react-router-dom'
import './App.css'
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
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/teams' element={<Teams/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        </Routes>
    </>
  )
}

export default App
