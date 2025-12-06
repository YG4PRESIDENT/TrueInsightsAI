export interface QuizQuestion {
  id: string;
  type: 'text' | 'yesno' | 'multi' | 'scale' | 'choice' | 'form';
  question: string;
  subtitle?: string;
  required?: boolean;
  options?: string[] | 'auto';
  min?: number;
  max?: number;
  placeholder?: string;
  multiSelect?: boolean;
}

export const quizFlow: QuizQuestion[] = [
  // Phase 1: Basic Information
  {
    id: 'email',
    type: 'text',
    question: "What's your email?",
    subtitle: "We'll send your personalized audit report here",
    required: true,
    placeholder: 'your@email.com'
  },
  {
    id: 'name',
    type: 'text',
    question: "What's your name?",
    subtitle: "Help us personalize your experience",
    required: true,
    placeholder: 'John Smith'
  },
  
  // Phase 2: New Discovery Questions
  {
    id: 'ai_first_appearance',
    type: 'choice',
    question: "1. If a potential client asked AI today for your service, who would show up first, you or your competitor?",
    options: ["I appear first every time (I’m confident)", "Competitor appears first most of the time", "Sometimes me, sometimes competitor", "I have no idea / don’t track"],
    required: true
  },
  {
    id: 'missing_clients',
    type: 'choice',
    question: "2. How many clients do you think you’re missing each month because AI can’t find you?",
    options: ["Almost none / 0–5", "A few (6–20)", "Some (21–50)", "Many (50+)"],
    required: true
  },
  {
    id: 'marketing_spend',
    type: 'choice',
    question: "3. How much do you currently spend on marketing or SEO each month?",
    options: ["<$500", "$500–2,000", "$2,000–10,000", "$10,000+"],
    required: true
  },
  {
    id: 'business_change_ai_leads',
    type: 'choice',
    question: "4. How would your business change if AI search drove 30–50% more qualified leads in the next 90 days?",
    options: ["Not much, we’re already maxed out", "Some increase, but we could handle it", "Significant impact — would grow revenue / reach", "Game-changing — could dominate our market"],
    required: true
  },
  {
    id: 'competitor_ai_visibility',
    type: 'choice',
    question: "5. Have you noticed competitors appearing for AI searches that you’re invisible in?",
    options: ["No, we dominate search visibility", "Occasionally, yes", "Frequently — they outrank us", "I don’t know"],
    required: true
  },
  {
    id: 'content_optimization_confidence',
    type: 'choice',
    question: "6. How confident are you that your website and content are optimized for the questions potential clients actually ask AI platforms?",
    options: ["Very confident — everything’s optimized", "Somewhat confident — could be better", "Not confident — probably not optimized", "No idea / haven’t checked"],
    required: true
  },
  {
    id: 'start_urgency',
    type: 'choice',
    question: "7. If we could guarantee visibility in AI searches before your competitor does, how quickly would you want to start?",
    options: ["Immediately — we want to move fast", "Within the next 30 days", "Within 90 days", "Not sure / would wait"],
    required: true
  }
];

export interface QuizAnswers {
  email?: string;
  name?: string;
  ai_first_appearance?: string;
  missing_clients?: string;
  marketing_spend?: string;
  business_change_ai_leads?: string;
  competitor_ai_visibility?: string;
  content_optimization_confidence?: string;
  start_urgency?: string;
  websiteUrl?: string; // From Hero form
}

