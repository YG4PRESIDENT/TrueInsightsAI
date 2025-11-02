interface QuizAnswer {
  step: number;
  question: string;
  answer: string | number;
}

interface QuizSubmissionData {
  answers: QuizAnswer[];
  email: string;
  timestamp: string;
}

export async function submitQuizToWeb3Forms(
  data: QuizSubmissionData
): Promise<{ success: boolean; error?: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
    console.error("Web3Forms access key not found or not configured. Please set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local");
    return { success: false, error: "Configuration error: API key not set" };
  }

  // Format the quiz answers into a readable string
  const formattedAnswers = data.answers
    .map((answer) => {
      return `Question ${answer.step}: ${answer.question}\nAnswer: ${answer.answer}`;
    })
    .join("\n\n");

  // Prepare the payload for Web3Forms
  const payload = {
    access_key: accessKey,
    subject: "New Quiz Submission - TrueInsightsAI",
    from_name: "TrueInsightsAI Quiz",
    email: data.email,
    message: `
New quiz submission received!

📧 Contact Email: ${data.email}
🕒 Submitted: ${data.timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUIZ RESPONSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formattedAnswers}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This submission was captured from: https://trueinsightsai.com/quiz
    `.trim(),
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true };
    } else {
      console.error("Web3Forms submission failed:", result);
      return { success: false, error: result.message || "Submission failed" };
    }
  } catch (error) {
    console.error("Error submitting to Web3Forms:", error);
    return { success: false, error: "Network error" };
  }
}

