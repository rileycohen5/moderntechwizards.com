import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import inboundCsAudio from "@assets/inbound_cs_01.wav";
import newClientAppointmentAudio from "@assets/new_client_appointment_01.wav";
import leadFollowupAudio from "@assets/lead_followup_01.wav";
import statusFollowupAudio from "@assets/status_followup_01.wav";

interface AudioDemo {
  id: string;
  title: string;
  category: string;
  industry: string;
  filePath: string;
  language: string;
  voiceProfile: string;
  description: string;
}

export default function DemoPage() {
  const [demos, setDemos] = useState<AudioDemo[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetch('/demo-audio.json')
      .then(res => res.json())
      .then(data => setDemos(data))
      .catch(err => console.error('Failed to load demos:', err));
  }, []);

  const categories = Array.from(new Set(demos.map(d => d.category)));

  const getAudioPath = (filePath: string) => {
    if (filePath.includes('inbound_cs_01.wav')) return inboundCsAudio;
    if (filePath.includes('new_client_appointment_01.wav')) return newClientAppointmentAudio;
    if (filePath.includes('lead_followup_01.wav')) return leadFollowupAudio;
    if (filePath.includes('status_followup_01.wav')) return statusFollowupAudio;
    return '';
  };

  const handlePlay = (id: string, filePath: string) => {
    const audioPath = getAudioPath(filePath);
    
    if (!audioPath) {
      console.log('No audio file available for:', id);
      return;
    }

    if (playingId === id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      const audio = new Audio(audioPath);
      audioRef.current = audio;
      
      audio.play().catch(err => console.error('Playback error:', err));
      setPlayingId(id);
      
      audio.onended = () => {
        setPlayingId(null);
      };
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-6 gradient-text" data-testid="text-page-title">
            Hear Modern Tech Wizards in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-page-description">
            Listen to real AI conversations across industries and use cases
          </p>
          <p className="text-lg text-foreground/90 max-w-4xl mx-auto" data-testid="text-custom-message">
            Here are some widely used agents, however we build custom agents based on your company's needs. Tell us what you want and we'll build it.
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
                          {demo.industry && (
                            <div className="flex gap-2 mb-3">
                              <Badge variant="outline">{demo.industry}</Badge>
                            </div>
                          )}
                        </div>
                        <Button
                          size="icon"
                          variant={playingId === demo.id ? "default" : "outline"}
                          onClick={() => handlePlay(demo.id, demo.filePath)}
                          className="neon-glow-hover"
                          data-testid={`button-play-${demo.id}`}
                          disabled={!demo.filePath}
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
