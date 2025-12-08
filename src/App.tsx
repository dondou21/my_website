import React from 'react';
import { BrowserRouter,
         Routes,
         Route
 } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/home' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}