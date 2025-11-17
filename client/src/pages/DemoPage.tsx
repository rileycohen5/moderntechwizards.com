import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Pause } from "lucide-react";

interface AudioDemo {
  id: string;
  title: string;
  category: string;
  industry: string;
  filePath: string;
  lengthSeconds: number;
  language: string;
  voiceProfile: string;
  description: string;
}

export default function DemoPage() {
  const [demos, setDemos] = useState<AudioDemo[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/demo-audio.json')
      .then(res => res.json())
      .then(data => setDemos(data))
      .catch(err => console.error('Failed to load demos:', err));
  }, []);

  const categories = Array.from(new Set(demos.map(d => d.category)));

  const handlePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
      console.log('Paused:', id);
    } else {
      setPlayingId(id);
      console.log('Playing:', id);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            Hear Modern Tech Wizards in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            Listen to real AI conversations across industries and use cases
          </p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-8" data-testid={`text-category-${catIndex}`}>
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {demos
                .filter(demo => demo.category === category)
                .map((demo, demoIndex) => (
                  <Card 
                    key={demo.id} 
                    className="glass-effect neon-glow-hover transition-all duration-300"
                    data-testid={`card-demo-${demo.id}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{demo.title}</CardTitle>
                          <div className="flex gap-2 mb-3">
                            <Badge variant="outline">{demo.industry}</Badge>
                            <Badge variant="outline">{demo.lengthSeconds}s</Badge>
                          </div>
                        </div>
                        <Button
                          size="icon"
                          variant={playingId === demo.id ? "default" : "outline"}
                          onClick={() => handlePlay(demo.id)}
                          className="neon-glow-hover"
                          data-testid={`button-play-${demo.id}`}
                        >
                          {playingId === demo.id ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                      <CardDescription>{demo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm space-y-1">
                        <p className="text-muted-foreground">
                          <span className="text-foreground font-medium">Voice:</span> {demo.voiceProfile}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="text-foreground font-medium">Language:</span> {demo.language}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
