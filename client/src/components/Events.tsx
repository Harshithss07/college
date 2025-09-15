import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Clock, Trophy, Code } from 'lucide-react'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'AI & Machine Learning Workshop',
      category: 'Workshop',
      date: 'March 15, 2025',
      time: '9:00 AM - 11:00 AM',
      location: 'Tech Hub A',
      attendees: 45,
      maxAttendees: 50,
      description: 'Deep dive into modern AI techniques and practical implementations.',
      instructor: 'Dr. Sarah Chen',
      level: 'Intermediate',
      tags: ['AI', 'Python', 'TensorFlow'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Blockchain Development Masterclass',
      category: 'Workshop',
      date: 'March 15, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Innovation Lab',
      attendees: 32,
      maxAttendees: 40,
      description: 'Build decentralized applications from scratch using modern frameworks.',
      instructor: 'Alex Rodriguez',
      level: 'Advanced',
      tags: ['Blockchain', 'Solidity', 'Web3'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'UI/UX Design Sprint',
      category: 'Design',
      date: 'March 16, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Creative Studio',
      attendees: 28,
      maxAttendees: 35,
      description: 'Learn rapid prototyping and user-centered design principles.',
      instructor: 'Maya Patel',
      level: 'Beginner',
      tags: ['Design', 'Figma', 'Prototyping'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Cloud Architecture Session',
      category: 'Technical',
      date: 'March 16, 2025',
      time: '3:00 PM - 4:30 PM',
      location: 'Conference Room B',
      attendees: 55,
      maxAttendees: 60,
      description: 'Scalable cloud solutions and microservices architecture.',
      instructor: 'James Wilson',
      level: 'Intermediate',
      tags: ['AWS', 'DevOps', 'Docker'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Startup Pitch Competition',
      category: 'Competition',
      date: 'March 17, 2025',
      time: '11:00 AM - 1:00 PM',
      location: 'Main Auditorium',
      attendees: 120,
      maxAttendees: 150,
      description: 'Present your innovative startup ideas to industry experts.',
      instructor: 'Panel of VCs',
      level: 'All Levels',
      tags: ['Pitch', 'Startup', 'Funding'],
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Cybersecurity Fundamentals',
      category: 'Security',
      date: 'March 17, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Security Lab',
      attendees: 38,
      maxAttendees: 45,
      description: 'Essential cybersecurity practices for modern applications.',
      instructor: 'Rebecca Kim',
      level: 'Intermediate',
      tags: ['Security', 'Pentesting', 'OWASP'],
      image: '/api/placeholder/400/250'
    }
  ]

  const categories = ['All', 'Workshop', 'Competition', 'Technical', 'Design', 'Security']

  const getCategoryColor = (category: string) => {
    const colors = {
      'Workshop': 'bg-electric-blue/20 text-electric-blue border-electric-blue/30',
      'Competition': 'bg-neon-purple/20 text-neon-purple border-neon-purple/30',
      'Technical': 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
      'Design': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Security': 'bg-red-500/20 text-red-400 border-red-500/30'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  const getLevelColor = (level: string) => {
    const colors = {
      'Beginner': 'text-cyber-green',
      'Intermediate': 'text-electric-blue',
      'Advanced': 'text-neon-purple',
      'All Levels': 'text-yellow-400'
    }
    return colors[level as keyof typeof colors] || 'text-gray-400'
  }

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cyber font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Events & Activities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enhance your skills with our curated workshops, competitions, and networking sessions 
            designed to maximize your hackathon experience.
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
              className="glass px-3 md:px-6 py-2 md:py-3 rounded-full border border-electric-blue/20 hover:border-electric-blue hover:text-electric-blue transition-all duration-300 text-gray-300 text-sm md:text-base"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:scale-102 md:hover:scale-105 transition-all duration-300 group"
            >
              {/* Event Image */}
              <div className="relative h-48 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-electric-blue/40" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Calendar className="w-4 h-4 text-electric-blue" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-electric-blue" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <MapPin className="w-4 h-4 text-electric-blue" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Users className="w-4 h-4 text-electric-blue" />
                    <span>{event.attendees}/{event.maxAttendees} registered</span>
                  </div>
                </div>

                {/* Instructor & Level */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">
                    By {event.instructor}
                  </span>
                  <span className={`text-sm font-semibold ${getLevelColor(event.level)}`}>
                    {event.level}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-dark-surface rounded text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Registration</span>
                    <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                  </div>
                  <div className="w-full bg-dark-surface rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-electric-blue to-neon-purple h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Register Button */}
                <button className="w-full cyber-button rounded-lg text-sm py-2">
                  {event.attendees >= event.maxAttendees ? 'Waitlist' : 'Register Now'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <Trophy className="w-12 h-12 mx-auto text-electric-blue mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Host an Event?
            </h3>
            <p className="text-gray-400 mb-6">
              Share your expertise with the community. Propose a workshop or tech talk.
            </p>
            <button className="cyber-button rounded-lg">
              Submit Proposal
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
