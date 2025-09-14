import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Target } from "lucide-react";

interface ScoreCardProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

export const ScoreCard = ({ score, totalQuestions, correctAnswers, incorrectAnswers }: ScoreCardProps) => {
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <Card className="h-full bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-lg">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
          <Target className="h-6 w-6" />
          Your Score
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-6xl font-bold text-primary mb-2">{score}</div>
          <div className="text-lg text-muted-foreground">out of {totalQuestions * 10} points</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-semibold text-success">Correct</span>
            </div>
            <div className="text-2xl font-bold text-success">{correctAnswers}</div>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <XCircle className="h-5 w-5 text-destructive" />
              <span className="font-semibold text-destructive">Incorrect</span>
            </div>
            <div className="text-2xl font-bold text-destructive">{incorrectAnswers}</div>
          </div>
        </div>

        <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
          <div className="text-lg font-semibold text-primary mb-1">Accuracy</div>
          <div className="text-3xl font-bold text-primary">{accuracy}%</div>
        </div>
      </CardContent>
    </Card>
  );
};