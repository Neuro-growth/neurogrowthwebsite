import * as React from "react";
import {
  Smartphone,
  Receipt,
  CreditCard,
  Users,
  MessageSquare,
  ShieldCheck,
  Languages,
  Volume2,
  BookOpen,
  GraduationCap,
  Code,
  Globe,
  Check,
  Circle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Receipt,
  CreditCard,
  Users,
  MessageSquare,
  ShieldCheck,
  Languages,
  Volume2,
  BookOpen,
  GraduationCap,
  Code,
  Globe,
  Check,
};

export interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 20 }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[Icon] Unknown icon name "${name}", falling back to Circle.`);
    }
    return (
      <Circle
        size={size}
        strokeWidth={1.6}
        aria-hidden="true"
        className={cn("shrink-0", className)}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      strokeWidth={1.6}
      aria-hidden="true"
      className={cn("shrink-0", className)}
    />
  );
}
