import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Bot, Clock, TrendingUp, Phone, Calendar, Zap } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Bot,
      title: "AI Voice Agents",
      description: "Intelligent agents that understand context, handle complex conversations, and provide human-like interactions 24/7."
    },
    {
      icon: Clock,
      title: "24/7 Support Automation",
      description: "Never miss a call. Our AI handles customer inquiries, support tickets, and scheduling around the clock."
    },
    {
      icon: TrendingUp,
      title: "Revenue-Focused Automation",
      description: "Outbound campaigns, lead follow-ups, and appointment booking designed to maximize your conversions."
    }
  ];

  const industries = [
    "Mortgage", "Real Estate", "Dental", "Medical", 
    "Insurance", "Home Services", "Legal", "Financial"
  ];

  const steps = [
    {
      number: "01",
      title: "Discover & Design",
      description: "We analyze your workflow, identify automation opportunities, and design a custom AI solution."
    },
    {
      number: "02",
      title: "Train & Integrate",
      description: "Your AI learns your business, integrates with your systems, and adapts to your specific needs."
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description: "Go live with full support, then continuously improve performance based on real data."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text" data-testid="text-hero-headline">
            Build AI voice agents that never sleep.
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subheadline">
            Modern Technology creates AI systems that handle calls, schedule appointments, and automate marketing — 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="neon-glow-hover" data-testid="button-get-demo">
                <Phone className="mr-2 h-5 w-5" />
                Get a Demo
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="hover-elevate active-elevate-2" data-testid="button-explore-products">
                <Zap className="mr-2 h-5 w-5" />
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12" data-testid="text-what-we-do">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect neon-glow-hover transition-all duration-300 hover:scale-105" data-testid={`card-feature-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12" data-testid="text-who-we-help">
            Who We Help
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-base px-6 py-2 neon-border hover-elevate" 
                data-testid={`badge-industry-${index}`}
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16" data-testid="text-how-it-works">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4" data-testid={`step-${index}`}>
                <div className="inline-block">
                  <div className="font-display text-6xl font-bold gradient-text">{step.number}</div>
                </div>
                <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
