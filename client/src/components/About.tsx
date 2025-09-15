import { motion } from 'framer-motion'
import { Cpu, Rocket, Shield, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Cutting-Edge Tech',
      description: 'Explore the latest in AI, blockchain, IoT, and quantum computing'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'Build solutions that push the boundaries of what\'s possible'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'State-of-the-art security for all your hackathon projects'
    },
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Rapid prototyping tools and resources at your disposal'
    }
  ]

  const techStack = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'Blockchain',
    'Docker', 'Kubernetes', 'AWS', 'Firebase', 'MongoDB'
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cyber font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              About CyberCode
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            CyberCode Hackathon 2025 brings together the brightest minds in technology 
            to create innovative solutions for tomorrow's challenges. Join us for 72 hours 
            of intense coding, creativity, and collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-surface/90 border border-electric-blue/20 hover:border-electric-blue/40 p-4 md:p-6 rounded-2xl text-center group hover:scale-102 md:hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="relative mb-4">
                <feature.icon className="w-12 h-12 mx-auto text-electric-blue group-hover:text-neon-purple transition-colors duration-300" />
                <div className="absolute inset-0 w-12 h-12 mx-auto bg-electric-blue opacity-20 rounded-full animate-ping group-hover:bg-neon-purple"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center px-4">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Build the Future of Technology
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our hackathon provides a platform for developers, designers, and innovators 
              to collaborate on groundbreaking projects. Whether you're a seasoned 
              professional or just starting out, you'll find the resources and community 
              to bring your ideas to life.
            </p>
            <ul className="space-y-3">
              {[
                '72 hours of non-stop innovation',
                'Mentorship from industry experts',
                'Access to premium APIs and tools',
                'Networking with top tech companies',
                'Workshops and technical sessions'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-surface/90 border border-electric-blue/30 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Supported Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border border-electric-blue/20 rounded-lg p-3 text-center hover:scale-105 transition-transform cursor-pointer"
                >
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <button className="cyber-button rounded-lg">
                View Full Tech Stack
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
