import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Target } from "lucide-react";

interface AttemptBasedChartProps {
  data: Array<{
    question: number;
    attempts: number;
    attemptScore: number;
  }>;
}

export const AttemptBasedChart = ({ data }: AttemptBasedChartProps) => {
  return (
    <Card className="h-full bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
          <Target className="h-5 w-5" />
          Attempt-Based Scoring
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="question" 
                label={{ value: 'Question Number', position: 'insideBottom', offset: -5 }}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis 
                label={{ value: 'Score (points)', angle: -90, position: 'insideLeft' }}
                stroke="hsl(var(--muted-foreground))"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => {
                  if (name === 'attemptScore') return [value, 'Score'];
                  if (name === 'attempts') return [value, 'Attempts'];
                  return [value, name];
                }}
                labelFormatter={(label) => `Question ${label}`}
              />
              <Bar 
                dataKey="attemptScore" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          Score decreases with attempts (1st: 10pts, 2nd: 7pts, 3rd: 4pts)
        </div>
      </CardContent>
    </Card>
  );
};