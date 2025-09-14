import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ChevronRight, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Welcome to RapidSolver
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced test analysis and performance tracking for educational excellence
            </p>
          </div>

          <div className="flex justify-center">
            <Link to="/test-analysis">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                View Test Analysis
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Score Analysis</h3>
                <p className="text-muted-foreground">
                  Detailed breakdown of your performance with accuracy metrics
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Speed Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor response time and identify optimization opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Smart Insights</h3>
                <p className="text-muted-foreground">
                  AI-powered recommendations for improved learning outcomes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
