"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Gem,
  MapPin,
  Plane,
  ShoppingBag,
  Store,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";

export default function HubGraphic() {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const icons = [
    { Icon: Wallet, label: "کیف پول" },
    { Icon: ShoppingBag, label: "خرید" },
    { Icon: Truck, label: "ارسال" },
    { Icon: Store, label: "فروشگاه" },
    { Icon: Plane, label: "سفر" },
    { Icon: Gem, label: "طلا" },
    { Icon: MapPin, label: "مکان‌ها" },
    { Icon: Users, label: "کاربران" },
  ];

  const radius = 40; // شعاع به درصد

  const nodes = icons.map(({ Icon, label }, i) => {
    const angle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { Icon, label, x, y, angle };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md flex items-center justify-center select-none">
      {/* 1. پس‌زمینه نوری شیک و لایت در مرکز */}
      <div className="absolute h-48 w-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      {/* 2. لایه گرافیک SVG برای خطوط متصل‌کننده */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
      >
        {/* دایره شعاعی مداری (محیط) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#E4E4E7"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />

        {/* خطوط اتصال شعاعی از مرکز به آیکون‌ها */}
        {nodes.map((n, i) => {
          const isHovered = activeHover === i;
          return (
            <g key={i}>
              {/* خط ثابت اصلی */}
              <motion.line
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke={isHovered ? "#2563EB" : "#E4E4E7"}
                strokeWidth={isHovered ? "1.2" : "0.5"}
                animate={{
                  stroke: isHovered ? "#2563EB" : "#E4E4E7",
                  strokeWidth: isHovered ? 1.2 : 0.5,
                }}
                transition={{ duration: 0.2 }}
              />

              {/* پالس متحرک نرم روی خطوط که به سمت مرکز می‌رود */}
              <motion.circle
                r={isHovered ? "1.2" : "0.8"}
                fill={isHovered ? "#2563EB" : "#9CA3AF"}
                initial={{ cx: n.x, cy: n.y }}
                animate={{
                  cx: [n.x, 50],
                  cy: [n.y, 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: isHovered ? 1.2 : 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.25,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* 3. لوگوی مرکزی (SuperDot Core) */}
      <motion.div
        className="absolute z-20 flex items-center justify-center rounded-full bg-black shadow-2xl"
        style={{
          left: "50%",
          top: "50%",
          width: "22%",
          height: "22%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: activeHover !== null ? 1.08 : 1,
          boxShadow:
            activeHover !== null
              ? "0 20px 30px -10px rgba(37, 99, 235, 0.3)"
              : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* هاله پشت لوگو هنگام Hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-500/20"
          animate={{
            scale: activeHover !== null ? [1, 1.25, 1] : 1,
            opacity: activeHover !== null ? [0.5, 0, 0.5] : 0,
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        <Image
          src="/dot_one_logo.png"
          alt="SuperDot Brand Symbol"
          width={48}
          height={48}
          className="relative z-10 p-1.5 object-contain"
        />
      </motion.div>

      {/* 4. آیکون‌های سرویس‌ها با انیمیشن ورود و شناور بودن نرم */}
      {nodes.map(({ Icon, label, x, y }, i) => (
        <motion.div
          key={i}
          className="absolute z-20 flex items-center justify-center cursor-pointer"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: "15%",
            height: "15%",
            x: "-50%",
            y: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: ["-50%", "-54%", "-50%"], // حرکت شناور ملایم و ارگانیک
          }}
          transition={{
            opacity: { duration: 0.4, delay: i * 0.08 },
            scale: { duration: 0.4, delay: i * 0.08 },
            y: {
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            },
          }}
          whileHover={{ scale: 1.18 }}
          onHoverStart={() => setActiveHover(i)}
          onHoverEnd={() => setActiveHover(null)}
        >
          <div
            className={`flex h-full w-full items-center justify-center rounded-2xl border transition-all duration-200 ${
              activeHover === i
                ? "border-blue-500 bg-white shadow-xl shadow-blue-500/10 text-blue-600"
                : "border-zinc-200 bg-white/95 shadow-sm text-zinc-700 hover:border-zinc-400"
            }`}
          >
            <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.8} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
