import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { idea, type } = await req.json();

    if (!idea) {
      return NextResponse.json(
        { error: 'Idea description is required' },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a brand guardian for Waykeeper. Analyze ideas for brand alignment with detailed scoring.

WAYKEEPER CORE VALUES (must align):
1. Integration Over Experience — lasting transformation, not just moments
2. Permission Without Judgment — psychological safety
3. Depth With Comfort — profound work in beautiful environment
4. Chosen Connection — autonomy in relationships
5. Measurable Regeneration — transparent impact

BRAND VOICE (must match):
- Warm wisdom that holds space
- Empathetic directness
- Permission-giving ("It's okay to...")
- Anti-BS honesty
- Grounded, not spiritual

RED LINES (never cross):
- No toxic positivity
- No guru/superior language
- No hype or exaggeration
- No pressure ("must/should")
- No woo-woo clichés

RETURN DETAILED JSON:
{
  "overallScore": 0-100,
  "verdict": "green-light" | "yellow-proceed-with-changes" | "red-stop",
  "scores": {
    "valueAlignment": 85,
    "voiceMatch": 90,
    "emotionalTruth": 80,
    "differentiation": 75,
    "feasibility": 70
  },
  "analysis": {
    "whatWorks": ["element 1", "element 2"],
    "whatsConcerning": ["concern 1"],
    "redLineViolations": ["violation if any"] or [],
    "howToFix": ["specific change 1", "change 2"]
  },
  "improvedVersion": "Your idea, Waykeeper-ified",
  "visualStructure": {
    "type": "mermaid-mindmap",
    "code": "mindmap\\n  root((Idea))\\n    Aligns\\n      Value 1\\n    Concerns\\n      Issue 1"
  },
  "recommendation": "Detailed recommendation with reasoning"
}`;

    const userPrompt = `Analyze this ${type || 'idea'} for Waykeeper brand alignment:

${idea}

Be thorough and honest. If it breaks brand, say so clearly.`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.4,
      max_tokens: 2500,
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to check brand alignment', details: error.message },
      { status: 500 }
    );
  }
}

