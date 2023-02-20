import React from 'react'
import logo from './logo.png'
import './header.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggleClick = () => {
    setIsOpen(!isOpen)
  }

  const navStyle = {
    width: '100%',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#edf2f7',
    padding: '1rem',
    transition: 'background-color 0.3s ease',
  }

  const logoStyle = {
    height: '4rem',
  }

  const toggleStyle = {
    display: 'none',
  }

  React.useEffect(() => {
    const handleResize = () => {
      setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (window.innerWidth <= 768) {
    navStyle.flexDirection = 'column'
    navStyle.textAlign = 'center'
    toggleStyle.display = 'block'
    toggleStyle.marginRight = '1rem'
    toggleStyle.cursor = 'pointer'

    if (isOpen) {
      navStyle.height = 'auto'
      navStyle.overflow = 'visible'
    } else {
      navStyle.height = '4rem'
      navStyle.overflow = 'hidden'
    }
  }

  return (
    <nav style={navStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />

      <div>
        <a href="/about" className="linktag">
          About
        </a>
        <a href="/contact" className="linktag">
          ContactUs
        </a>
      </div>

      <div style={toggleStyle} onClick={handleToggleClick}>
        {isOpen ? 'Close' : 'Menu'}
      </div>
    </nav>
  )
}

export default Navbar
