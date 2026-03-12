import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from './Pages/home'
import Design from './Pages/design'
import Photography from './Pages/photography'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App
