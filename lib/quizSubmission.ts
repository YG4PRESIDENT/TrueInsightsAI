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

  console.log("🔍 Quiz Submission Debug:");
  console.log("- API Key exists:", !!accessKey);
  console.log("- API Key (first 10 chars):", accessKey?.substring(0, 10));
  console.log("- Email:", data.email);
  console.log("- Answers count:", data.answers.length);

  if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
    console.error("❌ Web3Forms access key not found or not configured. Please set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local");
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
    subject: "New Quiz Submission - Rankett",
    from_name: "Rankett Quiz",
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

This submission was captured from: https://rankett.com/quiz
    `.trim(),
  };

  try {
    console.log("📤 Sending to Web3Forms...");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log("📥 Web3Forms Response:", result);

    if (result.success) {
      console.log("✅ Quiz submission successful!");
      return { success: true };
    } else {
      console.error("❌ Web3Forms submission failed:", result);
      return { success: false, error: result.message || "Submission failed" };
    }
  } catch (error) {
    console.error("❌ Error submitting to Web3Forms:", error);
    return { success: false, error: "Network error" };
  }
}

