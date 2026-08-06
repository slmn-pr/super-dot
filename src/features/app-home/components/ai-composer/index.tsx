"use client";

import { useState } from "react";
import PromptInput from "./prompt-input";

export default function AiComposer() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-end gap-4 py-8 transition-colors duration-200">
      <PromptInput disabled={isDisabled} />
    </div>
  );
}
