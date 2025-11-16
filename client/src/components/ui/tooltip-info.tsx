import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipInfoProps {
  content: string;
}

export function TooltipInfo({ content }: TooltipInfoProps) {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center w-4 h-4 ml-1 text-muted-foreground hover:text-primary transition-colors cursor-help"
          data-testid="tooltip-trigger"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="max-w-xs !z-[9999] bg-card border-primary/20 shadow-2xl" 
        data-testid="tooltip-content"
        sideOffset={8}
      >
        <p className="text-sm">{content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
