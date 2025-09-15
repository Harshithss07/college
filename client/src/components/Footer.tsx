import { motion } from 'framer-motion'
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Zap,
  Heart
} from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Dashboard', href: '/dashboard' },
  ]

  const resources = [
    { name: 'API Documentation', href: '#' },
    { name: 'Starter Kits', href: '#' },
    { name: 'Code of Conduct', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Support', href: '#' },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Github, href: '#', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-space-black pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Zap className="w-8 h-8 text-electric-blue" />
                <div className="absolute inset-0 w-8 h-8 bg-electric-blue opacity-20 rounded-full animate-ping"></div>
              </div>
              <span className="text-2xl font-cyber font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
                CYBERCODE
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering the next generation of innovators through technology, 
              collaboration, and cutting-edge hackathon experiences.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 glass rounded-full transition-all duration-300 ${social.color} group`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-electric-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={resource.name}>
                  <motion.a
                    href={resource.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-electric-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{resource.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-gray-400"
              >
                <Mail className="w-5 h-5 text-electric-blue" />
                <span>hello@cybercode.dev</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-3 text-gray-400"
              >
                <Phone className="w-5 h-5 text-electric-blue" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3 text-gray-400"
              >
                <MapPin className="w-5 h-5 text-electric-blue" />
                <span>San Francisco, CA</span>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-dark-surface border border-electric-blue/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:outline-none transition-colors"
                />
                <button className="cyber-button px-6 py-2 rounded-lg text-sm">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 CyberCode Hackathon. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-electric-blue text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-electric-blue text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-electric-blue text-sm transition-colors">
              Code of Conduct
            </a>
          </div>
        </motion.div>

        {/* Made with Love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-8 pt-8 border-t border-electric-blue/10"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by the CyberCode Team</span>
          </p>
        </motion.div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-black to-transparent pointer-events-none"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-neon-purple/5 rounded-full blur-3xl"></div>
    </footer>
  )
}

export default Footer
