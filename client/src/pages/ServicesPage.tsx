import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, HeadphonesIcon, Calendar, PhoneOutgoing, Mail, MessageSquare, Share2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Bot,
      title: "AI Voice Agents",
      description: "Conversational AI that handles inbound calls with natural language understanding",
      features: [
        "1000+ voice options (dialects, genders, tones)",
        "Multi-language support (50+ languages)",
        "Custom knowledge base ingestion",
        "Dynamic conversation flows",
        "Real-time sentiment analysis","Strategic Marketing Journies", "Holiday Outreach", "Educational Outreach", "Review Phishing", "Product Upsells", "Many more....."
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Customer Service Rep (AI)",
      description: "Always-on support that never sleeps, never takes breaks",
      features: [
        "Instant response to common queries",
        "Smart ticket routing and escalation",
        "Customer data integration",
        "Call summary and transcription",
        "CRM integration (Salesforce, HubSpot, etc.)"
      ]
    },
    {
      icon: Calendar,
      title: "Appointment Scheduler AI",
      description: "Intelligent booking system that manages your calendar",
      features: [
        "Calendar integration (Google, Outlook, iCal)",
        "Timezone-aware scheduling",
        "Automated reminders (SMS/Email)",
        "Rescheduling and cancellations",
        "Buffer time and availability management"
      ]
    },
    {
      icon: PhoneOutgoing,
      title: "Outbound Call Agents",
      description: "Proactive AI that reaches out to leads and customers",
      features: [
        "Lead qualification and scoring",
        "Follow-up campaigns",
        "Survey and feedback collection",
        "Re-engagement sequences",
        "Custom call scripts and branching logic"
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      description: "Personalized email campaigns driven by AI insights",
      features: [
        "Behavioral trigger emails",
        "A/B testing and optimization",
        "Segmentation and personalization",
        "Drip campaigns",
        "Performance analytics"
      ]
    },
    {
      icon: MessageSquare,
      title: "SMS Marketing Automation",
      description: "Text-based engagement that reaches customers instantly",
      features: [
        "Appointment confirmations",
        "Promotional campaigns",
        "Two-way conversations",
        "Compliance management (TCPA, GDPR)",
        "Link tracking and analytics"
      ]
    },
    {
      icon: Share2,
      title: "Organic Social Media Marketing Automation",
      description: "AI-powered content creation and posting across platforms",
      features: [
        "Content generation and scheduling",
        "Multi-platform posting (LinkedIn, Twitter, Facebook)",
        "Engagement monitoring",
        "Brand voice consistency",
        "Performance insights"
      ]
    }
  ];

  const capabilities = [
    "1000+ Voices & Dialects",
    "Multi-Language Support",
    "Custom Knowledge Base",
    "CRM Integration",
    "Calendar Integration",
    "API Connectivity",
    "Custom Prompts & Flows",
    "Real-Time Analytics"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            Individual products and stradegy designed and personalized to transform your business operations
          </p>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">Key Capabilities</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {capabilities.map((capability, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-base px-4 py-2 neon-border" 
                data-testid={`badge-capability-${index}`}
              >
                {capability}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect neon-glow-hover transition-all duration-300 hover:scale-[1.02]" 
              data-testid={`card-service-${index}`}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-md bg-primary/20 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
