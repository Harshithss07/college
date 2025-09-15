import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Lock, Calendar, Star, Award } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      time: 'Registration Opens',
      date: '1 October, 2024',
      title: 'Registration Begins',
      description: 'Secure your spot for the hackathon',
      status: 'upcoming',
      details: ['Online registration starts', 'Early bird benefits available'],
      icon: Calendar
    },
    {
      time: 'Registration Closes',
      date: '18 October, 2024',
      title: 'Final Registration Day',
      description: 'Last day for online registration',
      status: 'upcoming',
      details: ['Online registration closes at 11:59 PM', 'Spot registration available on-site'],
      icon: Clock
    },
    {
      time: 'CodeMeet 2024',
      date: '19 October, 2024',
      title: 'Technical Events Day',
      description: 'Workshops and competitions',
      status: 'upcoming',
      details: ['Events commence from 10:30 AM', 'Workshops by Industry Experts', 'Technical competitions'],
      icon: Star
    },
    {
      time: 'Hackathon Kick-off',
      date: '20 October, 2024',
      title: '24hrs Hackathon Begins',
      description: 'The main coding event starts',
      status: 'upcoming',
      details: ['Hackathon begins at 9:30 AM', 'Team formation finalized', 'Project ideation and planning'],
      icon: Users
    },
    {
      time: 'Project Evaluation',
      date: '21 October, 2024',
      title: 'Judging Period',
      description: 'Projects are evaluated by judges',
      status: 'upcoming',
      details: ['Evaluation begins at 9:30 AM', 'Demo presentations', 'Judging criteria: innovation, execution, design'],
      icon: Award
    },
    {
      time: 'Awards Ceremony',
      date: '21 October, 2024',
      title: 'Winner Announcements',
      description: 'Prizes and closing ceremony',
      status: 'upcoming',
      details: ['Winner announcements', 'Prize distribution', 'Closing remarks'],
      icon: Award
    }
  ];

  const getStatusColor = (status: any) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'active':
        return 'text-blue-500';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle;
      case 'active':
        return Users;
      default:
        return Lock;
    }
  };

  return (
    <section id="timeline" className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Event Roadmap
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Follow the journey from registration to the final awards ceremony. Every moment is 
            carefully planned to maximize your hackathon experience.
          </p>
        </motion.div>

        {/* Mobile Timeline */}
        <div className="block md:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 transform -translate-x-1/2"></div>
            
            {timelineEvents.map((event, index) => {
              const StatusIcon = getStatusIcon(event.status);
              const EventIcon = event.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-10 pl-14"
                >
                  {/* Timeline Marker */}
                  <div className={`absolute -left-9 top-1 w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 ${
                    event.status === 'completed'
                      ? 'bg-green-500 border-green-300 shadow-lg shadow-green-500/30'
                      : event.status === 'active'
                      ? 'bg-blue-500 border-blue-300 shadow-lg shadow-blue-500/30 animate-pulse'
                      : 'bg-gray-800 border-gray-600 shadow-lg shadow-purple-500/20'
                  }`}>
                    <EventIcon className={`w-5 h-5 ${
                      event.status === 'completed'
                        ? 'text-white'
                        : event.status === 'active'
                        ? 'text-white'
                        : 'text-gray-300'
                    }`} />
                  </div>
                  
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/90 backdrop-blur-sm p-5 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-blue-400 font-semibold">
                        {event.time}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{event.description}</p>
                    <p className="text-xs text-gray-500 mb-3">{event.date}</p>
                    
                    <div className="space-y-1">
                      {event.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-1.5"></div>
                          <span className="text-xs text-gray-400">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop Timeline - Original with improvements */}
        <div className="hidden md:block relative h-[700px] w-full max-w-6xl mx-auto mb-20">
          {/* Curved Road Path */}
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1000 600" 
            className="absolute top-0 left-0"
          >
            {/* Main Road */}
            <path
              d="M 0,300 Q 200,100 400,300 Q 600,500 800,300 Q 1000,100 1000,300"
              fill="none"
              stroke="url(#roadGradient)"
              strokeWidth="80"
              strokeLinecap="round"
              className="opacity-60"
            />
            
            {/* Road Center Line */}
            <path
              d="M 0,300 Q 200,100 400,300 Q 600,500 800,300 Q 1000,100 1000,300"
              fill="none"
              stroke="url(#centerLineGradient)"
              strokeWidth="4"
              strokeDasharray="20,15"
              strokeLinecap="round"
            />
            
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2D3748" />
                <stop offset="100%" stopColor="#4A5568" />
              </linearGradient>
              
              <linearGradient id="centerLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Event Markers along the curved road */}
          {timelineEvents.map((event, index) => {
            const totalEvents = timelineEvents.length;
            const t = index / (totalEvents - 1);
            const pathProgress = t * 0.8 + 0.1;
            
            // Helper function to calculate position on the curve
            const calculateCurvePosition = (index: number, total: number) => {
              const t = index / (total - 1);
              const x = 1000 * (t * 0.8 + 0.1);
              
              if (x <= 400) {
                const tSegment = x / 400;
                return 300 * (1-tSegment)*(1-tSegment) + 100 * 2 * (1-tSegment)*tSegment + 300 * tSegment*tSegment;
              } else if (x <= 800) {
                const tSegment = (x - 400) / 400;
                return 300 * (1-tSegment)*(1-tSegment) + 500 * 2 * (1-tSegment)*tSegment + 300 * tSegment*tSegment;
              } else {
                const tSegment = (x - 800) / 200;
                return 300 * (1-tSegment)*(1-tSegment) + 100 * 2 * (1-tSegment)*tSegment + 300 * tSegment*tSegment;
              }
            };
            
            // Calculate position along the curve
            const x = 1000 * pathProgress;
            const y = calculateCurvePosition(index, totalEvents);
            
            const StatusIcon = getStatusIcon(event.status);
            const EventIcon = event.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="absolute"
                style={{
                  left: `${x / 10}%`,
                  top: `${y / 6}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Event Marker */}
                <div className="relative">
                  <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center z-10 relative ${
                    event.status === 'completed'
                      ? 'bg-green-500 border-green-300 shadow-lg shadow-green-500/30'
                      : event.status === 'active'
                      ? 'bg-blue-500 border-blue-300 shadow-lg shadow-blue-500/30 animate-pulse'
                      : 'bg-gray-800 border-gray-600 shadow-lg shadow-purple-500/20'
                  }`}>
                    <EventIcon className={`w-6 h-6 ${
                      event.status === 'completed'
                        ? 'text-white'
                        : event.status === 'active'
                        ? 'text-white'
                        : 'text-gray-300'
                    }`} />
                  </div>
                  
                  {/* Connecting line to content */}
                  <div className={`absolute h-40 ${
                    index % 2 === 0 ? 'top-14' : 'bottom-14'
                  } left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b ${
                    index % 2 === 0 
                      ? 'from-blue-400 to-transparent' 
                      : 'from-purple-500 to-transparent'
                  }`}></div>
                  
                  {/* Content Card */}
                  <div className={`absolute ${
                    index % 2 === 0 ? 'top-56' : 'bottom-56'
                  } left-1/2 transform -translate-x-1/2 w-80 z-20`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-xl"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-blue-400 font-semibold">
                          {event.time}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-400 mb-3">{event.description}</p>
                      <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                      
                      <div className="space-y-2">
                        {event.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-sm text-gray-400">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;