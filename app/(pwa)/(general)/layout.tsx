import { TooltipProvider } from "@/components/ui/tooltip";
import { BottomNav } from "@/src/features/app-home/components/BottomNav";
import { TopBar } from "@/src/features/app-home/components/top-bar";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "دات وان",
  description: "اکوسیستم یکپارچه خدمات دیجیتال",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Top navigation bar */}
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col bg-background">
        <TopBar
          userName="سلمان"
          notificationCount={3}
          walletBalance="10000000"
        />

        <TooltipProvider>
          <main className="flex-1 pb-12">{children}</main>
        </TooltipProvider>

        <BottomNav />
      </div>
    </div>
  );
}
