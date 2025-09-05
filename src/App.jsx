import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import Portfolio from './Pages/portfolio'
import Photography from './Pages/photography'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="#/portfolio" element={<Portfolio />} />
        <Route path="#/photography" element={<Photography />} />
      </Routes>
    </>
  )
}


export default App
