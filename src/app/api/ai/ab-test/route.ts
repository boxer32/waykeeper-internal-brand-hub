import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { versionA, versionB, context } = await req.json();

    if (!versionA || !versionB) {
      return NextResponse.json(
        { error: 'Both versions are required' },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a brand voice analyst for Waykeeper. Compare two message versions for brand alignment.

WAYKEEPER BRAND CRITERIA:
- Warm wisdom (not cold, not overly energetic)
- Empathetic directness (names struggle without drama)
- Permission-giving (not commanding)
- Anti-BS honesty (no hype, no toxic positivity)
- Grounded (not floating/spiritual)

EVALUATION DIMENSIONS:
1. Voice Characteristics (0-100)
2. Value Alignment (Integration Over Experience)
3. Emotional Accuracy (honest about struggles)
4. Trust Building (evidence over claims)
5. Audience Resonance

RETURN JSON:
{
  "versionA": {
    "overallScore": 85,
    "voiceScore": 90,
    "valueScore": 80,
    "emotionalScore": 85,
    "trustScore": 85,
    "strengths": ["strength 1", "strength 2"],
    "weaknesses": ["weakness 1"],
    "improvements": ["suggestion 1"]
  },
  "versionB": { same structure },
  "comparison": {
    "winner": "A" or "B",
    "margin": "significant" | "slight" | "negligible",
    "reasoning": "Detailed explanation",
    "keyDifferences": ["difference 1", "difference 2"],
    "recommendation": "Use A because..."
  },
  "improvedVersion": "Best version combining strengths of both"
}`;

    const userPrompt = `Compare these two versions for Waykeeper brand alignment:

**Version A:**
${versionA}

**Version B:**
${versionB}

${context ? `**Context:** ${context}` : ''}

Analyze which is more on-brand and why. Be specific.`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
      max_tokens: 2000,
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze versions', details: error.message },
      { status: 500 }
    );
  }
}

