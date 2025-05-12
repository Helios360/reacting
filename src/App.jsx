import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router"
import Home from "./pages/Home.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	  <Routes>
	  <Route path="pages/Home.jsx" element = {<Home />} />
	  </Routes>
    </>
  )
}

export default App
