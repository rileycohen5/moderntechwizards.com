import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Brain, Calendar, Mail, MessageSquare, Share2, Video, Database, BarChart, Headphones, Users } from "lucide-react";
import { Link } from "wouter";

export default function ProductsPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const tiers = [
    {
      name: "Starter AI Presence",
      basePrice: 750,
      description: "Essential AI calling for growing businesses",
      features: [
        { text: "24/7 AI Voice Agent (1,000 minutes)", icon: Phone },
        { text: "Custom Knowledge Base", icon: Brain },
        { text: "Custom Voices", icon: Headphones },
        { text: "Call Summaries & Transcripts", icon: MessageSquare },
        { text: "Analytics Dashboard", icon: BarChart },
        { text: "Basic Reporting", icon: Database },
        { text: "Email Support", icon: Mail },
        { text: "Business Hours Phone Support", icon: Phone },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth Automations",
      basePrice: 1500,
      description: "Connected AI that works with your existing tools",
      features: [
        { text: "Everything in Starter", icon: Check },
        { text: "Outbound AI Agent", icon: Phone },
        { text: "Appointment Scheduling", icon: Calendar },
        { text: "Missed-call Follow-ups", icon: MessageSquare },
        { text: "Customer Check-Ins", icon: Users },
        { text: "Review Generation", icon: Share2 },
        { text: "Lead Nurturing", icon: Brain },
        { text: "CRM Integrations", icon: Database },
        { text: "Calendar Integrations", icon: Calendar },
        { text: "Custom Reports", icon: BarChart },
        { text: "Priority Support", icon: Headphones },
      ],
      cta: "Scale My Business",
      popular: true,
    },
    {
      name: "Full AI Engagement Suite",
      basePrice: 3000,
      description: "Complete marketing and sales automation platform",
      features: [
        { text: "Everything in Growth", icon: Check },
        { text: "Email Marketing Automation", icon: Mail },
        { text: "SMS Marketing Automation", icon: MessageSquare },
        { text: "Organic Social Media Management (3–7 posts/week)", icon: Share2 },
        { text: "AI Copywriting + Optional Video", icon: Video },
        { text: "Quarterly Strategy Sessions", icon: Users },
        { text: "Enterprise Customizations", icon: Brain },
      ],
      cta: "Go Full Automation",
      popular: false,
    },
  ];

  const comparisonFeatures = [
    { 
      name: "Voice AI", 
      starter: "24/7 AI Voice Agent", 
      growth: "24/7 AI Voice Agent", 
      suite: "24/7 AI Voice Agent",
      icon: Phone 
    },
    { 
      name: "Minutes Included", 
      starter: "1,000 minutes/mo", 
      growth: "3,000 minutes/mo", 
      suite: "10,000 minutes/mo",
      icon: BarChart 
    },
    { 
      name: "Outbound Automation", 
      starter: false, 
      growth: true, 
      suite: true,
      icon: Phone 
    },
    { 
      name: "CRM Integration", 
      starter: false, 
      growth: true, 
      suite: true,
      icon: Database 
    },
    { 
      name: "Calendar Integration", 
      starter: false, 
      growth: true, 
      suite: true,
      icon: Calendar 
    },
    { 
      name: "Reporting", 
      starter: "Basic", 
      growth: "Custom", 
      suite: "Advanced Analytics",
      icon: BarChart 
    },
    { 
      name: "Email Automation", 
      starter: false, 
      growth: false, 
      suite: true,
      icon: Mail 
    },
    { 
      name: "SMS Automation", 
      starter: false, 
      growth: false, 
      suite: true,
      icon: MessageSquare 
    },
    { 
      name: "Social Media Posts", 
      starter: false, 
      growth: false, 
      suite: "3–7 posts/week",
      icon: Share2 
    },
    { 
      name: "Support Level", 
      starter: "Email + Business Hours", 
      growth: "Priority Support", 
      suite: "Dedicated Account Manager",
      icon: Headphones 
    },
    { 
      name: "AI Video", 
      starter: false, 
      growth: false, 
      suite: "Optional",
      icon: Video 
    },
  ];

  const getPrice = (basePrice: number) => {
    const yearlyPrice = Math.round(basePrice * 0.9);
    return billingCycle === "monthly" ? basePrice : yearlyPrice;
  };

  const renderFeatureCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-primary mx-auto" />
      ) : (
        <span className="text-muted-foreground">—</span>
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 gradient-text animate-pulse-slow" data-testid="text-page-title">
            AI Automation Bundles
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-page-description">
            Choose the level of automation that fits your business.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${billingCycle === "monthly" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                billingCycle === "yearly" ? "bg-primary" : "bg-muted"
              }`}
              data-testid="toggle-billing"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-background rounded-full shadow-md transition-transform duration-300 ${
                  billingCycle === "yearly" ? "translate-x-8" : ""
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === "yearly" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Yearly
              <Badge className="ml-2 bg-primary text-primary-foreground">10% OFF</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`glass-effect relative transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                tier.popular ? "neon-border neon-glow" : ""
              }`}
              data-testid={`card-tier-${index}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground animate-pulse">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-display text-2xl md:text-3xl">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold gradient-text" data-testid={`text-price-${index}`}>
                    ${getPrice(tier.basePrice)}
                  </span>
                  <span className="text-muted-foreground text-lg">/month</span>
                  {billingCycle === "yearly" && (
                    <div className="text-sm text-muted-foreground mt-2">
                      <span className="line-through">${tier.basePrice}</span> - Save ${tier.basePrice - getPrice(tier.basePrice)}/mo
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button
                    className="w-full neon-glow-hover font-semibold text-lg py-6"
                    variant={tier.popular ? "default" : "outline"}
                    data-testid={`button-cta-${index}`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="glass-effect rounded-lg p-6 md:p-10 neon-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/30">
                  <th className="text-left py-5 px-4 font-display text-lg">Feature</th>
                  <th className="text-center py-5 px-4 font-display text-lg">Starter</th>
                  <th className="text-center py-5 px-4 font-display text-lg bg-primary/10 rounded-t-lg">
                    Growth
                    <Badge className="ml-2 bg-primary text-primary-foreground text-xs">Popular</Badge>
                  </th>
                  <th className="text-center py-5 px-4 font-display text-lg">Suite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <tr
                      key={index}
                      className="border-b border-border/50 hover-elevate transition-all duration-200"
                      data-testid={`row-comparison-${index}`}
                    >
                      <td className="py-5 px-4">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary" />
                          <span className="font-medium">{feature.name}</span>
                        </div>
                      </td>
                      <td className="text-center py-5 px-4">{renderFeatureCell(feature.starter)}</td>
                      <td className="text-center py-5 px-4 bg-primary/5">{renderFeatureCell(feature.growth)}</td>
                      <td className="text-center py-5 px-4">{renderFeatureCell(feature.suite)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center glass-effect rounded-lg p-10">
          <h3 className="font-display text-3xl font-bold mb-4 gradient-text">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a consultation to discuss which automation bundle is right for you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="neon-glow-hover font-semibold px-8 py-6 text-lg" data-testid="button-schedule-consultation">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
