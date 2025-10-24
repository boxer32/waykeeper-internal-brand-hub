import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { goal, audience, platform, budget } = await req.json();

    if (!goal || !audience) {
      return NextResponse.json(
        { error: 'Goal and audience are required' },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a campaign strategist for Waykeeper brand. Generate campaign concepts that align with Waykeeper's brand DNA.

WAYKEEPER BRAND DNA:
- Core Value: Integration Over Experience
- Voice: Warm wisdom, permission-giving, anti-BS honesty
- Positioning: "Transformation That Lasts — Anywhere in Life"
- Differentiator: 90-day integration support, not just the experience

CAMPAIGN PRINCIPLES:
- No hype or toxic positivity
- Name real struggles honestly
- Give permission, don't command
- Show process, not just outcome
- Evidence over claims

RETURN STRUCTURED JSON WITH:
{
  "concepts": [
    {
      "name": "Campaign concept name",
      "bigIdea": "One sentence concept",
      "why": "Why this fits Waykeeper",
      "messageAngles": ["angle 1", "angle 2", "angle 3"],
      "visualDirection": "Description of mood and imagery",
      "keyMessages": ["message 1", "message 2"],
      "cta": "Call to action suggestion",
      "brandAlignment": 85,
      "mermaidFlow": "mermaid diagram code for customer journey"
    }
  ],
  "recommendations": {
    "topPick": 0,
    "reasoning": "Why this concept is strongest"
  }
}`;

    const userPrompt = `Generate 3 campaign concepts for Waykeeper.

**Campaign Goal:** ${goal}
**Target Audience:** ${audience}
**Platform:** ${platform || 'Multi-channel'}
${budget ? `**Budget Consideration:** ${budget}` : ''}

Generate creative concepts that are:
- Uniquely Waykeeper (not generic wellness)
- Honest about transformation process
- Permission-giving, not pressure-inducing
- Evidence-based, not hype-based

Include Mermaid diagram for customer journey in each concept.`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.8,
      max_tokens: 3000,
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');

    return NextResponse.json({
      ...result,
      tokens: completion.usage?.total_tokens || 0,
    });
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate campaign ideas', details: error.message },
      { status: 500 }
    );
  }
}

