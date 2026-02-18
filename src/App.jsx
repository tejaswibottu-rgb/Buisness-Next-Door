import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Buisnesslist from './components/Buisnesslist/Buisnesslist.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Hero />
        <Buisnesslist />
      </main>

      <Footer />
    </div>
  )
}

export default App
