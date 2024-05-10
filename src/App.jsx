import { useState } from 'react'
//imports Route, renames BrowserRouter to Router, imports Routes
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Careers from './components/careers'
import Contact from './components/contact'
import Contracts from './components/contracts'


function App() {

  return (
    <>
      <Router>
        {<Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
