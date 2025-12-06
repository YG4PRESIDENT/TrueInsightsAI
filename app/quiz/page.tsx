"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input"; // Assuming you have a reusable Input component

interface QuizAnswer {
  step: number;
  question: string;
  answer: string | number;
}

const questions = [
  {
    id: 1,
    question: "Do you have a website?",
    type: "yesno",
    options: ["Yes", "No"]
  },
  {
    id: 2,
    question: "Do you have profiles on Google Business, Yelp, or BBB?",
    type: "yesno",
    options: ["Yes", "No"]
  },
  {
    id: 3,
    question: "Do you ask customers to leave reviews?",
    type: "yesno",
    options: ["Yes", "No"]
  },
  {
    id: 4,
    question: "How much impact would 1st place in AI recommendations have on your business?", // NEW Q4
    type: "slider",
    min: 1,
    max: 10,
    labels: {
      1: "Minimal",
      5: "Significant",
      10: "Game-changing"
    }
  },
  {
    id: 5,
    question: "What is your primary goal for improving AI visibility?", // NEW Q5
    type: "multiple",
    options: [
      "Increase customer acquisition",
      "Improve brand reputation",
      "Outrank competitors",
      "Reduce ad spend"
    ]
  },
  {
    id: 6,
    question: "How aggressively are you looking to grow your AI presence?", // NEW Q6
    type: "multiple",
    options: [
      "Test the waters (explore options)",
      "Stay competitive (match rivals)",
      "Dominate the market (be #1)"
    ]
  }
]; // Removed email question from here

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>("");
  const [sliderValue, setSliderValue] = useState(5);
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
      answer: currentQuestion.type === "slider" ? sliderValue : selectedAnswer
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(currentQuestion.type === "slider" ? sliderValue : ""); // Reset or set default
      setSliderValue(5); // Reset slider
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
        if (questions[currentStep - 1].type === "slider") {
          setSliderValue(previousAnswer.answer as number);
        } else {
          setSelectedAnswer(previousAnswer.answer as string);
        }
      }
    }
  };

  const canProceed = () => {
    if (currentQuestion.type === "slider") return true; // Slider always has a value
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
                {/* Yes/No Questions */}
                {currentQuestion.type === "yesno" && (
                  <div className="grid grid-cols-2 gap-6">
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedAnswer(option)}
                        className={`p-8 rounded-2xl border-2 text-xl font-bold transition-all duration-200 ${
                          selectedAnswer === option
                            ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                            : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:text-white hover:bg-slate-800"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

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
                           {selectedAnswer === option && <CheckCircle2 className="text-blue-500" size={20} />}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Slider */}
                {currentQuestion.type === "slider" && (
                  <div className="space-y-12 py-8">
                    <div className="text-center">
                      <span className="text-8xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        {sliderValue}
                      </span>
                      <p className="text-blue-400 mt-4 text-lg font-medium uppercase tracking-widest">
                        {sliderValue <= 3 && "Minimal"}
                        {sliderValue >= 4 && sliderValue <= 6 && "Significant"}
                        {sliderValue >= 7 && sliderValue <= 9 && "High"}
                        {sliderValue === 10 && "Game-changing"}
                      </p>
                    </div>
                    <div className="px-8">
                      <input
                        type="range"
                        min={currentQuestion.min}
                        max={currentQuestion.max}
                        value={sliderValue}
                        onChange={(e) => setSliderValue(parseInt(e.target.value))}
                        className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                        style={{
                           accentColor: '#3b82f6'
                        }}
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-4 font-mono uppercase tracking-wider">
                        <span>Not at all</span>
                        <span>Extremely</span>
                      </div>
                    </div>
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