// Brand Colors - Master Brand System
export const brandColors = {
  // Master Brand Colors (Used by ALL sub-brands - 60% usage)
  primary: [
    {
      name: 'Skypath Blue',
      hex: '#77BEF0',
      rgb: 'rgb(119, 190, 240)',
      cmyk: 'cmyk(50, 21, 0, 6)',
      usage: 'Master Brand primary, logos, CTAs, digital UI (all sub-brands)',
      emotion: 'Clarity, trust, openness, journey',
    },
    {
      name: 'Sunrise Gold',
      hex: '#FFCB61',
      rgb: 'rgb(255, 203, 97)',
      cmyk: 'cmyk(0, 19, 62, 0)',
      usage: 'Highlights, accents, success moments, warmth (all sub-brands)',
      emotion: 'Warmth, optimism, welcome, new beginnings',
    },
  ],
  // Sub-Brand Accent Colors (30% usage - unique per sub-brand)
  accent: [
    {
      name: 'Journey Coral',
      hex: '#FF894F',
      rgb: 'rgb(255, 137, 79)',
      cmyk: 'cmyk(0, 46, 69, 0)',
      usage: 'Waykeeper Explore accent, action buttons, adventure',
      emotion: 'Energy, action, momentum, invitation',
      subBrand: 'Explore',
    },
    {
      name: 'Heart Rose',
      hex: '#EA5B6F',
      rgb: 'rgb(234, 91, 111)',
      cmyk: 'cmyk(0, 61, 53, 8)',
      usage: 'Waykeeper Retreat & Wellness accent, emotional highlights',
      emotion: 'Connection, love, belonging, empathy',
      subBrand: 'Retreat, Wellness',
    },
    {
      name: 'Soft Stone',
      hex: '#D4C5B0',
      rgb: 'rgb(212, 197, 176)',
      cmyk: 'cmyk(0, 7, 17, 17)',
      usage: 'Waykeeper Stay accent, comfort, hospitality',
      emotion: 'Warm, grounded, natural, comfortable',
      subBrand: 'Stay',
    },
    {
      name: 'Forest Green',
      hex: '#4A7C59',
      rgb: 'rgb(74, 124, 89)',
      cmyk: 'cmyk(40, 0, 28, 51)',
      usage: 'Waykeeper Move accent, eco-friendly mobility',
      emotion: 'Growth, sustainability, reliability, freedom',
      subBrand: 'Move',
    },
    {
      name: 'Loop Purple',
      hex: '#8B7AB8',
      rgb: 'rgb(139, 122, 184)',
      cmyk: 'cmyk(24, 34, 0, 28)',
      usage: 'Waykeeper Circle accent, partnership, networking',
      emotion: 'Connection, collaboration, growth, community',
      subBrand: 'Circle',
    },
  ],
  // Neutral Colors (Used by ALL sub-brands)
  neutral: [
    {
      name: 'Deep Earth',
      hex: '#3A3A3A',
      rgb: 'rgb(58, 58, 58)',
      cmyk: 'cmyk(0, 0, 0, 77)',
      usage: 'Body text, dark backgrounds, professional contexts (all sub-brands)',
      emotion: 'Grounded, stable, strong, professional',
    },
    {
      name: 'Morning Light',
      hex: '#F5F3EE',
      rgb: 'rgb(245, 243, 238)',
      cmyk: 'cmyk(0, 1, 3, 4)',
      usage: 'Page backgrounds, card backgrounds, whitespace (all sub-brands)',
      emotion: 'Light, spacious, peaceful, welcoming',
    },
  ],
};

// Typography
export const typography = {
  headline: {
    name: 'Libre Baskerville',
    fallback: 'Georgia, serif',
    weights: ['400', '700'],
    usage: 'Headlines (H1, H2), subheadings (H3), pull quotes',
    googleFonts: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap',
  },
  body: {
    name: 'Inter',
    fallback: '-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    weights: ['300', '400', '500', '600', '700'],
    usage: 'Body text, UI elements, captions',
    googleFonts: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  },
};

// Brand Core - Master Brand System
export const brandCore = {
  purpose: 'To transform mindful travel into lasting inner change — combining cultural immersion, nature, and technology for verified transformation.',
  coreBelief: 'Real transformation doesn\'t end when the trip ends — it continues through reflection, community, and data-verified progress.',
  brandPromise: 'We stay with you after you return. Every journey becomes measurable, memorable, and meaningful through the Waykeeper ecosystem.',
};

// Brand Values - Master Brand System
export const brandValues = [
  {
    title: 'Integration Over Experience',
    summary: 'We don\'t sell beautiful experiences that fade. We sell lasting transformations supported by integration systems across all sub-brands.',
    icon: '🔄',
  },
  {
    title: 'Permission Without Judgment',
    summary: 'We give people permission to pause, to rest, to not be okay — all without judgment. We create psychological safety for transformation.',
    icon: '🤝',
  },
  {
    title: 'Depth With Comfort',
    summary: 'We reject the false choice between deep work and comfortable environment. Profound transformation can happen in beauty.',
    icon: '🌊',
  },
  {
    title: 'Chosen Connection',
    summary: 'Connection happens through choice, not force. You decide when to be alone, when to connect.',
    icon: '💫',
  },
  {
    title: 'Measurable Regeneration',
    summary: 'We prove our impact with transparent, trackable data. Every guest can see exactly what good their presence created.',
    icon: '🌱',
  },
  {
    title: 'Ecosystem Thinking',
    summary: 'We build interconnected experiences that work together. Retreat leads to Explore, Stay supports Wellness, Connect enables Circle.',
    icon: '🌐',
  },
  {
    title: 'Data-Verified Progress',
    summary: 'We combine cultural immersion, nature, and technology to create measurable transformation that lasts beyond the journey.',
    icon: '📊',
  },
];

// Brand Voice - Master Brand System
export const brandVoice = {
  summary: 'Warm wisdom that holds space for your becoming — we\'re the voice that says "I see you, I get it, and I\'m here for all of it."',
  characteristics: [
    { name: 'Empathetic Directness', description: 'We see your pain and name it without drama' },
    { name: 'Permission-Giving', description: 'We give you permission to be human' },
    { name: 'Anti-BS Honesty', description: 'We tell the truth, even when it\'s hard' },
    { name: 'Warm Wisdom', description: 'We\'re wise but not cold, warm but not soft' },
    { name: 'Ecosystem Awareness', description: 'We understand how all experiences connect' },
  ],
  doWords: [
    'It\'s okay to...',
    'You\'re allowed to...',
    'We believe...',
    'We\'re here for...',
    'The truth is...',
    'Every experience can be...',
    'Transformation happens...',
  ],
  avoidWords: [
    'You must...',
    'You should...',
    'Just think positive',
    'Everything happens for a reason',
    'Amazing transformation',
    'Life-changing experience',
  ],
  // Sub-Brand Voice Variations
  subBrandVoices: [
    {
      subBrand: 'Retreat',
      voice: 'Deep, supportive, transformational',
      example: 'Your 90-day journey starts here',
    },
    {
      subBrand: 'Explore',
      voice: 'Adventurous, curious, energetic',
      example: 'Discover hidden trails and local secrets',
    },
    {
      subBrand: 'Stay',
      voice: 'Comforting, welcoming, home-like',
      example: 'Find your home away from home',
    },
    {
      subBrand: 'Wellness',
      voice: 'Holistic, caring, renewal-focused',
      example: 'Reconnect with your body and mind',
    },
    {
      subBrand: 'Move',
      voice: 'Freedom-focused, practical, reliable',
      example: 'Move freely, transform continuously',
    },
    {
      subBrand: 'Connect',
      voice: 'Community-driven, progress-oriented',
      example: 'Join fellow travelers on their journey',
    },
    {
      subBrand: 'Circle',
      voice: 'Partnership-minded, growth-oriented',
      example: 'Grow together through shared experiences',
    },
  ],
};

// AI Prompt Library
export const promptLibrary = [
  {
    category: 'Brand Overview',
    title: 'Complete Brand Context',
    description: 'Full brand understanding for AI systems',
    prompt: `You are helping with content for Waykeeper, a master brand focused on "Transformation That Lasts — Anywhere in Life."

**Brand Core:**
- Purpose: To transform mindful travel into lasting inner change — combining cultural immersion, nature, and technology for verified transformation
- Core Belief: Real transformation doesn't end when the trip ends — it continues through reflection, community, and data-verified progress
- Brand Promise: "We stay with you after you return." Every journey becomes measurable, memorable, and meaningful through the Waykeeper ecosystem
- Philosophy: Integration methodology applied across all offerings (Arrival → Immersion → Integration → Continuity)

**Master Brand Architecture:**
- Waykeeper = Master Brand (philosophy & trust anchor)
- Sub-Brands = Specific product/service offerings
- Relationship: Sub-brands are endorsed by master brand
- Benefit: Each can have distinct personality while leveraging master brand trust

**Sub-Brands:**
1. Waykeeper Retreat — Deep transformation + 90-day integration (Heart Rose #EA5B6F)
2. Waykeeper Explore — Transformational travel experiences (Journey Coral #FF894F)
3. Waykeeper Stay — Certified accommodation network (Soft Stone #D4C5B0)
4. Waykeeper Wellness — Integrated wellness services (Heart Rose #EA5B6F)
5. Waykeeper Move — Mobility & car rental solutions (Forest Green #4A7C59)
6. Waykeeper Connect — Digital platform & community (Skypath Blue #77BEF0)
7. Waykeeper Circle — Referral & affiliate network (Loop Purple #8B7AB8)

**Master Brand Colors (60% usage):**
- Skypath Blue (#77BEF0) — Primary, logos, CTAs
- Sunrise Gold (#FFCB61) — Secondary, highlights, warmth
- Deep Earth (#3A3A3A) — Text, grounding
- Morning Light (#F5F3EE) — Backgrounds

**Voice:** Warm wisdom that holds space for your becoming. Empathetic directness with permission-giving honesty.

**Avoid:** Guru language, toxic positivity, corporate speak, woo-woo terms, hype.`,
  },
  {
    category: 'Content Writing',
    title: 'Blog Post / Article',
    description: 'Write content in Waykeeper voice',
    prompt: `Write [blog post/article/email] about [TOPIC] for Waykeeper.

Voice characteristics:
- Warm wisdom (Sage + Caregiver archetype)
- Empathetic directness — name the struggle without drama
- Permission-giving — "It's okay to..." language
- Anti-BS honesty — tell the truth, no hype
- Grounded, not floating or spiritual

Use words like: "We believe," "It's okay to," "The truth is," "You're not alone"
Avoid: "You must," "Just think positive," "Amazing transformation," toxic positivity

Tone: Conversational (not poetic), steady (not rushed), grounded (not high energy), supportive (not superior).`,
  },
  {
    category: 'Social Media',
    title: 'Instagram Caption',
    description: 'Social post in brand voice',
    prompt: `Create an Instagram caption for Waykeeper about [TOPIC/IMAGE DESCRIPTION].

Keep it:
- Authentic and grounded (not hype)
- Warm and supportive (not preachy)
- Honest about struggle (not toxic positivity)
- 2-3 sentences max
- Optional: Add subtle question for engagement

Voice: Like a wise friend who's been through it. No emojis unless they add real value.`,
  },
  {
    category: 'Marketing',
    title: 'Email Sequence',
    description: 'Email marketing campaign',
    prompt: `Create an email for Waykeeper [pre-booking/during experience/post-trip/alumni] phase.

Tone by phase:
- Pre-booking: Curious, helpful, non-pushy
- During: Present, supportive, wise
- Post-trip: Consistent, encouraging, accountable
- Alumni: Proud, connected, evolving

Subject line: [Your suggestion]
Preview text: [Your suggestion]
Body: Keep paragraphs short, conversational, warm.

Remember: We're writing to a person, not a customer. We serve them, not sell them.`,
  },
  {
    category: 'Sub-Brand Adaptation',
    title: 'Modulate Voice by Sub-Brand',
    description: 'Adapt tone for different contexts',
    prompt: `Write [content type] for [WAYKEEPER SUB-BRAND] about [TOPIC].

Voice modulation by sub-brand:
- **Retreat:** Deep, supportive, transformational — "Your 90-day journey starts here"
- **Explore:** Adventurous, curious, energetic — "Discover hidden trails and local secrets"
- **Stay:** Comforting, welcoming, home-like — "Find your home away from home"
- **Wellness:** Holistic, caring, renewal-focused — "Reconnect with your body and mind"
- **Move:** Freedom-focused, practical, reliable — "Move freely, transform continuously"
- **Connect:** Community-driven, progress-oriented — "Join fellow travelers on their journey"
- **Circle:** Partnership-minded, growth-oriented — "Grow together through shared experiences"

Core voice stays constant (warm, wise, honest, supportive). Only energy/pacing shifts.

Color usage:
- 60% Master Brand colors (Skypath Blue, Sunrise Gold, Deep Earth, Morning Light)
- 30% Sub-brand accent color
- 10% Secondary highlights`,
  },
  {
    category: 'Customer Support',
    title: 'Support Response',
    description: 'Customer service communication',
    prompt: `Respond to this customer inquiry for Waykeeper:

[PASTE CUSTOMER MESSAGE]

Tone: Helpful, patient, understanding. We're here to help, not to sell.

Guidelines:
- Acknowledge their concern
- Be clear and direct
- Offer concrete help
- No corporate speak
- Warm but professional`,
  },
  {
    category: 'HR & Hiring',
    title: 'Job Description / Ad',
    description: 'Write job postings in brand voice',
    prompt: `Write a job description for Waykeeper for the role of [ROLE TITLE].

Brand Voice for Hiring:
- Permission-giving: "We're looking for someone who..." not "You must have..."
- Honest about challenges: "This role will challenge you to..." 
- Human, not corporate: "You'll work with..." not "The successful candidate will..."
- Clear about values: Reference integration, transformation, honesty

Structure:
1. Opening (2-3 sentences about why this role exists at Waykeeper)
2. What you'll do (5-7 bullets, start with action verbs)
3. What we're looking for (skills + values alignment)
4. What we offer (honest, not just perks)
5. How to apply

Tone: Warm, honest, inviting — like talking to a colleague, not reading HR speak.`,
  },
  {
    category: 'HR & Hiring',
    title: 'Onboarding Welcome Message',
    description: 'Welcome new team members',
    prompt: `Write a welcome email for a new Waykeeper team member starting as [ROLE].

Voice: Warm, welcoming, honest — set the tone for our culture.

Include:
- Genuine welcome (not corporate-speak)
- What makes Waykeeper different as a workplace
- Permission to ask questions, to not know everything yet
- Practical next steps
- Who they'll meet first
- End with encouragement, not hype

Length: 2-3 short paragraphs max.

Remember: We give permission, we're honest about challenges, we're warm but not fake.`,
  },
  {
    category: 'Sales & BD',
    title: 'Cold Outreach Email',
    description: 'Reach out to potential partners/clients',
    prompt: `Write a cold outreach email for Waykeeper to [TARGET: retreat center / travel company / wellness brand].

Our goal: [Partnership / Certification / Collaboration]

Voice for Sales:
- Not pushy, genuinely curious
- Lead with value for THEM, not us
- Permission-giving language: "I'm reaching out because..." not "I wanted to..."
- Honest about what we're building
- Clear, specific ask

Structure:
- Subject line (curious, not sales-y)
- Opening: Why them specifically
- Middle: What we offer (briefly)
- Ask: Clear, low-pressure next step
- Sign-off: Warm, professional

Length: Under 150 words. Every sentence must earn its place.`,
  },
  {
    category: 'Sales & BD',
    title: 'Proposal / Pitch Deck',
    description: 'Create proposals for partnerships',
    prompt: `Create a proposal/pitch for Waykeeper to [COMPANY/ORGANIZATION] for [PURPOSE].

Structure:
1. The Problem (what's broken in the industry — be honest)
2. Why It Matters (real impact, not hype)
3. Our Solution (integration methodology, not just experience)
4. How It Works (practical, clear, no buzzwords)
5. Why Waykeeper (our differentiators, backed by evidence)
6. What We're Proposing (clear, specific)
7. Next Steps (simple, actionable)

Tone: Confident but not arrogant, clear but not dry, ambitious but not unrealistic.

Voice:
- Use "We believe..." not "We are the best..."
- Be honest about challenges
- Show don't tell (examples over claims)
- No hype words: "revolutionary," "game-changing," etc.`,
  },
  {
    category: 'Customer Support',
    title: 'Difficult Situation Response',
    description: 'Handle complaints or escalations',
    prompt: `Write a response to this customer complaint/difficult situation:

[PASTE SITUATION]

Waykeeper Support Voice:
- Acknowledge their frustration/pain immediately
- Take responsibility where appropriate
- Be honest about what went wrong
- Offer concrete solution, not just apology
- Show empathy without being defensive

Structure:
1. Acknowledgment: "I understand..." + validate their feelings
2. Clarity: What happened (honest, no excuses)
3. Action: What we're doing about it (specific)
4. Resolution: What happens next (timeline)
5. Human close: Personal accountability

Remember: We're honest even when it's hard. No corporate hiding. Take ownership.`,
  },
  {
    category: 'Internal Communication',
    title: 'Team Announcement',
    description: 'Internal updates and announcements',
    prompt: `Write an internal team announcement about [TOPIC/CHANGE].

Internal Voice (same brand voice, but more direct):
- Get to the point quickly
- Be honest about challenges or changes
- Give context (the "why")
- Clear next steps
- Permission to ask questions

Structure:
- What's happening (clear headline)
- Why it matters
- What changes for you
- Timeline
- Questions welcome

Tone: Direct, warm, trustworthy — like a colleague explaining something important, not HR sending a memo.`,
  },
];

// Template Library
export const templateLibrary = [
  {
    category: 'Presentation',
    title: 'Brand Pitch Deck',
    description: 'Master brand presentation template',
    downloadUrl: '/downloads/templates/waykeeper-pitch-deck.pptx',
    format: 'PowerPoint (.pptx)',
  },
  {
    category: 'Presentation',
    title: 'Sub-Brand Proposal',
    description: 'Template for new sub-brand launches',
    downloadUrl: '/downloads/templates/subbrand-proposal.pptx',
    format: 'PowerPoint (.pptx)',
  },
  {
    category: 'Email',
    title: 'Email Signature',
    description: 'Standard email signature with brand colors',
    downloadUrl: '/downloads/templates/email-signature.html',
    format: 'HTML',
  },
  {
    category: 'Document',
    title: 'Letterhead',
    description: 'Branded letterhead template',
    downloadUrl: '/downloads/templates/letterhead.docx',
    format: 'Word (.docx)',
  },
  {
    category: 'Social Media',
    title: 'Instagram Story Templates',
    description: 'Branded story templates',
    downloadUrl: '/downloads/templates/instagram-stories.zip',
    format: 'Figma / PNG',
  },
  {
    category: 'Social Media',
    title: 'Social Media Post Kit',
    description: 'Templates for all platforms',
    downloadUrl: '/downloads/templates/social-media-kit.zip',
    format: 'Figma / PNG',
  },
];

// Asset Downloads
export const assetDownloads = {
  logos: [
    {
      name: 'Master Brand Logo (Full Color)',
      files: [
        { format: 'SVG', url: '/downloads/logos/waykeeper-logo-color.svg' },
        { format: 'PNG', url: '/downloads/logos/waykeeper-logo-color.png' },
        { format: 'PDF', url: '/downloads/logos/waykeeper-logo-color.pdf' },
      ],
    },
    {
      name: 'Master Brand Logo (White)',
      files: [
        { format: 'SVG', url: '/downloads/logos/waykeeper-logo-white.svg' },
        { format: 'PNG', url: '/downloads/logos/waykeeper-logo-white.png' },
      ],
    },
    {
      name: 'Master Brand Logo (Black)',
      files: [
        { format: 'SVG', url: '/downloads/logos/waykeeper-logo-black.svg' },
        { format: 'PNG', url: '/downloads/logos/waykeeper-logo-black.png' },
      ],
    },
    {
      name: 'Complete Logo Package',
      files: [
        { format: 'ZIP', url: '/downloads/logos/waykeeper-logos-all.zip' },
      ],
    },
  ],
  fonts: [
    {
      name: 'Libre Baskerville (Headlines)',
      description: 'Free via Google Fonts',
      url: 'https://fonts.google.com/specimen/Libre+Baskerville',
    },
    {
      name: 'Inter (Body)',
      description: 'Free via Google Fonts',
      url: 'https://fonts.google.com/specimen/Inter',
    },
  ],
};

// External Links
export const externalLinks = {
  figma: 'https://www.figma.com/files/waykeeper-brand',
  canva: 'https://www.canva.com/brand/waykeeper',
  googleDrive: 'https://drive.google.com/drive/folders/waykeeper-assets',
};

// Embed Library — Ready-to-use code snippets
export const embedLibrary = [
  {
    title: 'Primary CTA Button',
    description: 'Brand-styled call-to-action button with hover effects',
    preview: 'button',
    formats: [
      {
        type: 'HTML/CSS' as const,
        code: `<!-- Waykeeper CTA Button -->
<button class="waykeeper-cta">
  Explore Waykeeper
</button>

<style>
  .waykeeper-cta {
    background: linear-gradient(135deg, #77BEF0 0%, #FF894F 100%);
    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    padding: 14px 32px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(119, 190, 240, 0.25);
  }
  
  .waykeeper-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(119, 190, 240, 0.4);
  }
  
  .waykeeper-cta:active {
    transform: translateY(0);
  }
</style>`,
      },
      {
        type: 'React' as const,
        code: `// Waykeeper CTA Button Component
export function WaykeeperCTA({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-br from-skypath-blue to-journey-coral 
                 text-white font-semibold px-8 py-3.5 rounded-lg 
                 hover:shadow-lg hover:-translate-y-0.5 
                 transition-all duration-300 
                 shadow-[0_4px_12px_rgba(119,190,240,0.25)]"
    >
      {children}
    </button>
  );
}

// Usage: <WaykeeperCTA onClick={handleClick}>Explore Waykeeper</WaykeeperCTA>`,
      },
      {
        type: 'CSS Module' as const,
        code: `/* waykeeper-button.module.css */
.ctaButton {
  background: linear-gradient(135deg, #77BEF0 0%, #FF894F 100%);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(119, 190, 240, 0.25);
}

.ctaButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(119, 190, 240, 0.4);
}

.ctaButton:active {
  transform: translateY(0);
}`,
      },
    ],
  },
  {
    title: 'Email Signup Form',
    description: 'Brand-consistent email capture form for landing pages',
    preview: 'form',
    formats: [
      {
        type: 'HTML/CSS' as const,
        code: `<!-- Waykeeper Email Signup -->
<form class="waykeeper-signup">
  <input 
    type="email" 
    placeholder="Your email address"
    class="waykeeper-input"
    required
  />
  <button type="submit" class="waykeeper-submit">
    Join Waitlist
  </button>
</form>

<style>
  .waykeeper-signup {
    display: flex;
    gap: 8px;
    max-width: 500px;
  }
  
  .waykeeper-input {
    flex: 1;
    padding: 14px 20px;
    border: 2px solid #D4C5B0;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    background: #F5F3EE;
    transition: border-color 0.3s ease;
  }
  
  .waykeeper-input:focus {
    outline: none;
    border-color: #77BEF0;
    background: white;
  }
  
  .waykeeper-submit {
    padding: 14px 28px;
    background: #77BEF0;
    color: white;
    border: none;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .waykeeper-submit:hover {
    background: #FF894F;
  }
</style>`,
      },
      {
        type: 'React' as const,
        code: `// Waykeeper Email Signup Component
import { useState } from 'react';

export function EmailSignup({ onSubmit }) {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-lg">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 px-5 py-3.5 bg-morning-light border-2 border-soft-stone 
                   rounded-lg focus:outline-none focus:border-skypath-blue 
                   focus:bg-white transition-all"
        required
      />
      <button
        type="submit"
        className="px-7 py-3.5 bg-skypath-blue text-white font-semibold 
                   rounded-lg hover:bg-journey-coral transition-colors"
      >
        Join Waitlist
      </button>
    </form>
  );
}`,
      },
    ],
  },
  {
    title: 'Brand Badge',
    description: 'Small brand badge for partner sites or integrations',
    preview: 'badge',
    formats: [
      {
        type: 'HTML/CSS' as const,
        code: `<!-- Waykeeper Brand Badge -->
<a href="#" class="waykeeper-badge">
  <span class="badge-icon">🧭</span>
  <span class="badge-text">Waykeeper Certified</span>
</a>

<style>
  .waykeeper-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: white;
    border: 1.5px solid #77BEF0;
    border-radius: 50px;
    color: #3A3A3A;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .waykeeper-badge:hover {
    background: #77BEF0;
    color: white;
    transform: scale(1.05);
  }
  
  .badge-icon {
    font-size: 16px;
  }
</style>`,
      },
      {
        type: 'Iframe' as const,
        code: `<!-- Embed as iframe -->
<iframe 
  src="https://brand.waykeeper.com/badge" 
  width="180" 
  height="40" 
  frameborder="0"
  style="border: none; overflow: hidden;"
></iframe>`,
      },
    ],
  },
  {
    title: 'Section Header',
    description: 'Branded section header with gradient underline',
    preview: 'heading',
    formats: [
      {
        type: 'HTML/CSS' as const,
        code: `<!-- Waykeeper Section Header -->
<h2 class="waykeeper-header">
  Transform. Integrate. Continue.
  <span class="header-underline"></span>
</h2>

<style>
  .waykeeper-header {
    font-family: 'Libre Baskerville', Georgia, serif;
    font-size: 36px;
    font-weight: 700;
    color: #3A3A3A;
    line-height: 1.2;
    margin-bottom: 24px;
    position: relative;
    display: inline-block;
  }
  
  .header-underline {
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #77BEF0 0%, #FF894F 100%);
    border-radius: 2px;
  }
</style>`,
      },
      {
        type: 'React' as const,
        code: `// Waykeeper Section Header
export function SectionHeader({ children }) {
  return (
    <h2 className="font-headline text-4xl font-bold text-deep-earth mb-6 
                   relative inline-block pb-3">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-1 
                       bg-gradient-to-r from-skypath-blue to-journey-coral 
                       rounded-full" />
    </h2>
  );
}`,
      },
    ],
  },
];

// Content Example Gallery — Real examples that work
export const contentExamples = [
  {
    type: 'social' as const,
    title: 'Integration Over Experience',
    description: 'Instagram post about Waykeeper\'s core philosophy',
    image: 'Instagram_Integration_Post.jpg',
    caption: `Transformation isn't an event. It's a process.

Most retreat centers focus on the experience—the beautiful location, the powerful workshop, the emotional breakthrough.

We focus on what happens after.

Because a profound experience that fades in 30 days isn't transformation. It's tourism.

Real transformation requires:
→ Arrival (prepare your context)
→ Immersion (the experience itself)
→ Integration (embed the changes)
→ Continuity (sustain the growth)

At Waykeeper, we're not here for the peak moment. We're here for the 90 days after—when the real work begins.

That's the difference. 🧭`,
    metrics: [
      { label: 'Engagement', value: '8.2%' },
      { label: 'Saves', value: '247' },
      { label: 'Shares', value: '89' },
    ],
    downloadUrl: '/downloads/examples/instagram-integration-post.zip',
  },
  {
    type: 'social' as const,
    title: 'Permission-Giving Post',
    description: 'Brand voice example: giving permission without judgment',
    image: 'Instagram_Permission_Post.jpg',
    caption: `It's okay to not be okay after a retreat.

You had a breakthrough. You felt connected. You saw clearly.

Now you're home, and it's... hard.

That's not failure. That's integration.

The messy middle is where transformation actually happens. Not on the yoga mat. Not in the meditation hall. In your Tuesday morning.

You're allowed to:
✓ Feel lost after feeling found
✓ Need support after the support ended
✓ Question if it was "real"

We built Waykeeper for this exact moment.

Because transformation doesn't fade here. We made sure of it. 🌊`,
    metrics: [
      { label: 'Engagement', value: '11.3%' },
      { label: 'Saves', value: '412' },
      { label: 'Comments', value: '67' },
    ],
    downloadUrl: '/downloads/examples/instagram-permission-post.zip',
  },
  {
    type: 'email' as const,
    title: 'Post-Retreat Day 7 Email',
    description: 'Integration support email (high open rate: 68%)',
    content: `Subject: Week 1 ✓ — How are you doing?

Hi [Name],

You've been home for 7 days.

The retreat feels both close and far away, doesn't it?

Here's what's normal right now:
→ Struggling to maintain practices
→ Feeling misunderstood by people who weren't there
→ Questioning if the insights were "real"

This isn't you failing. This is integration.

The truth is: the work you did at the retreat was Step 2. You're in Step 3 now—the hardest one.

That's exactly why we're here.

This week, we're focusing on ONE simple practice:
Morning pages (3 pages, stream of consciousness, no rules)

Why? Because you need to process. And processing is how transformation sticks.

Your prompt for tomorrow:
"What am I avoiding from the retreat?"

Write for 10 minutes. Don't edit. Just write.

Reply to this email with one word that describes your week. (We read every reply.)

You're not alone in this,
The Waykeeper Team

P.S. — Your next integration call is [DATE]. We'll be talking about re-entry challenges. Come with questions.`,
    metrics: [
      { label: 'Open Rate', value: '68%' },
      { label: 'Click Rate', value: '24%' },
      { label: 'Reply Rate', value: '12%' },
    ],
  },
  {
    type: 'email' as const,
    title: 'Welcome Email (New Subscriber)',
    description: 'First touchpoint email - sets brand tone',
    content: `Subject: You're in. Here's what's next.

Hi [Name],

Welcome to Waykeeper.

You signed up because something about "transformation that lasts" resonated with you.

Maybe you've done the retreat circuit—beautiful places, powerful moments, then... back to normal.

Maybe you're tired of inspiration without integration.

Maybe you're just curious what happens when someone actually builds the "after" part.

Whatever brought you here: we see you.

Here's what happens next:
→ Every Tuesday: Essays on integration, not inspiration
→ Monthly: Real stories from people in the messy middle
→ Quarterly: Early access to new Waykeeper offerings

We don't believe in hype. We don't believe in "just think positive."

We believe transformation is hard work that deserves real support.

And we built a company around that belief.

Glad you're here,
The Waykeeper Team

P.S. — Want to know if Waykeeper Retreat is right for you? Take this 3-minute assessment: [LINK]`,
    metrics: [
      { label: 'Open Rate', value: '72%' },
      { label: 'Click Rate', value: '31%' },
    ],
  },
  {
    type: 'presentation' as const,
    title: 'Brand Intro Slide',
    description: 'Opening slide template for pitches and presentations',
    content: `[Slide Design Description]

Background: Gradient from Morning Light (#F5F3EE) to white
Main Visual: Large compass icon in Skypath Blue, slightly transparent

Text Content:
--------------
WAYKEEPER
Transformation That Lasts — Anywhere in Life

[Tagline below in Inter, size 18px, Deep Earth color]
We exist because transformation shouldn't fade.

[Bottom right corner]
🧭 waykeeper.com

Design Notes:
- Use Libre Baskerville Bold for "WAYKEEPER" (60px)
- Use Inter Regular for tagline
- 40% opacity on compass visual
- Plenty of whitespace
- No clipart, no stock photos`,
    downloadUrl: '/downloads/examples/brand-intro-slide.key',
  },
  {
    type: 'presentation' as const,
    title: 'Value Proposition Slide',
    description: 'Core differentiator slide that works every time',
    content: `[Slide Layout: Split screen, 50/50]

LEFT SIDE (Light grey background #F5F3EE)
-----------------------------------------
Title: "Most Brands Stop Here"
Icon: 🏔️

Bullet points:
• Beautiful retreat center
• Powerful 7-day experience  
• Emotional breakthroughs
• "Life-changing" testimonials

[Bottom: "You go home. Changes fade."]

RIGHT SIDE (White background)
------------------------------
Title: "Waykeeper Starts Here"
Icon: 🧭

Bullet points:
• 90-day integration program
• Weekly accountability
• Real-world practice support
• Measurable transformation

[Bottom: "You go home. Changes stick."]

Color accents:
- Left side: Journey Coral (#FF894F) for icon
- Right side: Skypath Blue (#77BEF0) for icon
- Arrows pointing from left to right`,
    downloadUrl: '/downloads/examples/value-prop-slide.key',
  },
];

// Tagline Library — Quick brand intros
export const taglineLibrary = [
  {
    text: "Transformation That Lasts — Anywhere in Life",
    useCase: "Master Brand Tagline",
    context: "Main tagline for all communications",
  },
  {
    text: "We exist because transformation shouldn't fade",
    useCase: "Purpose Statement",
    context: "Opening statement for presentations and pitches",
  },
  {
    text: "We stay with you after you return",
    useCase: "Brand Promise",
    context: "Core promise statement",
  },
  {
    text: "Every journey becomes measurable, memorable, and meaningful",
    useCase: "Value Proposition",
    context: "Explaining our ecosystem value",
  },
  {
    text: "Integration over experience. Always.",
    useCase: "Value Differentiator",
    context: "Short positioning statement",
  },
  {
    text: "We're here for the 90 days after",
    useCase: "Service Differentiator",
    context: "Sales and marketing",
  },
  {
    text: "Data-verified progress that lasts",
    useCase: "Technology Differentiator",
    context: "Highlighting our tech-enabled approach",
  },
  {
    text: "Not an event. A process.",
    useCase: "Philosophy One-Liner",
    context: "Social media, ads",
  },
  {
    text: "Warm wisdom that holds space for your becoming",
    useCase: "Voice Description",
    context: "Internal use, brand training",
  },
  {
    text: "It's okay to not be okay after a retreat",
    useCase: "Permission-Giving Hook",
    context: "Content openings, social posts",
  },
  {
    text: "Cultural immersion + nature + technology = verified transformation",
    useCase: "Method Statement",
    context: "Explaining our approach",
  },
  {
    text: "Where transformation becomes integration",
    useCase: "Retreat Positioning",
    context: "Waykeeper Retreat sub-brand",
  },
  {
    text: "Travel that transforms. Integration that lasts.",
    useCase: "Explore Positioning",
    context: "Waykeeper Explore sub-brand",
  },
  {
    text: "Your home away from home",
    useCase: "Stay Positioning",
    context: "Waykeeper Stay sub-brand",
  },
  {
    text: "Heal and grow in every moment",
    useCase: "Wellness Positioning",
    context: "Waykeeper Wellness sub-brand",
  },
  {
    text: "Move freely, transform continuously",
    useCase: "Move Positioning",
    context: "Waykeeper Move sub-brand",
  },
  {
    text: "Join fellow travelers on their journey",
    useCase: "Connect Positioning",
    context: "Waykeeper Connect sub-brand",
  },
  {
    text: "Grow together through shared experiences",
    useCase: "Circle Positioning",
    context: "Waykeeper Circle sub-brand",
  },
];

// Brand Kits — Packaged resources by team/use case
export const brandKits = [
  {
    name: "Marketing Campaign Kit",
    description: "Everything for launching a campaign",
    forTeam: "Marketing, Social Media",
    includes: [
      "Master Brand colors (HEX, RGB, CMYK)",
      "Sub-brand accent colors",
      "7 AI prompts (Social, Email, Blog, Ads, Sub-brand)",
      "Caption templates",
      "Logo package",
      "Tone checker guide",
    ],
    quickLinks: ["#colors", "#prompts", "#examples", "#assets"],
  },
  {
    name: "Sales & BD Kit",
    description: "Close deals with brand-aligned materials",
    forTeam: "Sales, Business Development",
    includes: [
      "1-slide brand intro",
      "Email templates (cold outreach, follow-up)",
      "Proposal prompt",
      "Taglines for pitches",
      "Response guide",
      "Sub-brand positioning",
    ],
    quickLinks: ["#taglines", "#prompts", "#examples"],
  },
  {
    name: "Design & Product Kit",
    description: "Build products that feel like Waykeeper",
    forTeam: "Design, Product, UX",
    includes: [
      "Complete color system (Master + Sub-brand)",
      "Typography specs",
      "CSS/React components",
      "Figma link",
      "UX writing voice guide",
      "Sub-brand theme system",
    ],
    quickLinks: ["#colors", "#typography", "#embeds", "#assets"],
  },
  {
    name: "HR & People Kit",
    description: "Hire and onboard with brand voice",
    forTeam: "HR, People Team",
    includes: [
      "Job ad templates",
      "Onboarding presentation",
      "Brand culture summary",
      "Internal communication tone",
      "How to speak our brand cheatsheet",
      "Sub-brand voice variations",
    ],
    quickLinks: ["#prompts", "#voice", "#taglines"],
  },
  {
    name: "Customer Support Kit",
    description: "Support customers in brand voice",
    forTeam: "Support, Success",
    includes: [
      "Response templates",
      "Tone guide for support",
      "Common scenarios prompts",
      "Empathy phrases",
      "Escalation language",
      "Sub-brand context guide",
    ],
    quickLinks: ["#prompts", "#voice", "#examples"],
  },
  {
    name: "Brand Narrative Book",
    description: "Long-form brand story for partners and investors",
    forTeam: "Leadership, Sales, BD, Investors",
    includes: [
      "8-chapter narrative book (PDF)",
      "Executive summary presentation",
      "Key statistics and metrics",
      "Market opportunity analysis",
      "Competitive advantage overview",
      "Business model explanation",
    ],
    quickLinks: ["#narrative", "#stats", "#market", "#business"],
  },
  {
    name: "Sub-Brand Development Kit",
    description: "Launch and manage sub-brands",
    forTeam: "Product, Marketing, Brand",
    includes: [
      "Sub-brand voice variations",
      "Color usage guidelines",
      "Brand architecture rules",
      "Cross-brand journey mapping",
      "Sub-brand positioning prompts",
      "Master brand consistency guide",
    ],
    quickLinks: ["#voice", "#colors", "#prompts", "#taglines"],
  },
];

// Image Style Guide
export const imageStyleGuide = {
  principles: [
    {
      title: "Grounded, Not Floating",
      good: "Real people in real environments, natural lighting, honest expressions",
      avoid: "Over-edited, ethereal, overly spiritual vibes, fake smiles",
    },
    {
      title: "Warm, Not Clinical",
      good: "Earthy tones, soft natural light, comfortable settings, authentic moments",
      avoid: "Stark white, harsh lighting, sterile environments, corporate stock photos",
    },
    {
      title: "Human, Not Perfect",
      good: "Authentic moments, diversity, real emotions, imperfect beauty",
      avoid: "Overly polished, idealized bodies, staged perfection, models",
    },
    {
      title: "Spacious, Not Busy",
      good: "Breathing room, negative space, calm compositions, minimal clutter",
      avoid: "Cramped frames, too many elements, visual chaos, overwhelming patterns",
    },
  ],
  colorPalette: [
    "Earthy tones: browns, beiges, soft greens",
    "Warm accents: golden hour light, sunrise/sunset",
    "Skypath Blue and Journey Coral as highlights only",
    "Avoid: Bright neon, stark black/white, cold blues",
  ],
  subjects: [
    "✓ Nature: landscapes, trees, water, mountains",
    "✓ People: candid moments, genuine connection, diverse bodies",
    "✓ Spaces: comfortable interiors, outdoor retreats, cozy settings",
    "✓ Details: hands, textures, meaningful objects",
    "✗ Avoid: Generic office, overly spiritual imagery, cliché yoga poses",
  ],
};

// Brand Narrative Book - Master Brand System
export const brandNarrativeBook = {
  title: 'The Waykeeper Story: Transformation That Lasts',
  subtitle: 'A Master Brand Narrative for Partners & Investors',
  version: '1.0',
  lastUpdated: '2024-10-23',
  
  chapters: [
    {
      chapter: 1,
      title: 'The Genesis: Why Waykeeper Exists',
      content: `The world is full of beautiful experiences that fade. Retreats that end. Travel that becomes just another memory. Wellness programs that lose momentum. 

We founded Waykeeper because we believe transformation shouldn't end when the experience ends. We believe in transformation that lasts — anywhere in life.

Our master brand exists to solve a fundamental problem: the gap between experience and integration. We don't just provide retreats, travel, or wellness services. We provide a complete ecosystem that supports your transformation long after you return home.

This is the story of how we're building the world's first master brand for lasting transformation.`,
      keyPoints: [
        'The problem: Beautiful experiences that fade',
        'Our solution: Transformation that lasts',
        'Our method: Cultural immersion + nature + technology',
        'Our promise: We stay with you after you return'
      ]
    },
    {
      chapter: 2,
      title: 'The Master Brand Architecture',
      content: `Waykeeper isn't just a retreat company or a travel platform. We're a master brand ecosystem designed around one core philosophy: Integration over experience.

Our master brand serves as the trust anchor and philosophical foundation for seven distinct sub-brands:

• Waykeeper Retreat — Deep transformation + 90-day integration
• Waykeeper Explore — Transformational travel experiences  
• Waykeeper Stay — Certified accommodation network
• Waykeeper Wellness — Integrated wellness services
• Waykeeper Move — Mobility & car rental solutions
• Waykeeper Connect — Digital platform & community
• Waykeeper Circle — Referral & affiliate network

Each sub-brand has its own personality, color, and voice — but they all share the master brand's core promise: "We stay with you after you return."

This architecture allows us to serve every aspect of our customers' transformation journey while maintaining the trust and consistency of a master brand.`,
      keyPoints: [
        'Master brand as trust anchor',
        'Seven sub-brands with distinct personalities',
        'Shared core promise across all sub-brands',
        'Ecosystem thinking: interconnected experiences'
      ]
    },
    {
      chapter: 3,
      title: 'The Integration Methodology',
      content: `Our secret sauce isn't just what we do — it's how we do it. We've developed a proprietary integration methodology that applies across all our sub-brands:

**Arrival** — We meet you where you are, without judgment
**Immersion** — We create deep, meaningful experiences
**Integration** — We support your transformation with data and community
**Continuity** — We stay with you for 90 days after you return

This methodology combines three powerful elements:

1. **Cultural Immersion** — We connect you with local communities, traditions, and wisdom
2. **Nature Connection** — We use natural environments to facilitate transformation
3. **Technology Integration** — We use data and AI to track and support your progress

The result? Transformation that's not just felt, but measured. Progress that's not just hoped for, but verified.`,
      keyPoints: [
        'Four-phase integration methodology',
        'Cultural immersion + nature + technology',
        'Data-verified progress tracking',
        '90-day post-experience support'
      ]
    },
    {
      chapter: 4,
      title: 'The Technology Advantage',
      content: `We're not just a wellness company with an app. We're a technology company that happens to focus on human transformation.

Our platform combines:
• **AI-Powered Personalization** — Every experience is tailored to your needs
• **Data-Driven Integration** — We track your progress with measurable metrics
• **Community Connection** — We connect you with others on similar journeys
• **Expert Guidance** — We provide ongoing support from certified professionals

This technology advantage allows us to scale our impact while maintaining the personal touch that makes transformation possible. We can serve thousands of customers while making each one feel like our only customer.`,
      keyPoints: [
        'AI-powered personalization at scale',
        'Data-driven progress tracking',
        'Community connection technology',
        'Expert guidance through digital platforms'
      ]
    },
    {
      chapter: 5,
      title: 'The Market Opportunity',
      content: `The global wellness market is worth $4.4 trillion and growing at 5-10% annually. But here's the problem: most wellness companies focus on the experience, not the integration.

We're targeting the $1.5 trillion "integration gap" — the market for services that help people integrate their experiences into lasting change.

Our addressable market includes:
• **Retreat Participants** — 2.3 million people attend wellness retreats annually
• **Transformational Travelers** — 15 million people seek meaningful travel experiences
• **Wellness Seekers** — 200 million people actively pursue wellness and personal growth
• **Corporate Wellness** — $50 billion market for employee wellness programs

We're not just competing for market share — we're creating a new category: the integration economy.`,
      keyPoints: [
        '$1.5 trillion integration gap market',
        '2.3 million annual retreat participants',
        '15 million transformational travelers',
        '200 million active wellness seekers'
      ]
    },
    {
      chapter: 6,
      title: 'The Business Model',
      content: `Our business model is built around recurring revenue and ecosystem effects:

**Revenue Streams:**
• **Retreat Experiences** — High-margin, high-value experiences
• **Travel Services** — Commission-based travel booking and planning
• **Accommodation Network** — Revenue sharing with certified partners
• **Wellness Programs** — Subscription-based wellness and coaching services
• **Mobility Solutions** — Car rental and transportation services
• **Digital Platform** — Freemium community with premium features
• **Affiliate Network** — Commission-based referral system

**Key Metrics:**
• **Customer Lifetime Value (CLV)** — $2,400 average across all sub-brands
• **Customer Acquisition Cost (CAC)** — $180 through ecosystem referrals
• **Retention Rate** — 78% annual retention across all services
• **Net Promoter Score (NPS)** — 67, indicating strong customer satisfaction

Our ecosystem model means that customers who start with one sub-brand often expand to others, increasing their lifetime value and our revenue per customer.`,
      keyPoints: [
        'Seven revenue streams across sub-brands',
        '$2,400 average customer lifetime value',
        '78% annual retention rate',
        'Ecosystem effects drive cross-selling'
      ]
    },
    {
      chapter: 7,
      title: 'The Competitive Advantage',
      content: `We're not just another wellness company. We're the only master brand ecosystem focused on integration over experience.

**Our Competitive Moats:**

1. **Master Brand Trust** — One brand, multiple services, consistent quality
2. **Integration Methodology** — Proprietary system for lasting transformation
3. **Technology Platform** — AI-powered personalization and progress tracking
4. **Ecosystem Effects** — Sub-brands reinforce each other's value
5. **Data Advantage** — We understand our customers better than anyone else
6. **Community Network** — Strong referral and retention through social connections

**Competitive Landscape:**
• **Traditional Retreats** — Focus on experience, not integration
• **Travel Companies** — Focus on logistics, not transformation
• **Wellness Apps** — Focus on content, not community
• **Life Coaches** — Focus on individuals, not ecosystems

We're not competing in existing categories — we're creating a new one.`,
      keyPoints: [
        'Six competitive moats',
        'Master brand trust advantage',
        'Proprietary integration methodology',
        'Ecosystem effects and data advantage'
      ]
    },
    {
      chapter: 8,
      title: 'The Vision: Transformation That Lasts',
      content: `Our vision is simple: a world where transformation doesn't fade.

We imagine a future where:
• **Every experience leads to lasting change** — Not just beautiful memories, but measurable growth
• **Technology serves human flourishing** — AI and data used to support, not replace, human connection
• **Community enables individual growth** — People supporting each other's transformation journeys
• **Integration is the norm** — Every wellness company focuses on lasting change, not just experiences

We're not just building a company — we're building a movement. A movement toward transformation that lasts, anywhere in life.

This is the Waykeeper story. This is why we exist. This is why we matter.

And this is why we're asking you to join us.`,
      keyPoints: [
        'Vision: Transformation that doesn\'t fade',
        'Technology serves human flourishing',
        'Community enables individual growth',
        'Building a movement, not just a company'
      ]
    }
  ],
  
  keyStats: [
    { label: 'Market Size', value: '$1.5T', description: 'Integration gap market opportunity' },
    { label: 'Customer LTV', value: '$2,400', description: 'Average lifetime value across sub-brands' },
    { label: 'Retention Rate', value: '78%', description: 'Annual retention across all services' },
    { label: 'NPS Score', value: '67', description: 'Strong customer satisfaction' },
    { label: 'Sub-Brands', value: '7', description: 'Complete ecosystem coverage' },
    { label: 'Revenue Streams', value: '7', description: 'Diversified income sources' }
  ],
  
  downloadLink: '/downloads/waykeeper-narrative-book.pdf',
  presentationLink: '/downloads/waykeeper-narrative-slides.pdf'
};

