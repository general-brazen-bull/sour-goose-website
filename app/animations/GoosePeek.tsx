"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const SIDES = ["left", "right", "top", "bottom"] as const;
type Side = (typeof SIDES)[number];

export default function GoosePeek({ active = true }: { active?: boolean }) {
  // ⛔️ Do NOT run until hero says so (mobile only)
  if (!active) return null;

  const [side, setSide] = useState<Side>("left");
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(true);

  const cycleTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const exitTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const teleportTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const enableAnimTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const getRandomSide = () => SIDES[Math.floor(Math.random() * SIDES.length)];

  useEffect(() => {
    const runCycle = () => {
      setVisible(false);

      exitTimeout.current = setTimeout(() => {
        setAnimating(false);
        setSide(getRandomSide());

        enableAnimTimeout.current = setTimeout(() => {
          setAnimating(true);
          setVisible(true);
        }, 50);
      }, 500);

      teleportTimeout.current = setTimeout(() => {
        setVisible(false);
      }, 15000);

      cycleTimeout.current = setTimeout(runCycle, 20000);
    };

    runCycle();

    return () => {
      clearTimeout(cycleTimeout.current);
      clearTimeout(exitTimeout.current);
      clearTimeout(teleportTimeout.current);
      clearTimeout(enableAnimTimeout.current);
    };
  }, []);

  const hideOnHover = () => setVisible(false);

  const basePosition: Record<Side, string> = {
    left: "left-0 top-1/2 -translate-y-1/2",
    right: "right-0 top-1/2 -translate-y-1/2",
    top: "top-0 left-1/2 -translate-x-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
  };

  const rotationClass: Record<Side, string> = {
    left: "rotate-90",
    right: "-rotate-90",
    top: "rotate-180",
    bottom: "rotate-0",
  };

  const slideMotion: Record<Side, string> = {
    left: visible ? "translate-x-0" : "-translate-x-[300%]",
    right: visible ? "translate-x-0" : "translate-x-[300%]",
    top: visible ? "translate-y-0" : "-translate-y-[300%]",
    bottom: visible ? "translate-y-0" : "translate-y-[300%]",
  };

  return (
    <div
      className={`
        fixed z-50
        ${basePosition[side]}
        ${slideMotion[side]}
        ${animating ? "transition-transform duration-500" : ""}
      `}
    >
      <Image
        src="/goose-neck.png"
        alt="Goose Peek"
        width={120}
        height={320}
        onMouseEnter={hideOnHover}
        className={`
          pointer-events-auto transform ${rotationClass[side]}
          
          /* ⭐ MOBILE: 30% smaller */
          w-[75px] h-auto
      
          /* ⭐ DESKTOP: full-size restored */
          md:w-[120px]
        `}
        priority
      />
    </div>
  );
}
