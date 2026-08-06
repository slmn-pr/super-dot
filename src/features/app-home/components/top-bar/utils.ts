import {
  Sunrise,
  Sun,
  Sunset,
  Moon,
  type LucideIcon,
} from "lucide-react";

export function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "صبح بخیر";
  if (hour < 17) return "روز بخیر";
  if (hour < 21) return "عصر بخیر";

  return "شب بخیر";
}


export function getGreetingIcon(): {
  Icon: LucideIcon;
  className: string;
} {
  const hour = new Date().getHours();

  if (hour < 12) {
    return {
      Icon: Sunrise,
      className:
        "text-orange-500 bg-orange-500/10",
    };
  }

  if (hour < 17) {
    return {
      Icon: Sun,
      className:
        "text-yellow-500 bg-yellow-500/10",
    };
  }

  if (hour < 21) {
    return {
      Icon: Sunset,
      className:
        "text-rose-500 bg-rose-500/10",
    };
  }

  return {
    Icon: Moon,
    className:
      "text-indigo-500 bg-indigo-500/10",
  };
}