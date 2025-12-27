import { createRoot } from 'react-dom/client'
import Homepage from './landingPage/home/HomePage'
import AboutPage from './landingPage/about/AboutPage'
import ProjectPage from './landingPage/project/ProjectPage'
import Navbar from './landingPage/boilerplate/Navbar'
import Footer from './landingPage/boilerplate/Footer'
import Contact from './landingPage/contact/ContactPage'
import Notfound from './landingPage/Notfound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css"
import Cursor from './landingPage/universal/Cursor'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Cursor/>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/project' element={<ProjectPage />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<Notfound />}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
)
