/* ─────────────────────────────────────────────────
   FYIAI — Industry content for all sites
   Edit text here to update any landing page.
   ───────────────────────────────────────────────── */

export const content = {
    main: {
        siteKey: 'main',
        domain: 'fyiai.us',
        companyName: 'FYIAI',
        tagline: 'AI-Powered Business Solutions',
        heroHeadline: 'Transform Your Business with Intelligent AI',
        heroSubheadline: 'We build custom AI solutions that automate leads, boost conversions, and scale your business — across every industry.',
        accentGradient: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
        accentColor: '#7c3aed',
        accentColorLight: '#a78bfa',
        heroEmoji: '🚀',
        services: [
            { icon: '🤖', title: 'AI Chatbots', desc: 'Smart assistants that qualify leads 24/7 and book appointments automatically.' },
            { icon: '📊', title: 'Lead Generation', desc: 'AI-driven landing pages and funnels that convert visitors into paying clients.' },
            { icon: '📧', title: 'Email Automation', desc: 'Personalized drip campaigns powered by AI that nurture leads on autopilot.' },
            { icon: '🎯', title: 'SEO & Content', desc: 'AI-generated content strategies that rank your business on page one.' },
            { icon: '📱', title: 'Web & App Dev', desc: 'Beautiful, high-performance websites and apps built for speed and conversions.' },
            { icon: '🔗', title: 'API Integrations', desc: 'Connect your CRM, email, scheduling, and payment tools seamlessly.' }
        ],
        testimonials: [
            { name: 'Marcus T.', role: 'Business Owner', text: 'FYIAI tripled our inbound leads in 60 days. The AI chatbot alone pays for itself.', rating: 5 },
            { name: 'Sarah K.', role: 'Marketing Director', text: 'Finally, a team that understands both AI and real-world business needs.', rating: 5 },
            { name: 'David R.', role: 'Startup Founder', text: 'Their automation suite saved us 30+ hours per week. Absolutely game-changing.', rating: 5 }
        ],
        ctaHeadline: 'Ready to Scale with AI?',
        ctaSubheadline: 'Book a free strategy call and see how AI can transform your business.',
        ctaButton: 'Get Started Free',
        ctaLink: '#cta', // Internal anchor
        paymentLink: 'https://buy.stripe.com/your-main-link', // Placeholder Stripe link
        metaTitle: 'FYIAI — AI-Powered Business Solutions',
        metaDescription: 'Custom AI chatbots, lead generation, and automation for businesses. Transform your operations with FYIAI.'
    },

    hvac: {
        siteKey: 'hvac',
        domain: 'hvac.fyiai.us',
        companyName: 'FYIAI HVAC',
        tagline: 'AI Solutions for HVAC Companies',
        heroHeadline: 'Fill Your HVAC Schedule with AI-Powered Leads',
        heroSubheadline: 'Stop chasing cold leads. Our AI books qualified heating & cooling jobs for you — 24/7, on autopilot.',
        accentGradient: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
        accentColor: '#0ea5e9',
        accentColorLight: '#67e8f9',
        heroEmoji: '❄️',
        services: [
            { icon: '🤖', title: 'AI Booking Bot', desc: 'Customers describe their HVAC issue and your bot books the right tech instantly.' },
            { icon: '📞', title: '24/7 Lead Capture', desc: 'Never miss a service call — AI answers inquiries nights, weekends, and holidays.' },
            { icon: '📍', title: 'Local SEO Domination', desc: 'Rank #1 for "HVAC near me" in your service area with AI-optimized content.' },
            { icon: '📊', title: 'Review Automation', desc: 'Automatically request and manage Google reviews after every completed job.' },
            { icon: '📧', title: 'Seasonal Campaigns', desc: 'AI sends tune-up reminders before summer & winter — keeping your schedule full.' },
            { icon: '💰', title: 'Estimate Calculator', desc: 'Interactive AI tool that gives instant ballpark quotes to pre-qualify leads.' }
        ],
        testimonials: [
            { name: 'Mike D.', role: 'HVAC Company Owner', text: 'We went from 3 calls/day to 15. The AI booking system is a game changer for our shop.', rating: 5 },
            { name: 'Linda S.', role: 'Office Manager', text: 'The seasonal email campaigns fill our schedule before the rush even hits.', rating: 5 },
            { name: 'Carlos M.', role: 'HVAC Technician', text: 'I started my own HVAC biz and FYIAI got me booked solid in 2 months.', rating: 5 }
        ],
        ctaHeadline: 'Ready to Book More HVAC Jobs?',
        ctaSubheadline: 'See how AI fills your schedule — free demo, no pressure.',
        ctaButton: 'Get My Free Demo',
        ctaLink: '#cta',
        paymentLink: 'https://buy.stripe.com/your-hvac-link',
        metaTitle: 'FYIAI HVAC — AI Lead Generation for Heating & Cooling Companies',
        metaDescription: 'AI-powered lead generation, booking bots, and marketing automation built specifically for HVAC companies.'
    },

    dental: {
        siteKey: 'dental',
        domain: 'dental.fyiai.us',
        companyName: 'FYIAI Dental',
        tagline: 'AI Solutions for Dental Practices',
        heroHeadline: 'Grow Your Dental Practice with AI That Books Patients',
        heroSubheadline: 'From first click to confirmed appointment — our AI handles patient acquisition so you can focus on smiles.',
        accentGradient: 'linear-gradient(135deg, #14b8a6, #34d399)',
        accentColor: '#14b8a6',
        accentColorLight: '#5eead4',
        heroEmoji: '🦷',
        services: [
            { icon: '🤖', title: 'Patient Booking Bot', desc: 'AI chatbot answers dental questions and books cleanings, exams, and consults 24/7.' },
            { icon: '📱', title: 'SMS Reminders', desc: 'Reduce no-shows by 60% with AI-powered appointment reminders and confirmations.' },
            { icon: '⭐', title: 'Review Builder', desc: 'Automatically collect 5-star Google reviews from happy patients after visits.' },
            { icon: '📍', title: 'Local SEO', desc: 'Dominate "dentist near me" searches with AI-optimized Google Business profiles.' },
            { icon: '📧', title: 'Patient Reactivation', desc: 'AI identifies and re-engages patients who haven\'t visited in 6+ months.' },
            { icon: '💎', title: 'Cosmetic Leads', desc: 'Targeted AI campaigns for high-value services like veneers, implants, and Invisalign.' }
        ],
        testimonials: [
            { name: 'Dr. Amanda L.', role: 'Dental Practice Owner', text: 'New patient bookings jumped 40% in the first month. The AI bot handles everything.', rating: 5 },
            { name: 'Dr. James P.', role: 'Orthodontist', text: 'The reactivation campaigns alone brought back 200+ patients we thought we lost.', rating: 5 },
            { name: 'Rachel W.', role: 'Practice Manager', text: 'Our front desk used to drown in calls. Now AI handles 80% of scheduling.', rating: 5 }
        ],
        ctaHeadline: 'Ready to Fill Your Dental Chairs?',
        ctaSubheadline: 'Book a free demo and see AI patient acquisition in action.',
        ctaButton: 'Book My Free Demo',
        ctaLink: '#cta',
        paymentLink: 'https://buy.stripe.com/your-dental-link',
        metaTitle: 'FYIAI Dental — AI Patient Acquisition for Dental Practices',
        metaDescription: 'AI chatbots, patient booking, and marketing automation designed specifically for dental practices.'
    },

    lawyer: {
        siteKey: 'lawyer',
        domain: 'lawyer.fyiai.us',
        companyName: 'FYIAI Legal',
        tagline: 'AI Solutions for Law Firms',
        heroHeadline: 'Sign More Cases with AI-Powered Client Intake',
        heroSubheadline: 'Your AI assistant qualifies leads, books consultations, and follows up — so you focus on winning cases.',
        accentGradient: 'linear-gradient(135deg, #1e3a5f, #d4a017)',
        accentColor: '#1e3a5f',
        accentColorLight: '#d4a017',
        heroEmoji: '⚖️',
        services: [
            { icon: '🤖', title: 'Client Intake Bot', desc: 'AI screens potential clients, collects case details, and books qualified consultations.' },
            { icon: '📞', title: '24/7 Lead Response', desc: 'Respond to injury, family, or criminal inquiries instantly — even at 2 AM.' },
            { icon: '📊', title: 'Case Tracking CRM', desc: 'Automated pipeline that tracks every lead from first contact to signed retainer.' },
            { icon: '📍', title: 'Legal SEO', desc: 'Rank for high-intent searches like "personal injury lawyer near me" with AI content.' },
            { icon: '📧', title: 'Nurture Sequences', desc: 'Automated follow-up emails that convert undecided leads into signed clients.' },
            { icon: '⭐', title: 'Reputation Management', desc: 'Build trust with AI-managed reviews and professional online presence.' }
        ],
        testimonials: [
            { name: 'Attorney Brian H.', role: 'Personal Injury Firm', text: 'The intake bot qualified 50 leads last month. We signed 12 new cases with zero extra staff.', rating: 5 },
            { name: 'Maria G.', role: 'Family Law Attorney', text: 'Clients love that they can start their case at midnight. Our AI never sleeps.', rating: 5 },
            { name: 'Steven C.', role: 'Criminal Defense', text: 'FYIAI helped us rank #1 in our city. The phone hasn\'t stopped ringing since.', rating: 5 }
        ],
        ctaHeadline: 'Ready to Sign More Cases?',
        ctaSubheadline: 'See how AI intake can transform your law firm — free strategy session.',
        ctaButton: 'Get My Free Strategy Session',
        ctaLink: '#cta',
        paymentLink: 'https://buy.stripe.com/your-lawyer-link',
        metaTitle: 'FYIAI Legal — AI Client Intake & Lead Generation for Law Firms',
        metaDescription: 'AI-powered client intake, lead qualification, and marketing automation built for law firms.'
    },

    auto: {
        siteKey: 'auto',
        domain: 'auto.fyiai.us',
        companyName: 'FYIAI Auto',
        tagline: 'AI Solutions for Auto Shops',
        heroHeadline: 'Drive More Customers to Your Auto Shop with AI',
        heroSubheadline: 'AI handles your bookings, follow-ups, and marketing — so your bays stay full and your revenue climbs.',
        accentGradient: 'linear-gradient(135deg, #ef4444, #f97316)',
        accentColor: '#ef4444',
        accentColorLight: '#fca5a5',
        heroEmoji: '🚗',
        services: [
            { icon: '🤖', title: 'Service Booking Bot', desc: 'Customers describe their car issue and AI books the right service slot instantly.' },
            { icon: '🔔', title: 'Maintenance Reminders', desc: 'AI sends oil change, tire rotation, and inspection reminders based on mileage.' },
            { icon: '📍', title: 'Local SEO', desc: 'Own the "auto repair near me" search results in your area with AI optimization.' },
            { icon: '💰', title: 'Quick Quote Tool', desc: 'Interactive estimator gives customers instant ballpark pricing to pre-qualify leads.' },
            { icon: '⭐', title: 'Review Generator', desc: 'Automatically request Google reviews after every service — build 5-star reputation.' },
            { icon: '📧', title: 'Customer Retention', desc: 'AI re-engages past customers with personalized service specials and seasonal offers.' }
        ],
        testimonials: [
            { name: 'Tony R.', role: 'Auto Shop Owner', text: 'Revenue up 35% since FYIAI started running our leads. Every bay is booked solid.', rating: 5 },
            { name: 'Jessica M.', role: 'Service Manager', text: 'The maintenance reminders bring customers back like clockwork. It\'s brilliant.', rating: 5 },
            { name: 'Dave K.', role: 'Mechanic & Owner', text: 'I used to rely on word of mouth. Now AI brings me 10 new customers a week.', rating: 5 }
        ],
        ctaHeadline: 'Ready to Fill Every Bay?',
        ctaSubheadline: 'See how AI keeps your auto shop booked — free demo, no commitment.',
        ctaButton: 'Get My Free Demo',
        ctaLink: '#cta',
        paymentLink: 'https://buy.stripe.com/your-auto-link',
        metaTitle: 'FYIAI Auto — AI Lead Generation for Auto Repair Shops',
        metaDescription: 'AI-powered booking, customer retention, and marketing automation built for auto repair shops.'
    }
}

export function getSiteContent() {
    const siteKey = import.meta.env.VITE_SITE || 'main'
    return content[siteKey] || content.main
}
