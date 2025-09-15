const BrandBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Main gradient background - same as splash screen */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-black via-dark-surface to-space-black" />
      
      {/* Subtle circuit board pattern - same as splash screen */}
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

      {/* Edge glow effects - same as splash screen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyber-green to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent opacity-50" />
      </div>
    </div>
  )
}

export default BrandBackground
