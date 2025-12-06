// =====================================================
// Tool API Client
// =====================================================
// Client library for integrating main site with tool subdomain

const TOOL_API_URL = process.env.NEXT_PUBLIC_TOOL_API_URL || 'https://tool.rankett.com'

// =====================================================
// Types
// =====================================================

export interface StartOnboardingResponse {
  sessionToken: string
  prospectId: string
  brandName: string
  industry: string
  previewUrl: string
}

export interface CaptureEmailResponse {
  success: boolean
  email: string
  qualificationScore: number
  isQualified: boolean
  leadStatus: string
  previewUrl: string
}

export interface AnalysisStatusResponse {
  status: 'not_started' | 'starting' | 'in_progress' | 'completed' | 'failed' | 'error'
  progress: number
  analysisId?: string
  visibilityScore?: number
  grade?: string
  error?: string
}

type QuizAnswerValue = string | number | string[] | undefined;

// =====================================================
// API Functions
// =====================================================

/**
 * Start onboarding session and create prospect
 */
export async function startOnboarding(websiteUrl: string): Promise<StartOnboardingResponse | null> {
  try {
    const response = await fetch(`${TOOL_API_URL}/api/onboarding/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ websiteUrl })
    })

    if (!response.ok) {
      throw new Error(`Failed to start onboarding: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Start onboarding error:', error)
    return null
  }
}

/**
 * Save individual quiz answer
 */
export async function saveQuizAnswer(
  sessionToken: string,
  questionId: string,
  answer: QuizAnswerValue
): Promise<boolean> {
  try {
    const response = await fetch(`${TOOL_API_URL}/api/onboarding/quiz-response`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionToken,
        questionId,
        answer
      })
    })

    if (!response.ok) {
      console.warn(`Failed to save answer for ${questionId}:`, response.status)
      return false
    }

    return true
  } catch (error) {
    console.error('Save quiz answer error:', error)
    return false
  }
}

/**
 * Capture email and get preview URL
 */
export async function captureEmail(
  sessionToken: string,
  email: string
): Promise<CaptureEmailResponse | null> {
  try {
    const response = await fetch(`${TOOL_API_URL}/api/onboarding/capture-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionToken,
        email
      })
    })

    if (!response.ok) {
      throw new Error(`Failed to capture email: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Capture email error:', error)
    return null
  }
}

/**
 * Check analysis status (for polling)
 */
export async function getAnalysisStatus(sessionToken: string): Promise<AnalysisStatusResponse | null> {
  try {
    const response = await fetch(`${TOOL_API_URL}/api/onboarding/analysis-status?session=${sessionToken}`)

    if (!response.ok) {
      throw new Error(`Failed to get analysis status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Get analysis status error:', error)
    return null
  }
}

// =====================================================
// Question Mapping Utilities
// =====================================================

/**
 * TODO: This function is outdated as the quiz questions have been revamped.
 * It needs to be rewritten to map the new quiz answers from the main site to the tool API format.
 */
// export async function mapQuizAnswer(questionNumber: number, answer: QuizAnswerValue): Promise<{ questionId: string; apiAnswer: string | number | boolean }> {
//   const mappings: Record<number, { questionId: string; transform: (val: QuizAnswerValue) => string | number | boolean }> = {
//     // Q1: "Do you have a business website?" → has_website (boolean)
//     1: {
//       questionId: 'has_website',
//       transform: (val: QuizAnswerValue) => (val as string).toLowerCase() === 'yes'
//     },

//     // Q2: "Do you have profiles on Google Business, Yelp, or BBB?" → has_business_profiles (boolean)
//     2: {
//       questionId: 'has_business_profiles',
//       transform: (val: QuizAnswerValue) => (val as string).toLowerCase() === 'yes'
//     },

//     // Q3: "How often do you ask customers for reviews?" → review_request_frequency (1-10)
//     // Simplified: Yes = 7, No = 1
//     3: {
//       questionId: 'review_request_frequency',
//       transform: (val: QuizAnswerValue) => (val as string).toLowerCase() === 'yes' ? 7 : 1
//     },

//     // Q4: "How important is your online presence?" → online_presence_importance (1-10)
//     4: {
//       questionId: 'online_presence_importance',
//       transform: (val: QuizAnswerValue) => val as number  // Direct number mapping
//     },

//     // Q5: "What do you want to achieve in the next 90 days?" → primary_goal
//     5: {
//       questionId: 'primary_goal',
//       transform: (val: QuizAnswerValue) => {
//         const goalMap: Record<string, string> = {
//           'Get found by more customers online': 'increase_visibility',
//           'Increase positive reviews': 'get_more_reviews',
//           'Show up when people ask AI about my industry': 'appear_in_ai',
//           'Outrank my competitors': 'beat_competitors'
//         }
//         return goalMap[val as string] || 'appear_in_ai'
//       }
//     },

//     // Q6: "Which solution best fits your needs?" → preferred_solution
//     6: {
//       questionId: 'preferred_solution',
//       transform: (val: QuizAnswerValue) => {
//         if ((val as string).includes('analytics reports')) return 'analytics'
//         if ((val as string).includes('Done-for-you')) return 'done_for_you'
//         if ((val as string).includes('AI search')) return 'ai_first'
//         return 'done_for_you'
//       }
//     },

//     // Q7: Email → Handled separately by captureEmail()
//     7: {
//       questionId: 'email',
//       transform: (val: QuizAnswerValue) => val as string  // Direct string
//     }
//   }

//   const mapping = mappings[questionNumber]
//   if (!mapping) {
//     return { questionId: `question_${questionNumber}`, apiAnswer: answer }
//   }

//   // Await the transform in case it's async (e.g., ZIP code lookup)
//   const transformedAnswer = await mapping.transform(answer)

//   return {
//     questionId: mapping.questionId,
//     apiAnswer: transformedAnswer
//   }
// }
