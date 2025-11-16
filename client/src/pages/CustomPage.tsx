import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Workflow, Boxes, FileText, LineChart } from "lucide-react";

export default function CustomPage() {
  const customExamples = [
    {
      icon: Workflow,
      title: "Industry-Specific Call Flows",
      description: "Tailored conversation scripts and decision trees designed for your specific industry requirements, compliance needs, and customer expectations."
    },
    {
      icon: Boxes,
      title: "Multi-System Integrations",
      description: "Connect AI agents to your CRM, ERP, billing systems, and custom databases. We build the connectors so your AI has access to everything it needs."
    },
    {
      icon: FileText,
      title: "Document & Task Automation",
      description: "Automatically generate contracts, send follow-up emails, create tasks in your project management tool, and update records across platforms."
    },
    {
      icon: LineChart,
      title: "Data-Driven Optimization",
      description: "Custom analytics dashboards, A/B testing frameworks, and machine learning models that continuously improve performance based on your unique metrics."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            Custom AI Solutions Built Around Your Workflow
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            When off-the-shelf doesn't cut it, we build exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {customExamples.map((example, index) => (
            <Card 
              key={index} 
              className="glass-effect neon-glow-hover transition-all duration-300 hover:scale-105"
              data-testid={`card-example-${index}`}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-md bg-primary/20 flex items-center justify-center mb-4">
                  <example.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display">{example.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{example.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-effect text-center p-12 neon-border neon-glow">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl font-bold">Ready to Build Something Custom?</h2>
            <p className="text-lg text-muted-foreground">
              Share your vision with us. We'll analyze your workflow, identify opportunities, and design a solution that fits perfectly.
            </p>
            <Link href="/contact">
              <Button size="lg" className="neon-glow-hover" data-testid="button-book-session">
                Book a Custom Strategy Session
              </Button>
            </Link>
          </div>
        </Card>

        <div className="mt-16 glass-effect rounded-lg p-8">
          <h3 className="font-display text-2xl font-bold mb-6">What Makes Custom Different?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <p className="text-muted-foreground">Built for your exact workflow</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <p className="text-muted-foreground">Unlimited integration possibilities</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">1:1</div>
              <p className="text-muted-foreground">Dedicated engineering support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
