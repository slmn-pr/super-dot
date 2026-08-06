"use client";

import { useState } from "react";
import { getGreeting } from "./utils";
import { motion } from "framer-motion";

export default function Greeting({ userName }: { userName: string }) {
  const [greeting] = useState(getGreeting);
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="text-[13px] font-medium text-muted-foreground truncate"
    >
      {greeting}،{" "}
      <span className="text-foreground font-semibold">{userName}</span> 👋
    </motion.p>
  );
}
