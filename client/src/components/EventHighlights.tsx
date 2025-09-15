import { motion } from 'framer-motion'
import { Users, Trophy, Code, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Participants', value: '500+' },
  { icon: Trophy, label: 'Prize Pool', value: '$50K' },
  { icon: Code, label: 'Projects', value: '100+' },
  { icon: Calendar, label: 'Days', value: '3' }
]

const EventHighlights = () => {
  return (
    <section className="relative py-12 md:py-20">
      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-dark-surface/90 border border-electric-blue/30 p-4 md:p-6 rounded-2xl mb-12 md:mb-16 max-w-sm md:max-w-md mx-auto shadow-lg"
      >
        <h3 className="text-electric-blue font-semibold mb-3 md:mb-4 text-sm md:text-base">Event Starts In:</h3>
        <div className="flex justify-center space-x-2 sm:space-x-4">
          {['15', '07', '23', '45'].map((time, index) => (
            <div key={index} className="text-center flex-1">
              <div className="bg-gradient-to-b from-neon-purple to-electric-blue text-white font-cyber text-lg sm:text-xl md:text-2xl font-bold p-2 sm:p-3 rounded-lg">
                {time}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1 md:mt-2">
                {['Days', 'Hours', 'Mins', 'Secs'][index]}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="bg-dark-surface/90 border border-electric-blue/20 hover:border-electric-blue/40 p-4 md:p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-electric-blue group-hover:text-neon-purple transition-colors" />
            <div className="text-lg md:text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default EventHighlights
