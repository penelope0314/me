import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Rout} from 'react-router-dom';
import './App.css'
import Header from "./Components/Header/Header"
import Portfolio from './Pages/portfolio'
import Photography from './Pages/photography'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </HashRouter>
  )
}


export default App
