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
  
  // Importance score (high weight)
  if (answers.importance) {
    if (answers.importance >= 9) {
      score += 3;
      reasons.push("High priority on online presence");
    } else if (answers.importance >= 7) {
      score += 2;
      reasons.push("Significant focus on online presence");
    } else if (answers.importance >= 5) {
      score += 1;
    }
  }
  
  // Missing profiles
  if (answers.profiles === 'no') {
    score += 2;
    reasons.push("Need to establish local business profiles");
  }
  
  // Not asking for reviews
  if (answers.reviews === 'no') {
    score += 1;
    reasons.push("Review collection system needed");
  }
  
  // Has website
  if (answers.website === 'yes') {
    score += 1;
  } else {
    score += 2;
    reasons.push("Website optimization required");
  }
  
  // Goals analysis
  if (answers.goals) {
    if (answers.goals.includes("Rank 1st in my area")) {
      score += 2;
      reasons.push("Aggressive ranking goals");
    }
    if (answers.goals.includes("All of the above")) {
      score += 2;
      reasons.push("Comprehensive needs across all areas");
    }
  }
  
  // Obstacles analysis
  if (answers.obstacles) {
    if (answers.obstacles.includes("I'd rather pay someone to do it")) {
      score += 2;
      reasons.push("Prefer hands-off management");
    }
    if (answers.obstacles.includes("I don't have time")) {
      score += 1;
      reasons.push("Time-constrained");
    }
  }
  
  // Solution preference
  if (answers.solution === "Done-for-you, appear 1st in AI search in 90 days") {
    score += 2;
    reasons.push("Want full-service solution");
  }
  
  // Determine tier based on score
  let tier: TierType;
  let benefits: string[] = [];
  
  if (score <= 4) {
    tier = 'Basic';
    benefits = [
      "Directory optimization across major platforms",
      "Reddit presence building",
      "Content network distribution",
      "AI crawl audit",
      "Monthly reporting"
    ];
  } else if (score <= 8) {
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

