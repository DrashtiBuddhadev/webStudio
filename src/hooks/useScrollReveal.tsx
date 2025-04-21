import { useRef, useEffect, useState } from "react";

// Simple scroll reveal hook: fade+slide from left/right
export function useScrollReveal({
  threshold = 0.18,
  direction = "left" as "left" | "right",
} = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsRevealed(true);
        });
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  // Add direction-based transform effect
  if (ref.current && isRevealed) {
    ref.current.style.transform = "none";
  } else if (ref.current) {
    ref.current.style.transform =
      direction === "left"
        ? "translateY(48px) translateX(-38px)"
        : "translateY(48px) translateX(38px)";
  }
  return { ref, isRevealed };
}
