'use client';

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import { AlertTriangle, Copy, Check } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

const stressScenarios = [
  {
    category: 'Crisis Communication',
    scenario: 'Negative Press / Social Media Crisis',
    challenge: 'Someone posts viral criticism of Waykeeper on social media',
    prompt: `Brand Stress Test: Crisis Response

**Scenario:** [DESCRIBE CRISIS SITUATION]

**Waykeeper Brand Principles in Crisis:**
- Honesty over spin — we admit mistakes
- Empathy over defense — we understand their pain
- Action over apology — we show what we're doing
- Grounded not corporate — real person speaking, not PR
- Permission-giving — "You're right to be upset"

**Response Framework:**

1. **Immediate Acknowledgment** (within 1 hour)
   - What would Waykeeper say first?
   - How do we validate their concern?
   - What tone do we use?

2. **Full Response** (within 24 hours)
   - How do we explain what happened (honest, no excuses)?
   - What action are we taking?
   - How do we show accountability?

3. **Follow-Up** (within 1 week)
   - How do we update on progress?
   - What did we learn?
   - How are we changing?

**Voice Check:**
- ✗ Avoid: Corporate apologies, defensive language, blame shifting
- ✓ Use: "We hear you", "Here's what happened", "Here's what we're doing"

Generate a response that stays true to Waykeeper voice even under pressure.`,
  },
  {
    category: 'Audience Expansion',
    scenario: 'New Target Audience Requires Tone Shift',
    challenge: 'Expanding to corporate wellness market — how much should tone change?',
    prompt: `Brand Stress Test: Audience Expansion

**New Audience:** [DESCRIBE NEW SEGMENT]
**Their Expectations:** [WHAT THEY TYPICALLY RESPOND TO]

**Waykeeper Brand Constraints:**
- Core voice MUST stay: warm wisdom, permission-giving, anti-BS
- Core positioning MUST stay: integration over experience
- Core values MUST stay intact

**Test Questions:**

1. **Voice Adaptation:**
   - Can we adjust energy/pacing for this audience?
   - Where can we flex without breaking voice?
   - What's non-negotiable?

2. **Example Adaptation:**
   Take this Waykeeper message:
   "It's okay to not be okay after a retreat. Integration is messy."
   
   How would we say this to [NEW AUDIENCE] while staying on-brand?

3. **Value Translation:**
   - How do we explain "Integration Over Experience" to this audience?
   - What language resonates with them that's still brand-aligned?

4. **Red Line Test:**
   Would this audience pressure us to:
   - Use more hype language? [If yes, how do we resist?]
   - Be more corporate? [How do we stay warm?]
   - Promise faster results? [How do we stay honest?]

**Recommendation:** Can we serve this audience without compromising brand? If yes, how? If no, why not?`,
  },
  {
    category: 'Competitive Response',
    scenario: 'Competitor Copies Our Positioning',
    challenge: 'Another brand starts using "integration" language — how do we respond?',
    prompt: `Brand Stress Test: Competitive Response

**Situation:** [DESCRIBE WHAT COMPETITOR IS DOING]

**Waykeeper's Response Philosophy:**
- We don't attack competitors
- We clarify our unique truth
- We deepen our positioning, not defend it
- We stay grounded, not reactive

**Response Strategy:**

1. **Should We Respond Publicly?**
   - When silence is stronger
   - When clarification helps customers
   - How to respond without seeming defensive

2. **If We Respond, How?**
   Write a response that:
   - Doesn't mention competitor by name
   - Deepens our positioning
   - Educates, doesn't attack
   - Shows confidence through clarity
   - Uses examples, not claims

3. **Long-Term Strategy:**
   - How do we "own" integration more deeply?
   - What can we do that competitors can't copy?
   - How do we make our truth undeniable?

4. **Voice Check:**
   - Stay permission-giving (not superior)
   - Stay honest (not defensive)
   - Stay grounded (not reactive)

Generate a response strategy that strengthens our brand without breaking our voice.`,
  },
  {
    category: 'Partnership Dilemma',
    scenario: 'Partner Wants Different Brand Voice',
    challenge: 'Potential partner asks us to "sound more energetic and exciting"',
    prompt: `Brand Stress Test: Partnership Negotiation

**Partner Request:** [WHAT THEY'RE ASKING FOR]
**Why They're Asking:** [THEIR REASONING]

**Waykeeper Position:**
- Our voice is non-negotiable: warm wisdom, not hype
- We can adjust energy, but not core characteristics
- We don't compromise brand for any partnership

**Negotiation Framework:**

1. **Can We Meet Them Halfway?**
   - Where can we flex? (Energy, pacing, examples)
   - Where is the red line? (No hype, no toxic positivity, no guru language)
   - What's a compromise that works for both?

2. **How to Explain Our Brand:**
   Write talking points that help them understand:
   - Why our voice builds trust (not just preference)
   - How our positioning attracts quality customers
   - Why "exciting" isn't our goal (integration is)

3. **Alternative Proposal:**
   Instead of changing voice, we could:
   - [SUGGEST ALTERNATIVE APPROACHES]
   - Focus energy differently without hype
   - Show excitement through stories, not language

4. **Walk-Away Criteria:**
   We should decline this partnership if:
   - [LIST RED LINES]
   - When maintaining brand is more valuable than partnership

**Recommendation:** Negotiate or walk away? Why?`,
  },
];

export default function AIThinkingPage() {
  return (
    <PageContainer
      title="AI Brand Thinking Space"
      description="ให้ AI เป็นที่ปรึกษาแบรนด์ — ideate, analyze, และ validate ทุกไอเดียก่อนทำจริง"
    >
      {/* How It Works */}
      <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-8 mb-12">
        <h2 className="text-2xl font-headline font-bold text-deep-earth mb-6">
          🧠 ทำให้แบรนด์เป็นระบบคิด (Brand as Thinking System)
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-morning-light rounded-lg">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="font-semibold text-deep-earth mb-2">1. Ideate</h3>
            <p className="text-sm text-deep-earth/70">
              สร้างไอเดีย campaign ที่ align กับ core values
            </p>
          </div>
          
          <div className="text-center p-6 bg-morning-light rounded-lg">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-semibold text-deep-earth mb-2">2. Analyze</h3>
            <p className="text-sm text-deep-earth/70">
              วิเคราะห์ความตรงกับ positioning
            </p>
          </div>
          
          <div className="text-center p-6 bg-morning-light rounded-lg">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-semibold text-deep-earth mb-2">3. Validate</h3>
            <p className="text-sm text-deep-earth/70">
              จัดอันดับและให้ feedback จากมุมแบรนด์
            </p>
          </div>
        </div>
      </div>

      {/* Stress Test Prompts */}
      <h2 className="text-3xl font-headline font-bold text-deep-earth mb-6">
        Brand Thinking Prompts
      </h2>

      <div className="space-y-6">
        {stressScenarios.map((item, index) => (
          <StressTestCard key={index} {...item} />
        ))}
      </div>

      {/* Tips */}
      <div className="mt-12 bg-sunrise-gold/10 border border-sunrise-gold/30 rounded-lg p-6">
        <h3 className="font-headline font-bold text-lg text-deep-earth mb-3">
          💡 Pro Tips
        </h3>
        <ul className="text-sm text-deep-earth/80 space-y-2">
          <li>• <strong>ใช้ในช่วง brainstorm:</strong> Copy prompt → paste to ChatGPT → ใส่ไอเดีย → ได้ analysis</li>
          <li>• <strong>ใช้ประจำ:</strong> ทุกครั้งก่อน launch campaign ใหม่</li>
          <li>• <strong>ใช้ train ทีม:</strong> ให้เห็นว่าแบรนด์คิดอย่างไร</li>
          <li>• <strong>Save output:</strong> เก็บ AI responses เป็น case studies</li>
        </ul>
      </div>
    </PageContainer>
  );
}

function StressTestCard({ category, scenario, challenge, prompt }: {
  category: string;
  scenario: string;
  challenge: string;
  prompt: string;
}) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(prompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-soft-stone/30 p-6">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-heart-rose/10 text-heart-rose text-xs font-semibold rounded mb-3">
          {category}
        </span>
        <h3 className="font-headline font-bold text-xl text-deep-earth mb-2">{scenario}</h3>
        <p className="text-sm text-deep-earth/70 italic">
          Challenge: {challenge}
        </p>
      </div>

      <div
        className={`bg-deep-earth/5 rounded-lg p-4 font-mono text-xs text-deep-earth leading-relaxed mb-4 ${
          expanded ? '' : 'max-h-40 overflow-hidden'
        }`}
      >
        {prompt}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-skypath-blue hover:text-journey-coral transition-colors"
        >
          {expanded ? 'Show Less' : 'Show Full Prompt'}
        </button>

        <button
          onClick={handleCopy}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
            copied
              ? 'bg-skypath-blue text-white'
              : 'bg-deep-earth text-white hover:bg-skypath-blue'
          }`}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy Prompt</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

