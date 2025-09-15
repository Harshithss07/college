import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },

  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-surface/95 border-b border-electric-blue/30 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <Zap className="w-8 h-8 text-electric-blue animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-electric-blue opacity-20 rounded-full animate-ping"></div>
            </div>
            <span className="text-2xl font-cyber font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              CYBERCODE
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-white hover:text-electric-blue transition-colors duration-300 group text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            
            <a href="/dashboard">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="cyber-button rounded-lg px-4 lg:px-6 py-2 text-sm lg:text-base"
              >
                Dashboard
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-dark-surface/95 rounded-lg p-4 border border-electric-blue/30 shadow-lg"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block py-3 px-4 text-white hover:text-electric-blue hover:bg-electric-blue/10 rounded-lg transition-all duration-300 border-b border-electric-blue/10 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full mt-4 cyber-button rounded-lg py-3"
            >
              Dashboard
            </motion.button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
