import { motion } from 'framer-motion'

const Hero = () => {
  // Stats and countdown moved to EventHighlights

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-cyber font-black mb-4 md:mb-6 px-4"
          >
            <span className="bg-gradient-to-r from-electric-blue via-neon-purple to-cyber-green bg-clip-text text-transparent animate-pulse block">
              CYBERCODE
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white block mt-2">
              HACKATHON 2025
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-4 max-w-4xl mx-auto"
          >
            Build the future with cutting-edge technology. Join the most innovative 
            hackathon of the year and compete for incredible prizes!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 px-4"
          >
            <button className="cyber-button text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:scale-105 transition-transform">
              Register Now
            </button>
            <button className="bg-transparent border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black transition-all duration-300 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg">
              Learn More
            </button>
          </motion.div>

          {/* Countdown and stats moved to EventHighlights */}
        </motion.div>

        {/* Stats moved to EventHighlights */}

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-electric-blue rounded-full animate-float opacity-20"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-neon-purple rounded-full animate-float animation-delay-2000 opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-cyber-green rounded-full animate-float animation-delay-4000 opacity-20"></div>
      </div>
    </section>
  )
}

export default Hero
