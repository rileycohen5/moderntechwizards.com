import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Brain, Calendar, Mail, MessageSquare, Share2, BarChart, Headphones } from "lucide-react";
import { Link } from "wouter";
import { TooltipInfo } from "@/components/ui/tooltip-info";

export default function ProductsPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const tiers = [
    {
      name: "Basic",
      monthlyPrice: 1000,
      yearlyPrice: 750,
      description: "Essential AI calling for growing businesses",
      features: [
        { 
          text: "24/7 AI Voice Agent (1,000 minutes)", 
          icon: Phone,
          tooltip: "Handles all inbound calls day or night. Captures caller intent, answers FAQs, collects appointment preferences, and logs summaries."
        },
        { 
          text: "Custom Knowledge Base", 
          icon: Brain,
          tooltip: "Upload documents, FAQs, service details, and scripts so the AI responds exactly like your business."
        },
        { 
          text: "Custom Voices", 
          icon: Headphones,
          tooltip: "Choose from thousands of AI voices matching gender, tone, dialect, and brand personality."
        },
        { 
          text: "Call Summaries & Transcripts", 
          icon: MessageSquare,
          tooltip: "Automatically generate clean summaries and transcripts for every call."
        },
        { 
          text: "Analytics Dashboard", 
          icon: BarChart,
          tooltip: "See call volume, questions asked, scheduled appointments, and more."
        },
        { 
          text: "Excellent Customer Support", 
          icon: Headphones,
          tooltip: "Fast, responsive support whenever you need help."
        },
      ],
      cta: "Start Basic",
      popular: false,
    },
    {
      name: "Advanced",
      monthlyPrice: 2250,
      yearlyPrice: 1800,
      description: "Connected AI that works with your existing tools",
      features: [
        { 
          text: "Everything in Basic (2,500 total AI call minutes)", 
          icon: Check,
          tooltip: "Includes all Basic features plus expanded AI call minutes."
        },
        { 
          text: "Outbound AI Agent", 
          icon: Phone,
          tooltip: "AI places outbound calls for reminders, check-ins, rating phishing, reactivation, and lead nurturing."
        },
        { 
          text: "Appointment Scheduling", 
          icon: Calendar,
          tooltip: "AI books, reschedules, or cancels appointments through integrated calendars."
        },
        { 
          text: "Missed-call Follow-ups", 
          icon: MessageSquare,
          tooltip: "AI instantly returns missed calls to keep leads warm."
        },
        { 
          text: "CRM Integrations", 
          icon: Brain,
          tooltip: "Custom integration with CRM systems like HubSpot, Salesforce, Zoho, and more."
        },
        { 
          text: "Calendar Integrations", 
          icon: Calendar,
          tooltip: "Syncs with Google or Outlook calendar for real-time availability."
        },
        { 
          text: "Custom Reports", 
          icon: BarChart,
          tooltip: "We build reporting dashboards tailored to your business KPIs."
        },
      ],
      cta: "Upgrade to Advanced",
      popular: true,
    },
    {
      name: "Suite",
      monthlyPrice: 3250,
      yearlyPrice: 2700,
      description: "Complete marketing and sales automation platform",
      features: [
        { 
          text: "Everything in Advanced", 
          icon: Check,
          tooltip: "Everything in Advanced, plus multi-system upgrades and priority enhancements."
        },
        { 
          text: "Email Marketing Automation", 
          icon: Mail,
          tooltip: "Branded email campaigns: holidays, birthdays, promotions, educationals, cold outreach, review phishing, and drip sequences."
        },
        { 
          text: "SMS Marketing Automation", 
          icon: MessageSquare,
          tooltip: "SMS campaigns for holidays, promotions, reminders, surveys, and reactivation."
        },
        { 
          text: "Organic Social Media Management (3–7 posts/week)", 
          icon: Share2,
          tooltip: "AI-generated social content + posting for Instagram, Facebook, and X."
        },
      ],
      cta: "Go Full Automation",
      popular: false,
    },
  ];

  const comparisonFeatures = [
    { 
      name: "Voice AI Coverage", 
      basic: "24/7 Inbound Only", 
      advanced: "24/7 Inbound + Outbound", 
      suite: "24/7 Inbound + Outbound",
      icon: Phone 
    },
    { 
      name: "AI Call Minutes", 
      basic: "1,000 minutes/mo", 
      advanced: "2,500 minutes/mo", 
      suite: "2,500+ minutes/mo",
      icon: BarChart 
    },
    { 
      name: "Custom Knowledge Base", 
      basic: true, 
      advanced: true, 
      suite: true,
      icon: Brain 
    },
    { 
      name: "Custom AI Voices", 
      basic: true, 
      advanced: true, 
      suite: true,
      icon: Headphones 
    },
    { 
      name: "Call Summaries & Transcripts", 
      basic: true, 
      advanced: true, 
      suite: true,
      icon: MessageSquare 
    },
    { 
      name: "Outbound AI Calling", 
      basic: false, 
      advanced: true, 
      suite: true,
      icon: Phone 
    },
    { 
      name: "Appointment Scheduling", 
      basic: false, 
      advanced: true, 
      suite: true,
      icon: Calendar 
    },
    { 
      name: "Missed-call Follow-ups", 
      basic: false, 
      advanced: true, 
      suite: true,
      icon: MessageSquare 
    },
    { 
      name: "CRM Integration", 
      basic: false, 
      advanced: true, 
      suite: true,
      icon: Brain 
    },
    { 
      name: "Calendar Integration", 
      basic: false, 
      advanced: true, 
      suite: true,
      icon: Calendar 
    },
    { 
      name: "Analytics & Reporting", 
      basic: "Basic Dashboard", 
      advanced: "Custom Reports", 
      suite: "Custom Reports",
      icon: BarChart 
    },
    { 
      name: "Email Marketing Automation", 
      basic: false, 
      advanced: false, 
      suite: true,
      icon: Mail 
    },
    { 
      name: "SMS Marketing Automation", 
      basic: false, 
      advanced: false, 
      suite: true,
      icon: MessageSquare 
    },
    { 
      name: "Social Media Management", 
      basic: false, 
      advanced: false, 
      suite: "3–7 posts/week",
      icon: Share2 
    },
    { 
      name: "Customer Support", 
      basic: "Email + Phone", 
      advanced: "Priority Support", 
      suite: "Priority Support",
      icon: Headphones 
    },
  ];

  const getPrice = (tier: typeof tiers[0]) => {
    return billingCycle === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
  };

  const getSavings = (tier: typeof tiers[0]) => {
    return tier.monthlyPrice - tier.yearlyPrice;
  };

  const renderFeatureCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-primary mx-auto" data-testid="icon-check" />
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
            AI Products & Bundles
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-page-description">
            Choose the automation level that fits your business.
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
              <Badge className="ml-2 bg-primary text-primary-foreground">Save 25%</Badge>
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
                    ${getPrice(tier).toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-lg">/month</span>
                  {billingCycle === "yearly" && (
                    <div className="text-sm text-muted-foreground mt-2">
                      <span className="line-through">${tier.monthlyPrice.toLocaleString()}</span> - Save ${getSavings(tier)}/mo
                    </div>
                  )}
                  {billingCycle === "yearly" && (
                    <div className="text-xs text-muted-foreground mt-1">
                      Billed annually at ${(tier.yearlyPrice * 12).toLocaleString()}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <li key={featureIndex} className="flex items-start gap-3" data-testid={`feature-${index}-${featureIndex}`}>
                        <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed flex-1">{feature.text}</span>
                        <TooltipInfo content={feature.tooltip} />
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full" data-testid={`link-tier-cta-${index}`}>
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
                  <th className="text-center py-5 px-4 font-display text-lg">Basic</th>
                  <th className="text-center py-5 px-4 font-display text-lg bg-primary/10 rounded-t-lg">
                    Advanced
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
                      <td className="text-center py-5 px-4">{renderFeatureCell(feature.basic)}</td>
                      <td className="text-center py-5 px-4 bg-primary/5">{renderFeatureCell(feature.advanced)}</td>
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
            Schedule a consultation to discuss which automation product is right for you.
          </p>
          <Link href="/contact" data-testid="link-contact-cta">
            <Button size="lg" className="neon-glow-hover font-semibold px-8 py-6 text-lg" data-testid="button-schedule-consultation">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
