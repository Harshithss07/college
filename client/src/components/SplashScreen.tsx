import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Zap, CircuitBoard } from 'lucide-react'

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [loading, setLoading] = useState(0)
  const [showLogo, setShowLogo] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLogo(true), 500)
    const timer2 = setTimeout(() => setShowText(true), 1000)
    
    const interval = setInterval(() => {
      setLoading(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-space-black via-dark-surface to-space-black overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="absolute w-1 h-1 bg-electric-blue rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          {/* Circuit board pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="#00D4FF" strokeWidth="1"/>
                <circle cx="25" cy="25" r="3" fill="#00D4FF"/>
                <circle cx="75" cy="75" r="3" fill="#8B5CF6"/>
                <circle cx="25" cy="75" r="3" fill="#00FF88"/>
                <circle cx="75" cy="25" r="3" fill="#00D4FF"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col items-center justify-center h-full px-8">
          
          {/* Logo Animation */}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10,
                  duration: 1 
                }}
                className="relative mb-8"
              >
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-2 border-electric-blue/30 rounded-full relative"
                >
                  {/* Inner Rings */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border border-neon-purple/40 rounded-full"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 border border-cyber-green/50 rounded-full"
                    />
                  </motion.div>
                  
                  {/* Central Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="relative"
                    >
                      {/* Central Icon with Glow */}
                      <motion.div className="relative">
                        <Code2 className="w-16 h-16 text-electric-blue relative z-10" />
                        <motion.div
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.8, 0.3] 
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-electric-blue/30 rounded-full blur-xl"
                        />
                      </motion.div>
                      
                      {/* Logo Text */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                      >
                        <span className="text-xs font-bold tracking-wider bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
                          CODE MEET
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Orbit Elements - Updated to match attachment style */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4"
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-6 h-6 text-neon-purple drop-shadow-lg" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <CircuitBoard className="w-6 h-6 text-cyber-green drop-shadow-lg" />
                      </motion.div>
                    </div>
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Code2 className="w-5 h-5 text-electric-blue drop-shadow-lg" />
                      </motion.div>
                    </div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <CircuitBoard className="w-5 h-5 text-neon-purple drop-shadow-lg" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Brand Text */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center mb-12"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-cyber font-black mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-electric-blue via-neon-purple to-cyber-green bg-clip-text text-transparent">
                    CODE MEET
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="h-1 bg-gradient-to-r from-electric-blue via-neon-purple to-cyber-green mx-auto rounded-full"
                />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-gray-300 text-lg md:text-xl mt-4 font-light tracking-wider"
                >
                  Connecting Minds • Building Future
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="w-full max-w-md"
          >
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Loading Experience...</span>
              <span>{loading}%</span>
            </div>
            
            <div className="h-2 bg-dark-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${loading}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-electric-blue via-neon-purple to-cyber-green relative"
              >
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex space-x-2 mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
                className="w-2 h-2 bg-electric-blue rounded-full"
              />
            ))}
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-16 h-16 border border-electric-blue/20 rounded-lg rotate-45 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-12 h-12 border border-neon-purple/20 rounded-full animate-bounce" />
          <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-cyber-green/20 rotate-45" />
        </div>

        {/* Edge Glow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyber-green to-transparent opacity-50" />
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent opacity-50" />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SplashScreen
