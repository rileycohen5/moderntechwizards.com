import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function BundlesPage() {
  const tiers = [
    {
      name: "Core AI Voice Agent",
      price: "$1,497",
      period: "/month",
      description: "Essential AI calling for growing businesses",
      features: [
        "24/7 AI voice agent",
        "Basic call flows",
        "Standard knowledge base",
        "Call summaries & transcripts",
        "Up to 1,000 calls/month",
        "Email support"
      ],
      popular: false
    },
    {
      name: "AI Agent + Integrations",
      price: "$2,497",
      period: "/month",
      description: "Connected AI that works with your existing tools",
      features: [
        "Everything in Core",
        "Calendar integration",
        "CRM integration (Salesforce, HubSpot)",
        "Intelligent scheduling",
        "SMS confirmations",
        "Up to 3,000 calls/month",
        "Priority support",
        "Custom voice training"
      ],
      popular: true
    },
    {
      name: "Full Automation Suite",
      price: "$3,997",
      period: "/month",
      description: "Complete marketing and sales automation platform",
      features: [
        "Everything in AI Agent + Integrations",
        "Outbound calling campaigns",
        "Email marketing automation",
        "SMS marketing automation",
        "Organic social media automation",
        "Custom workflow builder",
        "Up to 10,000 calls/month",
        "Dedicated account manager",
        "Advanced analytics & reporting"
      ],
      popular: false
    }
  ];

  const comparisonFeatures = [
    { name: "24/7 AI Voice Agent", core: true, plus: true, suite: true },
    { name: "Call Summaries", core: true, plus: true, suite: true },
    { name: "Basic Knowledge Base", core: true, plus: true, suite: true },
    { name: "Calendar Integration", core: false, plus: true, suite: true },
    { name: "CRM Integration", core: false, plus: true, suite: true },
    { name: "SMS Confirmations", core: false, plus: true, suite: true },
    { name: "Outbound Campaigns", core: false, plus: false, suite: true },
    { name: "Email Automation", core: false, plus: false, suite: true },
    { name: "SMS Marketing", core: false, plus: false, suite: true },
    { name: "Social Media Automation", core: false, plus: false, suite: true },
    { name: "Custom Workflows", core: false, plus: false, suite: true },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            Pricing Bundles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            Choose the perfect package for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`glass-effect relative transition-all duration-300 hover:scale-105 ${
                tier.popular ? 'neon-border neon-glow' : ''
              }`}
              data-testid={`card-tier-${index}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-display text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold gradient-text" data-testid={`text-price-${index}`}>
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button 
                    className="w-full neon-glow-hover" 
                    variant={tier.popular ? "default" : "outline"}
                    data-testid={`button-get-started-${index}`}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="glass-effect rounded-lg p-8">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Core</th>
                  <th className="text-center py-4 px-4">Plus</th>
                  <th className="text-center py-4 px-4">Suite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border/50" data-testid={`row-comparison-${index}`}>
                    <td className="py-4 px-4">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {feature.core ? <Check className="h-5 w-5 text-primary mx-auto" /> : "—"}
                    </td>
                    <td className="text-center py-4 px-4">
                      {feature.plus ? <Check className="h-5 w-5 text-primary mx-auto" /> : "—"}
                    </td>
                    <td className="text-center py-4 px-4">
                      {feature.suite ? <Check className="h-5 w-5 text-primary mx-auto" /> : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
