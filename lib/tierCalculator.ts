import { QuizAnswers } from './quizFlow';

export type TierType = 'Basic' | 'Advanced' | 'Premium';

export interface TierRecommendation {
  tier: TierType;
  score: number;
  reasons: string[];
  benefits: string[];
}

export function calculateTier(answers: QuizAnswers): TierRecommendation {
  let score = 0;
  const reasons: string[] = [];

  // 1. AI First Appearance
  switch (answers.ai_first_appearance) {
    case "Competitor appears first most of the time":
      score += 3;
      reasons.push("Competitors consistently outrank you in AI search.");
      break;
    case "Sometimes me, sometimes competitor":
      score += 2;
      reasons.push("Inconsistent AI search visibility compared to competitors.");
      break;
    case "I have no idea / don’t track":
      score += 1;
      reasons.push("Lack of visibility into AI search performance.");
      break;
  }

  // 2. Missing Clients
  switch (answers.missing_clients) {
    case "Many (50+)":
      score += 3;
      reasons.push("Significant client loss due to AI invisibility.");
      break;
    case "Some (21–50)":
      score += 2;
      reasons.push("Noticeable client loss due to AI invisibility.");
      break;
    case "A few (6–20)":
      score += 1;
      reasons.push("Some client loss due to AI invisibility.");
      break;
  }

  // 3. Marketing Spend
  switch (answers.marketing_spend) {
    case "$10,000+":
      score += 3;
      reasons.push("High marketing spend with potential AI search inefficiency.");
      break;
    case "$2,000–10,000":
      score += 2;
      reasons.push("Moderate marketing spend with potential AI search inefficiency.");
      break;
    case "$500–2,000":
      score += 1;
      reasons.push("Lower marketing spend, opportunity for AI search leverage.");
      break;
  }

  // 4. Business Change with AI Leads
  switch (answers.business_change_ai_leads) {
    case "Game-changing — could dominate our market":
      score += 3;
      reasons.push("High potential for market dominance with increased AI leads.");
      break;
    case "Significant impact — would grow revenue / reach":
      score += 2;
      reasons.push("Significant revenue and reach growth potential with AI leads.");
      break;
  }

  // 5. Competitor AI Visibility
  switch (answers.competitor_ai_visibility) {
    case "Frequently — they outrank us":
      score += 3;
      reasons.push("Frequent competitor outranking in AI searches.");
      break;
    case "Occasionally, yes":
      score += 2;
      reasons.push("Occasional competitor outranking in AI searches.");
      break;
    case "I don’t know":
      score += 1;
      reasons.push("Uncertainty about competitor AI search visibility.");
      break;
  }

  // 6. Content Optimization Confidence
  switch (answers.content_optimization_confidence) {
    case "Not confident — probably not optimized":
      score += 3;
      reasons.push("Low confidence in current content AI optimization.");
      break;
    case "Somewhat confident — could be better":
      score += 2;
      reasons.push("Partial confidence in current content AI optimization.");
      break;
    case "No idea / haven’t checked":
      score += 1;
      reasons.push("No assessment of current content AI optimization.");
      break;
  }

  // 7. Start Urgency
  switch (answers.start_urgency) {
    case "Immediately — we want to move fast":
      score += 3;
      reasons.push("High urgency to improve AI search visibility.");
      break;
    case "Within the next 30 days":
      score += 2;
      reasons.push("Moderate urgency to improve AI search visibility.");
      break;
  }
  
  // Determine tier based on score
  let tier: TierType;
  let benefits: string[] = [];
  
  if (score <= 6) { // Adjusted thresholds based on new max score (approx 20)
    tier = 'Basic';
    benefits = [
      "Directory optimization across major platforms",
      "Reddit presence building",
      "Content network distribution",
      "AI crawl audit",
      "Monthly reporting"
    ];
  } else if (score <= 12) {
    tier = 'Advanced';
    benefits = [
      "Everything in Basic",
      "Schema markup implementation",
      "AI bot crawling enablement",
      "Q&A format conversion",
      "XML tag optimization",
      "Priority support"
    ];
  } else {
    tier = 'Premium';
    benefits = [
      "Everything in Advanced",
      "Weekly AI presence score",
      "Visibility tracking across ChatGPT, Perplexity, Gemini",
      "Email reports",
      "Real-time monitoring dashboard",
      "Dedicated success manager"
    ];
  }
  
  return {
    tier,
    score,
    reasons: reasons.slice(0, 3), // Top 3 reasons
    benefits
  };
}

export function getTierPrice(tier: TierType): number {
  switch (tier) {
    case 'Basic':
      return 199;
    case 'Advanced':
      return 399;
    case 'Premium':
      return 499;
  }
}

export function getTierTagline(tier: TierType): string {
  switch (tier) {
    case 'Basic':
      return 'External Boost';
    case 'Advanced':
      return 'Full Optimization';
    case 'Premium':
      return 'Full Stack';
  }
}

