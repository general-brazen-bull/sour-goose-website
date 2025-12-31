"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Show ONLY when user reaches bottom
      const atBottom = scrollY + windowHeight >= docHeight - 40;
      setShow(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
    onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    aria-label="Back to top"
    className="
    pointer-events-auto
    mt-20
    mx-auto
    h-16
    w-16
    rounded-full
    border-[3px]
    border-lightning-yellow
    text-lightning-yellow
    bg-transparent
    flex
    items-center
    justify-center
    animate-bounce
    hover:scale-110
    active:scale-95
    transition-transform
    shadow-[0_0_18px_rgba(255,255,0,0.45)]
  "
  
    style={{ WebkitTapHighlightColor: "transparent" }}
  >
    <ChevronUp size={30} strokeWidth={3} />
  </button>
  
  );
}
