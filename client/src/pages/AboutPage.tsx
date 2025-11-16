import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Target, Lightbulb, Zap } from "lucide-react";
import profileImage from "@assets/1757973172115_1763309380990.jpg";

export default function AboutPage() {
  const beliefs = [
    {
      icon: Target,
      title: "AI Should Work For You",
      description: "Technology should adapt to your workflow, not the other way around. We build AI that fits seamlessly into how you already operate."
    },
    {
      icon: Lightbulb,
      title: "Automation Amplifies Humans",
      description: "The best AI doesn't replace your team—it empowers them. Handle the routine so your people can focus on what matters most."
    },
    {
      icon: Zap,
      title: "Speed Wins",
      description: "In business, responsiveness is everything. AI that never sleeps means you never miss an opportunity to connect with a customer."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            About Modern Technology
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <p className="text-lg text-center leading-relaxed" data-testid="text-mission">
                  We exist to make advanced AI accessible to businesses of all sizes. Our mission is to build 
                  intelligent systems that handle the repetitive, time-consuming tasks that keep your team from 
                  doing their best work—so you can focus on growth, innovation, and exceptional customer experiences.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold mb-8 text-center">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beliefs.map((belief, index) => (
                <Card 
                  key={index} 
                  className="glass-effect neon-glow-hover transition-all duration-300"
                  data-testid={`card-belief-${index}`}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-md bg-primary/20 flex items-center justify-center mx-auto">
                      <belief.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{belief.title}</h3>
                    <p className="text-muted-foreground">{belief.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold mb-6 text-center">Why Modern Technology?</h2>
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-4">
                <div className="space-y-4" data-testid="text-why-us">
                  <p className="text-lg leading-relaxed">
                    We're not just another AI vendor. We're a team of engineers, designers, and business strategists 
                    who understand that great technology is invisible—it just works.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Every solution we build starts with understanding your unique challenges. We don't force you into 
                    a template. We design, train, and deploy AI systems that speak your language, understand your 
                    customers, and integrate with your existing tools.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our clients see results fast: higher response rates, more booked appointments, improved customer 
                    satisfaction, and teams that can finally focus on high-value work instead of repetitive tasks.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold mb-6 text-center">Our Story</h2>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-center" data-testid="text-story">
                  Modern Technology was founded on a simple observation: businesses waste countless hours on 
                  repetitive communication tasks that AI could handle better, faster, and more consistently. 
                  We set out to change that—building voice agents, automation systems, and intelligent workflows 
                  that transform how companies operate. Today, we partner with businesses across industries to 
                  deploy AI that actually delivers results.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold mb-6 text-center">About Riley Cohen</h2>
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-6">
                <div className="text-center mb-6">
                  <Avatar className="w-32 h-32 mx-auto mb-4 neon-border">
                    <AvatarImage src={profileImage} alt="Riley Cohen" />
                    <AvatarFallback>RC</AvatarFallback>
                  </Avatar>
                  <h3 className="font-display text-2xl font-bold mb-2 gradient-text">Riley Cohen</h3>
                  <p className="text-lg text-muted-foreground">Founder & Lead AI Architect</p>
                </div>
                
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Riley Cohen is an AI engineer and data science leader who has spent the last five years building 
                    advanced automation and voice AI systems for the mortgage industry. A top-of-class Applied Mathematics 
                    & Data Science graduate from UC Berkeley, Riley specializes in real-time AI voice agents, LLM engineering, 
                    and scalable data platforms.
                  </p>

                  <p>
                    As Director of AI and Data Engineering at Insellerate, Riley led the design and deployment of 
                    enterprise-grade AI products used by lenders nationwide—covering voice agents, predictive analytics, 
                    compliance automation, and large-scale data integrations. His work spans AI product development, 
                    API engineering, advanced call intelligence, and cross-team technical leadership.
                  </p>

                  <p>
                    Riley founded Modern Technology to bring this expertise to businesses looking to modernize their 
                    operations, automate workflows, and leverage cutting-edge AI. He focuses on building intelligent 
                    voice agents, custom integrations, and high-impact automation systems that help companies operate 
                    faster, smarter, and with 24/7 efficiency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
