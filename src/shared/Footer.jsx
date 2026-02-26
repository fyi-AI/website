import './Footer.css'

function Footer({ content }) {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-glow" style={{ background: content.accentGradient }}></div>
            <div className="footer-inner container">
                <div className="footer-brand">
                    <span className="footer-logo">
                        <span className="footer-icon" style={{ background: content.accentGradient }}>{content.heroEmoji}</span>
                        {content.companyName}
                    </span>
                    <p className="footer-tagline">{content.tagline}</p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <a href="#services">Services</a>
                        <a href="#ai">AI Demo</a>
                        <a href="#testimonials">Reviews</a>
                        <a href="#cta">Contact</a>
                    </div>
                    <div className="footer-col">
                        <h4>Industries</h4>
                        <a href="https://fyiai.us">Main</a>
                        <a href="https://hvac.fyiai.us">HVAC</a>
                        <a href="https://dental.fyiai.us">Dental</a>
                        <a href="https://lawyer.fyiai.us">Legal</a>
                        <a href="https://auto.fyiai.us">Auto</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {year} {content.companyName}. All rights reserved.</p>
                    <p className="footer-powered">Powered by AI ✨</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
