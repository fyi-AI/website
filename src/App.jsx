import Navbar from './shared/Navbar.jsx'
import Footer from './shared/Footer.jsx'
import LandingPage from './pages/LandingPage.jsx'

function App({ content }) {
    return (
        <div className="app" style={{ '--accent': content.accentColor, '--accent-light': content.accentColorLight, '--accent-gradient': content.accentGradient }}>
            <Navbar content={content} />
            <LandingPage content={content} />
            <Footer content={content} />
        </div>
    )
}

export default App
