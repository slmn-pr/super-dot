"use client";

import { motion } from "framer-motion";
import { getGreeting, getGreetingIcon } from "./utils";
import AvatarMenu from "./avatar-menu";

export default function Greeting({ userName }: { userName: string }) {
  const greeting = getGreeting();

  const { Icon, className } = getGreetingIcon();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -6,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex items-center gap-2"
    >
      {/* <motion.div
        whileHover={{
          rotate: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className={`flex size-8 items-center justify-center rounded-xl ${className}`}
      >
        <Icon size={17} strokeWidth={2.2} />
      </motion.div> */}

      <AvatarMenu
        userName={userName}
        avatarUrl="/user_avatar.png"
        // onClick={onAvatarClick}
      />

      <div className="leading-tight">
        <p className="text-[12px] text-muted-foreground">{greeting}</p>

        <p className="text-sm font-semibold">{userName}</p>
      </div>
    </motion.div>
  );
}
