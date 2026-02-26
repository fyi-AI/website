import { useState } from 'react'
import Button from '../shared/Button.jsx'
import { askGemini } from '../services/gemini.js'
import './LandingPage.css'

function LandingPage({ content }) {
    const [aiPrompt, setAiPrompt] = useState('')
    const [aiResponse, setAiResponse] = useState('')
    const [aiLoading, setAiLoading] = useState(false)

    const handleAiDemo = async () => {
        if (!aiPrompt.trim()) return
        setAiLoading(true)
        setAiResponse('')
        try {
            const response = await askGemini(aiPrompt, content.siteKey)
            setAiResponse(response)
        } catch (err) {
            setAiResponse('⚠️ AI is unavailable right now. Please try again later.')
        }
        setAiLoading(false)
    }

    return (
        <main className="landing">

            {/* ═══ HERO ═══ */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-orb hero-orb-1" style={{ background: content.accentGradient }}></div>
                    <div className="hero-orb hero-orb-2" style={{ background: content.accentGradient }}></div>
                    <div className="hero-grid"></div>
                </div>
                <div className="hero-content container">
                    <div className="hero-badge animate-in">
                        <span className="badge-dot" style={{ background: content.accentColor }}></span>
                        {content.tagline}
                    </div>
                    <h1 className="hero-headline animate-in">
                        {content.heroHeadline}
                    </h1>
                    <p className="hero-sub animate-in">
                        {content.heroSubheadline}
                    </p>
                    <div className="hero-actions animate-in">
                        <Button variant="primary" size="lg" href="#cta" style={{ background: content.accentGradient }}>
                            {content.ctaButton} →
                        </Button>
                        <Button variant="secondary" size="lg" href="#services">
                            View Services
                        </Button>
                    </div>
                    <div className="hero-stats animate-in">
                        <div className="stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Clients Served</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">10x</span>
                            <span className="stat-label">Avg ROI</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">AI Automation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SERVICES ═══ */}
            <section className="services" id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag" style={{ color: content.accentColor }}>What We Do</span>
                        <h2>Everything You Need to <span style={{ color: content.accentColor }}>Grow</span></h2>
                        <p>AI-powered tools and strategies designed for your industry.</p>
                    </div>
                    <div className="services-grid">
                        {content.services.map((service, i) => (
                            <div className="service-card animate-in" key={i}>
                                <div className="service-icon" style={{ background: `${content.accentColor}15` }}>
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="service-glow" style={{ background: content.accentGradient }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ AI DEMO ═══ */}
            <section className="ai-section" id="ai">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag" style={{ color: content.accentColor }}>Live AI Demo</span>
                        <h2>See <span style={{ color: content.accentColor }}>AI</span> in Action</h2>
                        <p>Ask our AI anything about {content.companyName} services — powered by Google Gemini.</p>
                    </div>
                    <div className="ai-demo-card">
                        <div className="ai-demo-header">
                            <div className="ai-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="ai-label">✨ Gemini AI</span>
                        </div>
                        <div className="ai-demo-body">
                            <textarea
                                className="ai-input"
                                placeholder={`Try: "What services do you offer for ${content.siteKey === 'main' ? 'businesses' : content.siteKey + ' companies'}?"`}
                                value={aiPrompt}
                                onChange={(e) => setAiPrompt(e.target.value)}
                                rows={3}
                            />
                            <Button
                                variant="primary"
                                size="md"
                                style={{ background: content.accentGradient }}
                                onClick={handleAiDemo}
                            >
                                {aiLoading ? '⏳ Thinking...' : '✨ Ask AI'}
                            </Button>
                            {aiResponse && (
                                <div className="ai-response">
                                    <div className="ai-response-label">AI Response</div>
                                    <p>{aiResponse}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ TESTIMONIALS ═══ */}
            <section className="testimonials" id="testimonials">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag" style={{ color: content.accentColor }}>Testimonials</span>
                        <h2>Loved by <span style={{ color: content.accentColor }}>Real Clients</span></h2>
                    </div>
                    <div className="testimonials-grid">
                        {content.testimonials.map((t, i) => (
                            <div className="testimonial-card animate-in" key={i}>
                                <div className="testimonial-stars">
                                    {'★'.repeat(t.rating)}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar" style={{ background: content.accentGradient }}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="cta-section" id="cta">
                <div className="cta-bg" style={{ background: content.accentGradient }}></div>
                <div className="container cta-content">
                    <h2 className="animate-in">{content.ctaHeadline}</h2>
                    <p className="animate-in">{content.ctaSubheadline}</p>
                    <Button variant="primary" size="xl" style={{ background: 'white', color: content.accentColor }}>
                        {content.ctaButton} →
                    </Button>
                </div>
            </section>
        </main>
    )
}

export default LandingPage
