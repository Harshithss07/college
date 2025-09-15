import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import EventHighlights from './components/EventHighlights'
import About from './components/About'
import Timeline from './components/Timeline'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import SplashScreen from './components/SplashScreen'
import BrandBackground from './components/BrandBackground'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <Router>
      <div className="min-h-screen relative">
        <BrandBackground />
        
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-20"
            >
              <Header />
              <Hero />
              <EventHighlights />
              <About />
              <Timeline />
              <Events />
              <Gallery />
              <Footer />
            </motion.div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
