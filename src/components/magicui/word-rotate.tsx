"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: readonly string[];
  /** How long each word stays on screen before rotating, in milliseconds. */
  duration?: number;
  className?: string;
}

/**
 * Rotates through `words` in place, looping back to the first. Rendered inline so
 * it can sit at the end of a sentence — e.g. "Hi, I'm <WordRotate />".
 *
 * The first word is what the server renders (index 0), so it is present in the
 * HTML for crawlers and hydrates without a mismatch. AnimatePresence uses
 * initial={false} so the first word appears with no entrance animation of its
 * own — the surrounding BlurFade owns the mount animation, this owns the loop.
 * prefers-reduced-motion holds the first word and never rotates.
 */
export function WordRotate({
  words,
  duration = 2600,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, duration);
    return () => clearInterval(id);
  }, [words, duration]);

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className={cn("inline-block whitespace-nowrap", className)}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default WordRotate;
