import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="text-center py-3" style={{
      background: "rgba(255,255,255,0.18)",
      backdropFilter: "blur(10px)"
    }}>
      <small>© 2025 My Todo App</small>
    </footer>


  )
}

export default Footer
