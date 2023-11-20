// src/Footer.js
import './CSScomponents/Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>Powered by MoonCards © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
