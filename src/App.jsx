import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import Portfolio from './Pages/portfolio'
import Photography from './Pages/photography'

function App() {
  return (
    <BrowserRouter basename="/me">
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
