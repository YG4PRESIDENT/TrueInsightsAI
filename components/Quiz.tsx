"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { isValidUrl } from "@/lib/utils";

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuizAnswers {
  hasWebsite?: boolean;
  hasProfiles?: boolean;
  asksForReviews?: boolean;
  careLevel?: number;
  goal?: string;
  solution?: string;
  email?: string;
}

export default function Quiz({ isOpen, onClose }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [emailError, setEmailError] = useState("");

  const totalSteps = 7;

  const handleAnswer = (key: keyof QuizAnswers, value: any) => {
    setAnswers({ ...answers, [key]: value });
    
    // Auto-advance for simple yes/no questions
    if (currentStep <= 3) {
      setTimeout(() => {
        if (currentStep < totalSteps) {
          setCurrentStep(currentStep + 1);
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentStep === totalSteps) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const email = answers.email || "";
    
    if (!email) {
      setEmailError("Please enter your email");
      return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setEmailError("");
    
    // TODO: Submit to backend in future milestone
    console.log("Quiz submitted:", answers);
    alert(`Thanks! We'll send your personalized AI visibility audit to ${email}`);
    onClose();
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return answers.hasWebsite !== undefined;
      case 2: return answers.hasProfiles !== undefined;
      case 3: return answers.asksForReviews !== undefined;
      case 4: return answers.careLevel !== undefined;
      case 5: return answers.goal !== undefined;
      case 6: return answers.solution !== undefined;
      case 7: return answers.email !== undefined && answers.email.length > 0;
      default: return false;
    }
  };

  const progressPercent = (currentStep / totalSteps) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="sticky top-0 bg-white pt-8 pb-4 px-8 border-b border-gray-100 z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Question 1: Do you have a website? */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-black">Do you have a website?</h2>
                  <p className="text-xl text-gray-600">This helps us understand your digital presence.</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <button
                      onClick={() => handleAnswer("hasWebsite", true)}
                      className={`p-8 rounded-2xl border-2 transition-all text-lg font-semibold ${
                        answers.hasWebsite === true
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("hasWebsite", false)}
                      className={`p-8 rounded-2xl border-2 transition-all text-lg font-semibold ${
                        answers.hasWebsite === false
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Question 2: Do you have profiles? */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-black">Do you have profiles on Google Business, Yelp, or BBB?</h2>
                  <p className="text-xl text-gray-600">These are crucial for local AI visibility.</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <button
                      onClick={() => handleAnswer("hasProfiles", true)}
                      className={`p-8 rounded-2xl border-2 transition-all text-lg font-semibold ${
                        answers.hasProfiles === true
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("hasProfiles", false)}
                      className={`p-8 rounded-2xl border-2 transition-all text-lg font-semibold ${
                        answers.hasProfiles === false
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Question 3: Do you ask for reviews? */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-black">Do you ask customers to leave reviews?</h2>
                  <p className="text-xl text-gray-600">Reviews significantly impact AI recommendations.</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <button
                      onClick={() => handleAnswer("asksForReviews", true)}
                      className={`p-8 rounded-2xl border-2 transition-all text-lg font-semibold ${
                        answers.asksForReviews === true
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("asksForReviews", false)}
                      className={`p-8 rounded-2xl border-2 transition-all text-lg font-semibold ${
                        answers.asksForReviews === false
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Question 4: Care level slider */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-black">On a scale of 1-10, how much do you care about your business's online presence?</h2>
                  <p className="text-xl text-gray-600">Be honest - this helps us tailor your audit.</p>
                  <div className="pt-8 space-y-6">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={answers.careLevel || 5}
                      onChange={(e) => handleAnswer("careLevel", parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #8B5CF6 0%, #3B82F6 ${((answers.careLevel || 5) - 1) * 11.11}%, #E5E7EB ${((answers.careLevel || 5) - 1) * 11.11}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1 - Not at all</span>
                      <span className="text-2xl font-bold text-black">{answers.careLevel || 5}</span>
                      <span>10 - It's the future</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Question 5: Goals */}
              {currentStep === 5 && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-black">What do you want to achieve in the next 90 days?</h2>
                  <p className="text-xl text-gray-600">Select your primary goal.</p>
                  <div className="grid grid-cols-1 gap-4 pt-4">
                    {[
                      { value: "rank_first", label: "Rank 1st in my area" },
                      { value: "know_why", label: "Know why I'm not showing up" },
                      { value: "competitor_analysis", label: "See where my competitors rank" },
                      { value: "all", label: "All of the above" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer("goal", option.value)}
                        className={`p-6 rounded-2xl border-2 transition-all text-left text-lg font-semibold ${
                          answers.goal === option.value
                            ? "border-black bg-black text-white"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 6: Solution preference */}
              {currentStep === 6 && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-black">Which solution would suit you best?</h2>
                  <p className="text-xl text-gray-600">Choose your preferred approach.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <button
                      onClick={() => handleAnswer("solution", "analytics")}
                      className={`p-8 rounded-2xl border-2 transition-all text-left ${
                        answers.solution === "analytics"
                          ? "border-purple-500 bg-purple-50 ring-2 ring-purple-500"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-black mb-3">Weekly Analytics</h3>
                      <p className="text-gray-600">See what you're missing and track your AI visibility over time</p>
                    </button>
                    <button
                      onClick={() => handleAnswer("solution", "done_for_you")}
                      className={`p-8 rounded-2xl border-2 transition-all text-left ${
                        answers.solution === "done_for_you"
                          ? "border-purple-500 bg-purple-50 ring-2 ring-purple-500"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-black mb-3">Done-For-You</h3>
                      <p className="text-gray-600">Appear 1st in AI search results in 90 days with our full optimization</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Question 7: Email */}
              {currentStep === 7 && (
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-black">What's your email?</h2>
                  <p className="text-xl text-gray-600">We'll send your personalized AI visibility audit here</p>
                  <div className="pt-4">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={answers.email || ""}
                      onChange={(e) => {
                        handleAnswer("email", e.target.value);
                        setEmailError("");
                      }}
                      className="w-full px-6 py-5 text-lg border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors"
                    />
                    {emailError && (
                      <p className="mt-2 text-sm text-red-600">{emailError}</p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-8 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              currentStep === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all ${
              canProceed()
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {currentStep === totalSteps ? "Get My Free Audit" : "Next"}
            {currentStep < totalSteps && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

