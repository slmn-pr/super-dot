"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AI_INPUT_SESSION_KEY = "mydot:ai-input:seen";

const SPLASH_DURATION = 2200;

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const hasSeen = sessionStorage.getItem(AI_INPUT_SESSION_KEY);

    if (hasSeen) {
      return;
    }

    // Mark as seen immediately so route changes
    // during this session won't show the splash again.
    sessionStorage.setItem(AI_INPUT_SESSION_KEY, "true");

    setVisible(true);

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, SPLASH_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: {
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
        >
          {/* ================================================= */}
          {/* Ambient Background Lights */}
          {/* ================================================= */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Top Left */}
            <motion.div
              className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]"
              animate={{
                x: [0, 80, 30, 0],
                y: [0, 50, 100, 0],
                scale: [1, 1.15, 0.95, 1],
                opacity: [0.35, 0.5, 0.3, 0.35],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Top Right */}
            <motion.div
              className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]"
              animate={{
                x: [0, -70, -20, 0],
                y: [0, 80, 30, 0],
                scale: [1, 0.9, 1.15, 1],
                opacity: [0.25, 0.4, 0.2, 0.25],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Bottom Left */}
            <motion.div
              className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[140px]"
              animate={{
                x: [0, 100, 40, 0],
                y: [0, -60, -20, 0],
                scale: [1, 1.1, 0.9, 1],
                opacity: [0.2, 0.35, 0.18, 0.2],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Bottom Right */}
            <motion.div
              className="absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]"
              animate={{
                x: [0, -80, -30, 0],
                y: [0, -40, -80, 0],
                scale: [1, 0.9, 1.12, 1],
                opacity: [0.2, 0.3, 0.15, 0.2],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Center Glow */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[100px]"
              animate={{
                scale: [0.8, 1.2, 0.9, 0.8],
                opacity: [0.2, 0.45, 0.25, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* ================================================= */}
          {/* Subtle Vignette */}
          {/* ================================================= */}

          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]
            "
          />

          {/* ================================================= */}
          {/* Main Content */}
          {/* ================================================= */}

          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Logo Glow */}

            <motion.div
              className="absolute inset-0 m-auto h-24 w-24 rounded-full bg-white/20 blur-3xl"
              animate={{
                scale: [0.8, 1.25, 0.9],
                opacity: [0.15, 0.4, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Logo */}

            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/dot_one_logo.png"
                alt="Dot One Logo"
                width={80}
                height={80}
                priority
              />
            </motion.div>

            {/* Loading */}

            <motion.div
              className="mt-10 h-[2px] w-32 overflow-hidden rounded-full bg-white/10"
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
            >
              <motion.div
                className="h-full w-full origin-left bg-white/80"
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  delay: 0.6,
                  duration: 1.3,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
