import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./Components/Header/Header"
import Home from './Pages/home'
import Portfolio from './Pages/portfolio'
import Webdesign from './Pages/webdesign'
import Ootd from './Pages/ootd'
import Object from './Pages/object'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/ootd" element={<Ootd />} />
        <Route path="/object" element={<Object />} />
      </Routes>
    </Router>
  )
}


export default App
