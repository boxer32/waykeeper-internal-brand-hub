import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a brand voice analyzer for Waykeeper. Analyze text for brand voice alignment.

WAYKEEPER BRAND VOICE:
- Warm wisdom that holds space for becoming
- Empathetic directness — name the struggle without drama
- Permission-giving — "It's okay to..." language
- Anti-BS honesty — tell the truth, no hype
- Grounded, not floating or spiritual

WORDS TO USE:
"It's okay to...", "You're allowed to...", "We believe...", "We're here for...", "The truth is...", "You're not alone"

WORDS TO AVOID:
"You must...", "You should...", "Just think positive", "Everything happens for a reason", "Amazing transformation", "Manifest", "Sacred", "Blessed", "Guru", toxic positivity

ANALYZE AND RETURN JSON:
{
  "score": 0-100,
  "alignment": "excellent" | "good" | "needs-work" | "off-brand",
  "strengths": ["list of good elements"],
  "concerns": ["list of issues"],
  "suggestions": ["specific improvements"],
  "rewriteSuggestion": "optional rewrite in brand voice"
}`,
        },
        {
          role: 'user',
          content: `Analyze this text for Waykeeper brand voice alignment:\n\n${text}`,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze tone', details: error.message },
      { status: 500 }
    );
  }
}

