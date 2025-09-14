import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface Question {
  id: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  timeSpent: number;
  isCorrect: boolean;
}

interface DetailedBreakdownProps {
  questions: Question[];
}

export const DetailedBreakdown = ({ questions }: DetailedBreakdownProps) => {
  return (
    <Card className="bg-gradient-to-br from-card to-muted/20 border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Detailed Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Question</TableHead>
                <TableHead className="font-semibold">Your Answer</TableHead>
                <TableHead className="font-semibold">Correct Answer</TableHead>
                <TableHead className="font-semibold">Time (s)</TableHead>
                <TableHead className="font-semibold">Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((question) => (
                <TableRow key={question.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium max-w-xs truncate">
                    {question.question}
                  </TableCell>
                  <TableCell className={question.isCorrect ? "text-success" : "text-destructive"}>
                    {question.userAnswer}
                  </TableCell>
                  <TableCell className="text-success font-medium">
                    {question.correctAnswer}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {question.timeSpent.toFixed(1)}
                  </TableCell>
                  <TableCell>
                    {question.isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};