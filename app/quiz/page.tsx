"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";

interface QuizAnswer {
  step: number;
  question: string;
  answer: string | number;
}

const questions = [
  {
    id: 1,
    question: "If a potential client asked AI today for your service, who would show up first, you or your competitor?",
    type: "multiple",
    options: [
      "I appear first every time (I’m confident)",
      "Competitor appears first most of the time",
      "Sometimes me, sometimes competitor",
      "I have no idea / don’t track"
    ]
  },
  {
    id: 2,
    question: "How many clients do you think you’re missing each month because AI can’t find you?",
    type: "multiple",
    options: [
      "Almost none / 0–5",
      "A few (6–20)",
      "Some (21–50)",
      "Many (50+)"
    ]
  },
  {
    id: 3,
    question: "How much do you currently spend on marketing or SEO each month?",
    type: "multiple",
    options: [
      "<$500",
      "$500–2,000",
      "$2,000–10,000",
      "$10,000+"
    ]
  },
  {
    id: 4,
    question: "How would your business change if AI search drove 30–50% more qualified leads in the next 90 days?",
    type: "multiple",
    options: [
      "Not much, we’re already maxed out",
      "Some increase, but we could handle it",
      "Significant impact — would grow revenue / reach",
      "Game-changing — could dominate our market"
    ]
  },
  {
    id: 5,
    question: "Have you noticed competitors appearing for AI searches that you’re invisible in?",
    type: "multiple",
    options: [
      "No, we dominate search visibility",
      "Occasionally, yes",
      "Frequently — they outrank us",
      "I don’t know"
    ]
  },
  {
    id: 6,
    question: "How confident are you that your website and content are optimized for the questions potential clients actually ask AI platforms?",
    type: "multiple",
    options: [
      "Very confident — everything’s optimized",
      "Somewhat confident — could be better",
      "Not confident — probably not optimized",
      "No idea / haven’t checked"
    ]
  },
  {
    id: 7,
    question: "If we could guarantee visibility in AI searches before your competitor does, how quickly would you want to start?",
    type: "multiple",
    options: [
      "Immediately — we want to move fast",
      "Within the next 30 days",
      "Within 90 days",
      "Not sure / would wait"
    ]
  }
];

function QuizContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>("");
  const searchParams = useSearchParams();
  const websiteUrl = searchParams.get("url") || "";

  const currentQuestion = questions[currentStep];
  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = async () => {
    // Save answer
    const newAnswer: QuizAnswer = {
      step: currentStep + 1,
      question: currentQuestion.question,
      answer: selectedAnswer
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(""); // Reset answer
    } else {
      // Quiz Complete: Submit to API before redirecting
      console.log("Quiz completion detected. Submitting answers...");

      try {
        // Call tool API to store quiz data
        const toolApiUrl = process.env.NEXT_PUBLIC_TOOL_API_URL || 'https://tool.rankett.com';

        const response = await fetch(`${toolApiUrl}/api/quiz/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            websiteUrl: websiteUrl,
            quizAnswers: updatedAnswers
          })
        });

        const data = await response.json();

        if (response.ok && data.toolUrl) {
          // Redirect to tool with session token
          console.log("Quiz submitted successfully. Redirecting to:", data.toolUrl);
          window.location.href = data.toolUrl;
        } else {
          throw new Error(data.error || 'Failed to submit quiz');
        }
      } catch (error) {
        console.error('Failed to submit quiz:', error);

        // Fallback: Redirect without session token
        const toolBaseUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'https://tool.rankett.com';
        const redirectUrl = new URL(toolBaseUrl);
        if (websiteUrl) redirectUrl.searchParams.append('url', websiteUrl);

        console.log("Fallback redirect to:", redirectUrl.toString());
        window.location.href = redirectUrl.toString();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Optional: Restore previous answer if needed
      const previousAnswer = answers[currentStep - 1];
      if (previousAnswer) {
        setSelectedAnswer(previousAnswer.answer as string);
      }
    }
  };

  const canProceed = () => {
    return selectedAnswer !== "";
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-900 h-1">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Progress Text */}
      <div className="w-full max-w-2xl mx-auto px-6 py-8 relative z-10">
        <p className="text-xs font-mono text-slate-500 tracking-widest uppercase">
          Step {currentStep + 1} / {totalSteps}
        </p>
      </div>

      {/* Question Container */}
      <div className="flex-grow flex items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Question */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Answer Options */}
              <div>
                {/* Multiple Choice */}
                {currentQuestion.type === "multiple" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedAnswer(option)}
                        className={`p-6 rounded-xl border-2 text-left text-base font-medium transition-all duration-200 ${
                          selectedAnswer === option
                            ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                            : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:text-white hover:bg-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                           <span>{option}</span>
                           {selectedAnswer === option && <Check className="text-blue-500" size={20} />}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-center pt-8">
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  size="lg"
                  variant="primary"
                  className="w-full md:w-auto min-w-[200px] text-lg h-14 shadow-[0_0_40px_rgba(37,99,235,0.3)]"
                >
                  {currentStep === totalSteps - 1 ? "Analyze My Business" : "Continue"} <ArrowRight className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-3xl mx-auto px-6 pb-12 relative z-10">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
      </div>
    </div>
  );
}

export default function Quiz() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading...
      </div>
    }>
      <QuizContent />
    </Suspense>
  );
}