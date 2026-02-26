import { useState } from 'react'
import './Navbar.css'

function Navbar({ content }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-inner container">
                <a href="#" className="navbar-logo">
                    <span className="logo-icon" style={{ background: content.accentGradient }}>{content.heroEmoji}</span>
                    <span className="logo-text">{content.companyName}</span>
                </a>

                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                    <a href="#ai" onClick={() => setMenuOpen(false)}>AI Demo</a>
                    <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
                    <a href="#cta" className="nav-cta" style={{ background: content.accentGradient }} onClick={() => setMenuOpen(false)}>
                        Get Started
                    </a>
                </div>

                <button
                    className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
