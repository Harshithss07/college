import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Mail, 
  Calendar, 
  Users, 
  Trophy, 
  Settings, 
  LogOut,
  Plus,
  Edit3,
  Trash2,
  Upload,
  Bell,
  Shield,
  Award,
  Star
} from 'lucide-react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile')

  const user = {
    name: 'Alex Chen',
    email: 'alex.chen@example.com',
    avatar: '/api/placeholder/150/150',
    team: 'ByteBusters',
    registrationDate: '2025-02-15',
    status: 'registered'
  }

  const projects = [
    {
      id: 1,
      name: 'AI-Powered Code Review',
      description: 'Automated code review system using machine learning',
      status: 'in-progress',
      team: 'ByteBusters',
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform',
      status: 'submitted',
      team: 'CryptoCoders',
      lastUpdated: '1 day ago'
    }
  ]

  const joinedEvents = [
    {
      id: 1,
      name: 'Code Meet 2025',
      date: '2025-03-20',
      status: 'Ongoing'
    },
    {
      id: 2,
      name: 'AI Sprint',
      date: '2025-01-10',
      status: 'Completed'
    }
  ]

  const leaderboard = [
    { rank: 1, name: 'ByteBusters', points: 980, icon: <Star className="text-cyber-green" /> },
    { rank: 2, name: 'CryptoCoders', points: 870, icon: <Star className="text-electric-blue" /> },
    { rank: 3, name: 'QuantumCrew', points: 820, icon: <Star className="text-neon-purple" /> },
    { rank: 4, name: 'HackElite', points: 790 },
    { rank: 5, name: 'AlgoMasters', points: 760 }
  ]

  const notifications = [
    {
      id: 1,
      title: 'Team Formation Deadline',
      message: 'Register your team by March 10th',
      type: 'warning',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      title: 'New Workshop Added',
      message: 'AI & Machine Learning workshop scheduled',
      type: 'info',
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      title: 'Project Submission Open',
      message: 'You can now submit your hackathon projects',
      type: 'success',
      timestamp: '1 day ago'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'text-cyber-green bg-cyber-green/20'
      case 'in-progress':
        return 'text-electric-blue bg-electric-blue/20'
      case 'draft':
        return 'text-yellow-400 bg-yellow-400/20'
      default:
        return 'text-gray-400 bg-gray-400/20'
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-cyber-green/30 bg-cyber-green/10'
      case 'warning':
        return 'border-yellow-400/30 bg-yellow-400/10'
      case 'error':
        return 'border-red-400/30 bg-red-400/10'
      default:
        return 'border-electric-blue/30 bg-electric-blue/10'
    }
  }

  const TabButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 lg:space-x-3 px-3 lg:px-6 py-2 lg:py-4 rounded-lg transition-all duration-300 whitespace-nowrap lg:w-full ${
        activeTab === id
          ? 'bg-electric-blue/20 lg:border-l-4 border-electric-blue text-electric-blue'
          : 'hover:bg-dark-surface text-gray-400 hover:text-white'
      }`}
    >
      <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
      <span className="font-medium text-sm lg:text-base">{label}</span>
    </button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Add style definitions for the custom classes */}
      <style jsx>{`
        .glass {
          background: rgba(30, 30, 40, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(100, 100, 200, 0.2);
        }
        .cyber-button {
          background: linear-gradient(45deg, #00ccff, #0066ff);
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          font-weight: bold;
          transition: all 0.3s;
        }
        .cyber-button:hover {
          background: linear-gradient(45deg, #0066ff, #00ccff);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 102, 255, 0.4);
        }
        .text-electric-blue { color: #00ccff; }
        .text-cyber-green { color: #00ff99; }
        .text-neon-purple { color: #cc00ff; }
        .bg-dark-surface { background-color: #1e1e2a; }
        .border-electric-blue { border-color: #00ccff; }
      `}</style>

      {/* Header */}
      <header className="glass border-b border-blue-400/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-black font-bold text-lg"
              >
                {user.name.charAt(0)}
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-white">Welcome back, {user.name}!</h1>
                <p className="text-gray-400">Ready to innovate?</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 glass px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors text-red-400">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="glass rounded-2xl p-3 md:p-6 space-y-1 md:space-y-2">
              {/* Mobile: Horizontal scroll tabs */}
              <div className="lg:hidden flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
                <TabButton id="profile" label="Profile" icon={User} />
                <TabButton id="projects" label="Projects" icon={Trophy} />
                <TabButton id="events" label="Joined Events" icon={Calendar} />
                <TabButton id="leaderboard" label="Leaderboard" icon={Award} />
                <TabButton id="notifications" label="Notifications" icon={Bell} />
                <TabButton id="settings" label="Settings" icon={Settings} />
              </div>
              {/* Desktop: Vertical tabs */}
              <div className="hidden lg:block space-y-2">
                <TabButton id="profile" label="Profile" icon={User} />
                <TabButton id="projects" label="My Projects" icon={Trophy} />
                <TabButton id="events" label="Joined Events" icon={Calendar} />
                <TabButton id="leaderboard" label="Leaderboard" icon={Award} />
                <TabButton id="notifications" label="Notifications" icon={Bell} />
                <TabButton id="settings" label="Settings" icon={Settings} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Profile Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={user.name}
                          className="w-full px-4 py-3 bg-gray-700 border border-blue-400/20 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={user.email}
                          className="w-full px-4 py-3 bg-gray-700 border border-blue-400/20 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Skills</label>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Node.js', 'Python', 'AI/ML', 'Blockchain'].map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                          <button className="px-3 py-1 border border-blue-400/30 text-blue-400 rounded-full text-sm hover:bg-blue-400/20 transition-colors">
                            + Add Skill
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-black font-bold text-4xl">
                          {user.name.charAt(0)}
                        </div>
                        <button className="cyber-button rounded-lg inline-flex items-center space-x-2">
                          <Upload className="w-4 h-4" />
                          <span>Upload Avatar</span>
                        </button>
                      </div>

                      <div className="glass p-4 rounded-lg">
                        <h3 className="font-bold text-white mb-3">Registration Status</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Status</span>
                            <span className="text-green-400">Registered</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Team</span>
                            <span className="text-white">{user.team}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Registration Date</span>
                            <span className="text-white">{user.registrationDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex space-x-4">
                    <button className="cyber-button rounded-lg">Save Changes</button>
                    <button className="glass border border-blue-400/20 text-blue-400 hover:bg-blue-400/20 px-6 py-3 rounded-lg transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Joined Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-4">Joined Events</h2>
                <div className="grid gap-6">
                  {joinedEvents.map((event) => (
                    <div key={event.id} className="glass rounded-2xl p-6 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-blue-400">{event.name}</h3>
                        <p className="text-gray-400">Date: {event.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        event.status === 'Ongoing'
                          ? 'bg-blue-400/20 text-blue-400'
                          : 'bg-green-400/20 text-green-400'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leaderboard Tab */}
            {activeTab === 'leaderboard' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-4">Leaderboard</h2>
                <div className="glass rounded-2xl p-6">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="text-purple-400 text-lg font-bold pb-2">Rank</th>
                        <th className="text-purple-400 text-lg font-bold pb-2">Team</th>
                        <th className="text-purple-400 text-lg font-bold pb-2">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((entry) => (
                        <tr key={entry.rank} className="border-b border-blue-400/10 last:border-b-0">
                          <td className="py-2 font-bold text-xl text-green-400 flex items-center space-x-2">
                            {entry.icon && <span>{entry.icon}</span>}
                            <span>{entry.rank}</span>
                          </td>
                          <td className="py-2 text-white">{entry.name}</td>
                          <td className="py-2 text-blue-400 font-semibold">{entry.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-white">My Projects</h2>
                  <button className="cyber-button rounded-lg inline-flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>New Project</span>
                  </button>
                </div>

                <div className="grid gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="glass rounded-2xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                          <p className="text-gray-400 mb-2">{project.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Team: {project.team}</span>
                            <span>Updated: {project.lastUpdated}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            project.status === 'submitted' 
                              ? 'text-green-400 bg-green-400/20' 
                              : project.status === 'in-progress'
                                ? 'text-blue-400 bg-blue-400/20'
                                : 'text-gray-400 bg-gray-400/20'
                          }`}>
                            {project.status}
                          </span>
                          <button className="p-2 hover:bg-blue-400/20 rounded-lg transition-colors">
                            <Edit3 className="w-4 h-4 text-gray-400" />
                          </button>
                          <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-blue-400/20">
                        <div className="flex space-x-2">
                          {['React', 'Node.js', 'MongoDB'].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button className="text-blue-400 hover:underline">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Notifications</h2>

                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`glass rounded-2xl p-6 border-l-4 ${
                        notification.type === 'success'
                          ? 'border-green-400/30 bg-green-400/10'
                          : notification.type === 'warning'
                            ? 'border-yellow-400/30 bg-yellow-400/10'
                            : 'border-blue-400/30 bg-blue-400/10'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2">{notification.title}</h3>
                          <p className="text-gray-400 mb-2">{notification.message}</p>
                          <span className="text-sm text-gray-500">{notification.timestamp}</span>
                        </div>
                        <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Settings</h2>

                <div className="glass rounded-2xl p-8 space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-blue-400/20">
                    <div>
                      <h3 className="font-bold text-white">Email Notifications</h3>
                      <p className="text-gray-400">Receive updates about hackathon events</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-400 transition-colors"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-blue-400/20">
                    <div>
                      <h3 className="font-bold text-white">Two-Factor Authentication</h3>
                      <p className="text-gray-400">Add an extra layer of security</p>
                    </div>
                    <button className="flex items-center space-x-2 cyber-button rounded-lg text-sm">
                      <Shield className="w-4 h-4" />
                      <span>Enable</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div>
                      <h3 className="font-bold text-white">Profile Visibility</h3>
                      <p className="text-gray-400">Make your profile visible to other participants</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-400 transition-colors"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard