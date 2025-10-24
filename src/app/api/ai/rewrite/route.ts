import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { text, targetTone, instruction } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a brand voice editor for Waykeeper. Rewrite content to match our brand voice.

WAYKEEPER BRAND VOICE:
- Warm wisdom that holds space for becoming
- Empathetic directness — name the struggle without drama
- Permission-giving — "It's okay to..." language
- Anti-BS honesty — tell the truth, no hype
- Grounded, not floating or spiritual

TRANSFORMATION RULES:
"You must" → "It's okay to" or "We invite you to"
"You should" → "You're allowed to" or "Consider"
Hype → Honest truth
Corporate speak → Human conversation
Guru language → Supportive guidance

Return ONLY the rewritten text, no explanations.`;

    const userPrompt = instruction 
      ? `Rewrite this text in Waykeeper voice with this specific instruction: ${instruction}\n\nOriginal text:\n${text}`
      : `Rewrite this text in Waykeeper brand voice${targetTone ? ` (tone: ${targetTone})` : ''}:\n\n${text}`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.6,
      max_tokens: 800,
    });

    const rewrittenContent = completion.choices[0].message.content;

    return NextResponse.json({
      original: text,
      rewritten: rewrittenContent,
      tokens: completion.usage?.total_tokens || 0,
    });
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to rewrite content', details: error.message },
      { status: 500 }
    );
  }
}

