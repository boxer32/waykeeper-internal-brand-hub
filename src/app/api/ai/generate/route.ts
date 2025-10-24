import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const BRAND_CONTEXT = `You are a content writer for Waykeeper, a master brand focused on "Transformation That Lasts — Anywhere in Life."

BRAND CORE:
- Purpose: We exist because transformation shouldn't fade — anywhere in life
- Promise: Whether you retreat, explore, rest, heal, or practice — the transformation lasts, because we're there for what happens after
- Philosophy: Integration methodology (Arrival → Immersion → Integration → Continuity)

BRAND VOICE:
- Warm wisdom that holds space for your becoming
- Empathetic directness — name the struggle without drama
- Permission-giving — "It's okay to..." language
- Anti-BS honesty — tell the truth, no hype
- Grounded, not floating or spiritual

USE: "It's okay to...", "You're allowed to...", "We believe...", "We're here for...", "The truth is..."
AVOID: "You must...", "You should...", toxic positivity, hype, guru language, woo-woo terms`;

export async function POST(req: NextRequest) {
  try {
    const { contentType, topic, audience, tone, subBrand, additionalContext } = await req.json();

    if (!contentType || !topic) {
      return NextResponse.json(
        { error: 'Content type and topic are required' },
        { status: 400 }
      );
    }

    let systemPrompt = BRAND_CONTEXT;
    
    // Add sub-brand modulation
    if (subBrand && subBrand !== 'master') {
      const subBrandTones: Record<string, string> = {
        retreat: 'Deep, spacious, reflective',
        explore: 'Energized, curious, adventurous',
        stay: 'Restful, nurturing, comfortable',
        wellness: 'Caring, holistic, renewing',
        connect: 'Clear, encouraging, efficient',
      };
      
      systemPrompt += `\n\nSUB-BRAND VOICE MODULATION: ${subBrand} — ${subBrandTones[subBrand] || 'Standard'}`;
    }

    const userPrompt = `Create a ${contentType} about: ${topic}

${audience ? `Target Audience: ${audience}` : ''}
${tone ? `Specific Tone: ${tone}` : ''}
${additionalContext ? `Additional Context: ${additionalContext}` : ''}

Requirements:
- Must sound like Waykeeper (warm, wise, honest, permission-giving)
- Use our voice characteristics
- Avoid hype and toxic positivity
- Be authentic and grounded`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const generatedContent = completion.choices[0].message.content;

    return NextResponse.json({
      content: generatedContent,
      model: completion.model,
      tokens: completion.usage?.total_tokens || 0,
    });
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content', details: error.message },
      { status: 500 }
    );
  }
}

