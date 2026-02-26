/* ───────────────────────────────────────────
   Gemini AI Service
   ─────────────────────────────────────────── */

import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const systemPrompts = {
    main: 'You are an AI assistant for FYIAI, a company that builds AI-powered business solutions. Be helpful, concise, and professional. Focus on how AI can help businesses grow.',
    hvac: 'You are an AI assistant for FYIAI HVAC, specializing in AI solutions for heating, ventilation, and air conditioning companies. Help customers understand HVAC services and how AI can grow their business.',
    dental: 'You are an AI assistant for FYIAI Dental, specializing in AI solutions for dental practices. Help customers understand dental services and how AI can bring more patients.',
    lawyer: 'You are an AI assistant for FYIAI Legal, specializing in AI solutions for law firms. Help customers understand legal services and how AI can help sign more cases.',
    auto: 'You are an AI assistant for FYIAI Auto, specializing in AI solutions for auto repair shops. Help customers understand auto services and how AI can fill their bays.'
}

export async function askGemini(prompt, siteKey = 'main') {
    if (!API_KEY) {
        return 'API key not configured. Add VITE_GEMINI_API_KEY to your .env file to enable AI responses.'
    }

    try {
        const genAI = new GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

        const systemPrompt = systemPrompts[siteKey] || systemPrompts.main

        const result = await model.generateContent(`${systemPrompt}\n\nUser question: ${prompt}`)
        const response = result.response
        return response.text()
    } catch (error) {
        console.error('Gemini API Error:', error)
        throw error
    }
}
