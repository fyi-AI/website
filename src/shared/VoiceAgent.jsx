import { useState, useEffect } from 'react'
import Vapi from '@vapi-ai/web'

const vapi = new Vapi('76223d4e-618a-402f-a1fa-6a6c4d0fb163')

export default function VoiceAgent({ color }) {
    const [isCalling, setIsCalling] = useState(false)
    const [isConnecting, setIsConnecting] = useState(false)

    useEffect(() => {
        vapi.on('call-start', () => {
            setIsCalling(true)
            setIsConnecting(false)
        })
        vapi.on('call-end', () => {
            setIsCalling(false)
            setIsConnecting(false)
        })
        vapi.on('error', (error) => {
            console.error('Vapi error:', error)
            setIsConnecting(false)
            setIsCalling(false)
        })

        return () => {
            vapi.stop()
        }
    }, [])

    const toggleCall = () => {
        if (isCalling) {
            vapi.stop()
        } else {
            setIsConnecting(true)
            vapi.start('a6663562-102f-48e0-8e4b-0ec14bf873be')
        }
    }

    return (
        <button
            onClick={toggleCall}
            className={`voice-agent-btn ${isCalling ? 'active' : ''}`}
            style={{
                '--accent': color,
                background: isCalling ? '#ef4444' : 'rgba(255, 255, 255, 0.1)',
                border: `2px solid ${isCalling ? '#ef4444' : color}`,
                color: isCalling ? 'white' : 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontWeight: '700',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
            }}
        >
            <div className={`mic-icon ${isCalling ? 'pulsing' : ''}`}>
                {isCalling ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                )}
            </div>
            <span>{isConnecting ? 'Connecting...' : isCalling ? 'End Call' : 'Talk to AI Demo'}</span>

            {isCalling && (
                <div className="audio-bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            )}

            <style>{`
                .voice-agent-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px -5px var(--accent);
                    background: var(--accent) !important;
                }
                .pulsing {
                    animation: pulse 1.5s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.2); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .audio-bars {
                    display: flex;
                    gap: 2px;
                    align-items: flex-end;
                    height: 12px;
                }
                .audio-bars .bar {
                    width: 3px;
                    background: white;
                    border-radius: 1px;
                    animation: bar-pulse 0.5s infinite alternate;
                }
                .audio-bars .bar:nth-child(2) { animation-delay: 0.1s; }
                .audio-bars .bar:nth-child(3) { animation-delay: 0.2s; }
                @keyframes bar-pulse {
                    from { height: 4px; }
                    to { height: 12px; }
                }
            `}</style>
        </button>
    )
}
