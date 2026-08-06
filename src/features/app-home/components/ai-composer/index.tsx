"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import PromptInput from "./prompt-input";

export default function AiComposer() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-end gap-4 py-8 transition-colors duration-200">
      {/* phone-width canvas */}
      <div style={{ width: "100%", maxWidth: 480, padding: "0 16px" }}>
        <div className="mb-3 flex items-center gap-1.5 px-1">
          <Sparkles size={14} />
          <span className="text-[13px] font-medium">دستیار هوشمند</span>
        </div>
        <PromptInput disabled={isDisabled} />
      </div>
    </div>
  );
}
