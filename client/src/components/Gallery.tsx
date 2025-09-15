import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Users, Trophy, Code2, Sparkles } from 'lucide-react'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'CyberCode 2024 Winners',
      description: 'The brilliant minds who conquered last year\'s challenges',
      category: 'Winners',
      thumbnail: '/api/placeholder/600/400',
      stats: { teams: 15, projects: 45, participants: 180 }
    },
    {
      id: 2,
      type: 'image',
      title: 'Innovation Showcase',
      description: 'Cutting-edge projects from our talented developers',
      category: 'Projects',
      thumbnail: '/api/placeholder/600/400',
      stats: { teams: 25, projects: 75, participants: 220 }
    },
    {
      id: 3,
      type: 'video',
      title: 'Hackathon Highlights 2024',
      description: 'Relive the most exciting moments from our previous event',
      category: 'Videos',
      thumbnail: '/api/placeholder/600/400',
      duration: '3:45'
    },
    {
      id: 4,
      type: 'image',
      title: 'Team Collaboration',
      description: '72 hours of intense coding and creative problem-solving',
      category: 'Teams',
      thumbnail: '/api/placeholder/600/400',
      stats: { teams: 30, projects: 90, participants: 280 }
    },
    {
      id: 5,
      type: 'image',
      title: 'Sponsor Showcase',
      description: 'Our amazing partners who make innovation possible',
      category: 'Sponsors',
      thumbnail: '/api/placeholder/600/400',
      stats: { sponsors: 12, prizes: '$75K', categories: 8 }
    },
    {
      id: 6,
      type: 'image',
      title: 'Networking Sessions',
      description: 'Building connections that last beyond the hackathon',
      category: 'Events',
      thumbnail: '/api/placeholder/600/400',
      stats: { sessions: 8, mentors: 25, connections: 500 }
    }
  ]

  const categories = ['All', 'Winners', 'Projects', 'Teams', 'Sponsors', 'Events', 'Videos']

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const sponsorLogos = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'FutureSoft', logo: 'FS' },
    { name: 'CodeMasters', logo: 'CM' },
    { name: 'QuantumTech', logo: 'QT' },
    { name: 'CyberSolutions', logo: 'CS' }
  ]

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cyber font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Gallery & Moments
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the incredible journey of innovation, collaboration, and success 
            from our previous hackathons and get inspired for what's ahead.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
              }}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${
                selectedCategory === category
                  ? 'bg-electric-blue text-black border-electric-blue'
                  : 'glass border-electric-blue/20 hover:border-electric-blue text-gray-300 hover:text-electric-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12 md:mb-16 px-4">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden glass">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image/Video */}
                <div className="relative w-full h-full bg-gradient-to-br from-electric-blue/20 to-neon-purple/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {filteredItems[currentIndex]?.type === 'video' ? (
                      <div className="relative">
                        <Play className="w-20 h-20 text-electric-blue opacity-80" />
                        <div className="absolute -top-2 -right-2 bg-electric-blue text-black text-xs px-2 py-1 rounded">
                          {filteredItems[currentIndex]?.duration}
                        </div>
                      </div>
                    ) : (
                      <Code2 className="w-20 h-20 text-electric-blue/40" />
                    )}
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {filteredItems[currentIndex]?.title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-4">
                        {filteredItems[currentIndex]?.description}
                      </p>
                      
                      {/* Stats */}
                      {filteredItems[currentIndex]?.stats && (
                        <div className="flex flex-wrap gap-4">
                          {Object.entries(filteredItems[currentIndex].stats).map(([key, value]) => (
                            <div key={key} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                              <span className="text-sm text-gray-300 capitalize">
                                {key}: <span className="text-white font-semibold">{value}</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full hover:bg-electric-blue/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-electric-blue" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full hover:bg-electric-blue/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-electric-blue" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-electric-blue'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-electric-blue scale-105'
                  : 'hover:scale-105'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play className="w-6 h-6 text-electric-blue" />
                  ) : (
                    <Code2 className="w-6 h-6 text-electric-blue/60" />
                  )}
                </div>
              </div>
              {index === currentIndex && (
                <div className="absolute inset-0 bg-electric-blue/20 animate-pulse"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Sponsor Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Powered by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {sponsorLogos.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center text-black font-bold text-xl group-hover:shadow-lg group-hover:shadow-electric-blue/30">
                  {sponsor.logo}
                </div>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {sponsor.name}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <button className="cyber-button rounded-lg inline-flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Become a Sponsor</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
