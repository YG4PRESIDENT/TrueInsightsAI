"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { quizFlow, QuizAnswers, QuizQuestion } from "@/lib/quizFlow";
import { calculateTier, TierRecommendation } from "@/lib/tierCalculator";
import QuizProgress from "./QuizProgress";
import QuizAnswerButton from "./QuizAnswerButton";
import QuizAnswerCard from "./QuizAnswerCard";
import QuizAnswerSlider from "./QuizAnswerSlider";
import QuizResults from "./QuizResults";

type QuizAnswerValue = string | number | string[] | undefined;

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  websiteUrl: string;
}

export default function QuizModal({ isOpen, onClose, websiteUrl }: QuizModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({ websiteUrl });
  const [showResults, setShowResults] = useState(false);
  const [recommendation, setRecommendation] = useState<TierRecommendation | null>(null);

  const currentQuestion = quizFlow[currentStep];
  const totalSteps = quizFlow.length;
  const isLastStep = currentStep === totalSteps - 1;

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleAnswer = (questionId: string, value: QuizAnswerValue) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (isLastStep) {
      // Calculate recommendation and show results
      const result = calculateTier(answers);
      setRecommendation(result);
      setShowResults(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleBookCall = () => {
    // TODO: Implement booking calendar or redirect
    window.open('https://calendly.com/rankett', '_blank');
  };

  const isAnswered = () => {
    const answer = answers[currentQuestion.id as keyof QuizAnswers];
    
    if (!currentQuestion.required) return true;
    
    if (currentQuestion.type === 'text') {
      return typeof answer === 'string' && answer.trim().length > 0;
    }
    
    if (currentQuestion.type === 'yesno') {
      return answer === 'yes' || answer === 'no';
    }
    
    if (currentQuestion.type === 'scale') {
      return typeof answer === 'number' && answer >= (currentQuestion.min || 1);
    }
    
    if (currentQuestion.type === 'choice') {
      if (currentQuestion.multiSelect) {
        return Array.isArray(answer) && answer.length > 0;
      }
      return typeof answer === 'string' && answer.length > 0;
    }
    
    return false;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close quiz"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="p-8 md:p-12">
            {!showResults ? (
              <>
                {/* Back button */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-gray-600 hover:text-black mb-6 transition-colors duration-200"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Back</span>
                  </button>
                )}

                {/* Progress */}
                <QuizProgress currentStep={currentStep + 1} totalSteps={totalSteps} />

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <QuestionRenderer
                      question={currentQuestion}
                      answer={answers[currentQuestion.id as keyof QuizAnswers]}
                      onAnswer={handleAnswer}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Next button */}
                <motion.button
                  onClick={handleNext}
                  disabled={!isAnswered()}
                  whileHover={isAnswered() ? { scale: 1.02 } : {}}
                  whileTap={isAnswered() ? { scale: 0.98 } : {}}
                  className={`
                    w-full mt-8 py-4 px-8 rounded-full font-semibold text-lg
                    transition-all duration-200
                    ${isAnswered()
                      ? 'bg-black text-white hover:shadow-lg cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  {isLastStep ? 'See My Recommendation' : 'Continue'}
                </motion.button>
              </>
            ) : (
              recommendation && (
                <QuizResults
                  recommendation={recommendation}
                  userName={answers.name || 'there'}
                  onBookCall={handleBookCall}
                />
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Question renderer component
interface QuestionRendererProps {
  question: QuizQuestion;
  answer: QuizAnswerValue;
  onAnswer: (questionId: string, value: QuizAnswerValue) => void;
}

function QuestionRenderer({ question, answer, onAnswer }: QuestionRendererProps) {
  return (
    <div className="mb-8">
      {/* Question text */}
      <h3 className="text-3xl md:text-4xl font-bold text-black mb-3 leading-tight">
        {question.question}
      </h3>
      
      {/* Subtitle */}
      {question.subtitle && (
        <p className="text-lg text-gray-600 mb-8">
          {question.subtitle}
        </p>
      )}

      {/* Answer options */}
      <div>
        {question.type === 'text' && (
          <input
            type={question.id === 'email' ? 'email' : 'text'}
            value={answer || ''}
            onChange={(e) => onAnswer(question.id, e.target.value)}
            placeholder={question.placeholder}
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-colors duration-200"
            autoFocus
          />
        )}

        {question.type === 'yesno' && (
          <div className="grid grid-cols-2 gap-4">
            <QuizAnswerButton
              value="yes"
              label="Yes"
              selected={answer === 'yes'}
              onClick={() => onAnswer(question.id, 'yes')}
              type="yesno"
            />
            <QuizAnswerButton
              value="no"
              label="No"
              selected={answer === 'no'}
              onClick={() => onAnswer(question.id, 'no')}
              type="yesno"
            />
          </div>
        )}

        {question.type === 'scale' && (
          <QuizAnswerSlider
            min={question.min || 1}
            max={question.max || 10}
            value={answer ? (answer as number) : (question.min || 1)}
            onChange={(value) => onAnswer(question.id, value)}
          />
        )}

        {question.type === 'choice' && question.options && Array.isArray(question.options) && (
          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = question.multiSelect
                ? Array.isArray(answer) && answer.includes(option)
                : answer === option;

              return (
                <QuizAnswerCard
                  key={option}
                  value={option}
                  label={option}
                  selected={isSelected}
                  onClick={() => {
                    if (question.multiSelect) {
                      const currentAnswers = Array.isArray(answer) ? answer : [];
                      const newAnswers = currentAnswers.includes(option)
                        ? currentAnswers.filter(a => a !== option)
                        : [...currentAnswers, option];
                      onAnswer(question.id, newAnswers);
                    } else {
                      onAnswer(question.id, option);
                    }
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

