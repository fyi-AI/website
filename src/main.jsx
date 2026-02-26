import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { getSiteContent } from './content.js'
import './index.css'

const siteContent = getSiteContent()

/* Update page title + meta from content */
document.title = siteContent.metaTitle
const metaDesc = document.querySelector('meta[name="description"]')
if (metaDesc) metaDesc.setAttribute('content', siteContent.metaDescription)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App content={siteContent} />
    </StrictMode>,
)
