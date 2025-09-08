import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./Components/Header/Header"
// import Home from './Pages/home'
import Portfolio from './Pages/portfolio'
import Webdesign from './Pages/webdesign'
import Photography from './Pages/photography'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router>
  )
}


export default App
