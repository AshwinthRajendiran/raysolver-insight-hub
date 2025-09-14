import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingDown } from "lucide-react";

interface SpeedAccuracyChartProps {
  data: Array<{
    responseTime: number;
    score: number;
    question: number;
  }>;
}

export const SpeedAccuracyChart = ({ data }: SpeedAccuracyChartProps) => {
  return (
    <Card className="h-full bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
          <TrendingDown className="h-5 w-5" />
          Speed vs. Accuracy
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
                formatter={(value, name) => [value, name === 'score' ? 'Score' : name]}
                labelFormatter={(label) => `Response Time: ${label}s`}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          Trend shows the relationship between response speed and accuracy
        </div>
      </CardContent>
    </Card>
  );
};