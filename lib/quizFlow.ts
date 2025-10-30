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
  
  // Phase 2: Discovery Questions
  {
    id: 'competitors',
    type: 'text',
    question: "Who are your main competitors?",
    subtitle: "Enter competitor names or websites (we'll suggest some based on your business)",
    required: false,
    placeholder: 'competitor1.com, competitor2.com'
  },
  {
    id: 'profiles',
    type: 'yesno',
    question: "Do you have profiles on Google, Yelp, and BBB?",
    subtitle: "This helps us understand your current local presence",
    required: true
  },
  {
    id: 'reviews',
    type: 'yesno',
    question: "Do you ask customers to leave reviews?",
    subtitle: "Reviews are crucial for local SEO performance",
    required: true
  },
  {
    id: 'website',
    type: 'yesno',
    question: "Do you have a website?",
    subtitle: "A website is the foundation of your online presence",
    required: true
  },
  
  // Phase 3: Prioritization
  {
    id: 'importance',
    type: 'scale',
    question: "How important is your business's online presence?",
    subtitle: "On a scale of 1-10, where 10 is critical to your success",
    required: true,
    min: 1,
    max: 10
  },
  {
    id: 'goals',
    type: 'choice',
    question: "What do you want to achieve in the next 90 days?",
    subtitle: "Select all that apply",
    required: true,
    multiSelect: true,
    options: [
      "Rank 1st in my area",
      "Know why I am not showing up",
      "See where my competitors rank",
      "All of the above"
    ]
  },
  {
    id: 'obstacles',
    type: 'choice',
    question: "What's stopping you from achieving your goals?",
    subtitle: "Help us understand your challenges",
    required: true,
    multiSelect: true,
    options: [
      "I'm not tech savvy",
      "I lack knowledge",
      "I don't have time",
      "I'd rather pay someone to do it"
    ]
  },
  
  // Phase 4: Solution Matching
  {
    id: 'solution',
    type: 'choice',
    question: "Which solution would suit you best?",
    subtitle: "Choose the approach that fits your needs",
    required: true,
    multiSelect: false,
    options: [
      "Weekly analytics (see what you're missing)",
      "Done-for-you, appear 1st in AI search in 90 days"
    ]
  }
];

export interface QuizAnswers {
  email?: string;
  name?: string;
  competitors?: string;
  profiles?: 'yes' | 'no';
  reviews?: 'yes' | 'no';
  website?: 'yes' | 'no';
  importance?: number;
  goals?: string[];
  obstacles?: string[];
  solution?: string;
  websiteUrl?: string; // From Hero form
}

