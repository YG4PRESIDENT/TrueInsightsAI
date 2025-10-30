"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    question: "On a scale of 1-10, how much do you care about your business's online presence?",
    type: "slider",
    min: 1,
    max: 10,
    labels: {
      1: "Not at all",
      4: "Somewhat",
      7: "It's important",
      10: "It's the future, I care"
    }
  },
  {
    id: 5,
    question: "What do you want to achieve in the next 90 days?",
    type: "multiple",
    options: [
      "Rank 1st in my area",
      "Know why I am not showing up",
      "See where my competitors rank",
      "All of the above"
    ]
  },
  {
    id: 6,
    question: "Which solution would suit you best?",
    type: "multiple",
    options: [
      "Weekly analytics (see what you're missing)",
      "Done-for-you, appear 1st in AI search in 90 days"
    ]
  },
  {
    id: 7,
    question: "What's your email?",
    subtitle: "We'll send your personalized AI visibility audit here",
    type: "email"
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>("");
  const [sliderValue, setSliderValue] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const currentQuestion = questions[currentStep];
  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const loadingSteps = [
    "Analyzing your business profile...",
    "Checking AI search visibility...",
    "Scanning competitor presence...",
    "Calculating optimization opportunities...",
    "Generating your personalized report..."
  ];

  // Progress tracker for loading state
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 600);
      
      return () => clearInterval(interval);
    } else {
      setLoadingStep(0);
    }
  }, [isLoading]);

  const handleNext = () => {
    // Save answer
    const newAnswer: QuizAnswer = {
      step: currentStep + 1,
      question: currentQuestion.question,
      answer: currentQuestion.type === "slider" ? sliderValue : selectedAnswer
    };
    
    setAnswers([...answers, newAnswer]);
    
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer("");
      setSliderValue(5);
    } else {
      // Quiz complete - show loading then completion
      setIsLoading(true);
      
      // Simulate report generation (3 seconds)
      setTimeout(() => {
        setIsLoading(false);
        setIsComplete(true);
      }, 3000);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Restore previous answer
      const previousAnswer = answers[currentStep - 1];
      if (previousAnswer) {
        if (currentQuestion.type === "slider") {
          setSliderValue(previousAnswer.answer as number);
        } else {
          setSelectedAnswer(previousAnswer.answer as string);
        }
      }
    }
  };

  const canProceed = () => {
    if (currentQuestion.type === "email") {
      return selectedAnswer.toString().includes("@");
    }
    if (currentQuestion.type === "slider") {
      return true;
    }
    return selectedAnswer !== "";
  };

  // Loading State with Progress Tracker
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
        {/* Blurred Mock Report Background */}
        <div className="absolute inset-0 blur-xl opacity-20 p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-12 space-y-6">
            <div className="h-12 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="h-32 bg-purple-100 rounded-xl"></div>
              <div className="h-32 bg-pink-100 rounded-xl"></div>
              <div className="h-32 bg-orange-100 rounded-xl"></div>
            </div>
            <div className="space-y-3 mt-8">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Loading Animation - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-10">
            <div className="w-24 h-24 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {loadingSteps[loadingStep]}
          </h2>
          <div className="flex items-center gap-2 text-gray-500">
            {loadingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index <= loadingStep ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Completion State
  if (isComplete) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto flex flex-col items-center"
          style={{ gap: '40px' }}
        >
          {/* Success Icon */}
          <div>
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            Your audit is on its way!
          </h2>
          
          <p className="text-xl text-gray-600">
            We'll send your personalized AI visibility report to
          </p>
          
          <p className="text-2xl font-semibold text-purple-600">
            {selectedAnswer}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-1.5">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Progress Text */}
      <div className="w-full max-w-2xl mx-auto px-6 py-6">
        <p className="text-xs font-medium text-gray-400 tracking-wide uppercase">
          Step {currentStep + 1} of {totalSteps}
        </p>
      </div>

      {/* Question Container */}
      <div className="flex-grow flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Question */}
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-semibold text-gray-900 leading-snug">
                  {currentQuestion.question}
                </h2>
                {currentQuestion.subtitle && (
                  <p className="text-base text-gray-500">
                    {currentQuestion.subtitle}
                  </p>
                )}
              </div>

              {/* Answer Options */}
              <div className="mt-8">
                {/* Yes/No Questions */}
                {currentQuestion.type === "yesno" && (
                  <div className="grid grid-cols-2 gap-3">
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedAnswer(option)}
                        className={`p-5 rounded-xl border-2 text-base font-medium transition-all duration-200 ${
                          selectedAnswer === option
                            ? "border-black bg-black text-white shadow-lg scale-105"
                            : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
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
                        className={`py-5 px-6 rounded-xl border-2 text-center text-base font-medium transition-all duration-200 ${
                          selectedAnswer === option
                            ? "border-black bg-black text-white shadow-lg scale-105"
                            : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {/* Slider */}
                {currentQuestion.type === "slider" && (
                  <div className="space-y-6 py-4">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-black">
                        {sliderValue}
                      </span>
                      <p className="text-gray-500 mt-2 text-sm">
                        {sliderValue <= 3 && "Not at all"}
                        {sliderValue >= 4 && sliderValue <= 6 && "Somewhat"}
                        {sliderValue >= 7 && sliderValue <= 9 && "It's important"}
                        {sliderValue === 10 && "It's the future, I care"}
                      </p>
                    </div>
                    <div className="px-2">
                      <input
                        type="range"
                        min={currentQuestion.min}
                        max={currentQuestion.max}
                        value={sliderValue}
                        onChange={(e) => setSliderValue(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #000 0%, #000 ${((sliderValue - 1) / 9) * 100}%, #E5E7EB ${((sliderValue - 1) / 9) * 100}%, #E5E7EB 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>Not at all</span>
                        <span>Very much</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Email Input */}
                {currentQuestion.type === "email" && (
                  <div>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={selectedAnswer}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-black focus:outline-none text-base text-center"
                    />
                  </div>
                )}
              </div>

              {/* Continue Button - Full Width, Capsule Shape */}
              <div style={{ marginTop: '10px' }}>
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`w-full py-6 px-8 rounded-full font-bold text-xl transition-all duration-300 ${
                    canProceed()
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {currentStep === totalSteps - 1 ? "Get My Free Audit →" : "Continue →"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Back Button - Bottom Left */}
      <div className="w-full max-w-2xl mx-auto px-6 pb-8">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
      </div>
    </div>
  );
}

