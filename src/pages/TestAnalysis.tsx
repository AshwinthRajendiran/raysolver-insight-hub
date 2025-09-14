import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScoreCard } from "@/components/ScoreCard";
import { TimeBasedChart } from "@/components/TimeBasedChart";
import { AttemptBasedChart } from "@/components/AttemptBasedChart";
import { DetailedBreakdown } from "@/components/DetailedBreakdown";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Brain } from "lucide-react";

// Mock data for the test analysis
const mockData = {
  score: 85,
  totalQuestions: 10,
  correctAnswers: 8,
  incorrectAnswers: 2,
  timeBasedData: [
    { responseTime: 2.1, timeBasedScore: 10, question: 1 },
    { responseTime: 3.5, timeBasedScore: 8, question: 2 },
    { responseTime: 1.8, timeBasedScore: 10, question: 3 },
    { responseTime: 4.2, timeBasedScore: 6, question: 4 },
    { responseTime: 2.9, timeBasedScore: 8, question: 5 },
    { responseTime: 5.1, timeBasedScore: 4, question: 6 },
    { responseTime: 2.3, timeBasedScore: 10, question: 7 },
    { responseTime: 3.8, timeBasedScore: 8, question: 8 },
    { responseTime: 1.9, timeBasedScore: 10, question: 9 },
    { responseTime: 4.5, timeBasedScore: 6, question: 10 },
  ],
  attemptBasedData: [
    { question: 1, attempts: 1, attemptScore: 10 },
    { question: 2, attempts: 2, attemptScore: 7 },
    { question: 3, attempts: 1, attemptScore: 10 },
    { question: 4, attempts: 3, attemptScore: 4 },
    { question: 5, attempts: 1, attemptScore: 10 },
    { question: 6, attempts: 3, attemptScore: 4 },
    { question: 7, attempts: 1, attemptScore: 10 },
    { question: 8, attempts: 2, attemptScore: 7 },
    { question: 9, attempts: 1, attemptScore: 10 },
    { question: 10, attempts: 1, attemptScore: 10 },
  ],
  questions: [
    {
      id: 1,
      question: "What is the derivative of x²?",
      userAnswer: "2x",
      correctAnswer: "2x",
      timeSpent: 2.1,
      isCorrect: true,
    },
    {
      id: 2,
      question: "Solve for x: 2x + 5 = 13",
      userAnswer: "4",
      correctAnswer: "4",
      timeSpent: 3.5,
      isCorrect: true,
    },
    {
      id: 3,
      question: "What is the area of a circle with radius 3?",
      userAnswer: "9π",
      correctAnswer: "9π",
      timeSpent: 1.8,
      isCorrect: true,
    },
    {
      id: 4,
      question: "Factor: x² - 5x + 6",
      userAnswer: "(x-2)(x-4)",
      correctAnswer: "(x-2)(x-3)",
      timeSpent: 4.2,
      isCorrect: false,
    },
    {
      id: 5,
      question: "What is sin(π/2)?",
      userAnswer: "1",
      correctAnswer: "1",
      timeSpent: 2.9,
      isCorrect: true,
    },
    {
      id: 6,
      question: "Integrate: ∫2x dx",
      userAnswer: "x²",
      correctAnswer: "x² + C",
      timeSpent: 5.1,
      isCorrect: false,
    },
    {
      id: 7,
      question: "What is log₂(8)?",
      userAnswer: "3",
      correctAnswer: "3",
      timeSpent: 2.3,
      isCorrect: true,
    },
    {
      id: 8,
      question: "Solve: √(x + 4) = 5",
      userAnswer: "21",
      correctAnswer: "21",
      timeSpent: 3.8,
      isCorrect: true,
    },
    {
      id: 9,
      question: "What is the slope of y = 3x + 2?",
      userAnswer: "3",
      correctAnswer: "3",
      timeSpent: 1.9,
      isCorrect: true,
    },
    {
      id: 10,
      question: "Factor: x² - 9",
      userAnswer: "(x-3)(x+3)",
      correctAnswer: "(x-3)(x+3)",
      timeSpent: 4.5,
      isCorrect: true,
    },
  ],
};

const TestAnalysis = () => {
  const [showScore, setShowScore] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  RapidSolver
                </h1>
                <p className="text-sm text-muted-foreground">Educational Platform</p>
              </div>
            </div>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => setShowScore(true)}
              className="shadow-lg"
            >
              <Award className="h-4 w-4" />
              Show My Score
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showScore ? (
          <Card className="text-center py-16 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent>
              <div className="max-w-md mx-auto space-y-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-primary to-accent w-fit mx-auto">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Test Completed!</h2>
                <p className="text-muted-foreground">
                  Your test has been submitted successfully. Click "Show My Score" to view your detailed analysis.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Score Card */}
            <div className="grid grid-cols-1 gap-8">
              <ScoreCard
                score={mockData.score}
                totalQuestions={mockData.totalQuestions}
                correctAnswers={mockData.correctAnswers}
                incorrectAnswers={mockData.incorrectAnswers}
              />
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TimeBasedChart data={mockData.timeBasedData} />
              <AttemptBasedChart data={mockData.attemptBasedData} />
            </div>

            {/* Detailed Breakdown */}
            <DetailedBreakdown questions={mockData.questions} />
          </div>
        )}
      </main>
    </div>
  );
};

export default TestAnalysis;