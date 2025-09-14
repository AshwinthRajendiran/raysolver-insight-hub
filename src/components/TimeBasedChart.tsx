import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock } from "lucide-react";

interface TimeBasedChartProps {
  data: Array<{
    responseTime: number;
    timeBasedScore: number;
    question: number;
  }>;
}

export const TimeBasedChart = ({ data }: TimeBasedChartProps) => {
  return (
    <Card className="h-full bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Time-Based Scoring
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="responseTime" 
                label={{ value: 'Response Time (seconds)', position: 'insideBottom', offset: -5 }}
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
                formatter={(value, name) => [value, name === 'timeBasedScore' ? 'Time Score' : name]}
                labelFormatter={(label) => `Response Time: ${label}s`}
              />
              <Line 
                type="monotone" 
                dataKey="timeBasedScore" 
                stroke="hsl(var(--accent))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--accent))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          Score decreases as response time increases (10pts &lt;2s, 8pts 2-4s, 6pts 4-6s, etc.)
        </div>
      </CardContent>
    </Card>
  );
};