"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const SIDES = ["left", "right", "top", "bottom"] as const;
type Side = (typeof SIDES)[number];

export default function GoosePeek() {
  const [side, setSide] = useState<Side>("left");
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(true);

  const cycleTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const exitTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const teleportTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const enableAnimTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  

  const getRandomSide = () =>
    SIDES[Math.floor(Math.random() * SIDES.length)];

  useEffect(() => {
    const runCycle = () => {
      // Start hidden (goose off-screen)
      setVisible(false);

      // Wait for exit animation to finish (500ms)
      exitTimeout.current = setTimeout(() => {
        // Disable animation so teleport is instant
        setAnimating(false);

        // Teleport goose instantly to a new side
        setSide(getRandomSide());

        // Slight delay before re-enabling animation
        enableAnimTimeout.current = setTimeout(() => {
          setAnimating(true);
          setVisible(true); // Slide into view
        }, 50);

      }, 500);

      // Goose stays visible for 5 seconds
      teleportTimeout.current = setTimeout(() => {
        setVisible(false);
      }, 15000);
      
      // Next cycle exactly every 10 seconds
      const nextDelay = 20000;
      cycleTimeout.current = setTimeout(runCycle, nextDelay);
    };

    runCycle();

    // Cleanup → return a function, not null
    return () => {
      clearTimeout(cycleTimeout.current);
      clearTimeout(exitTimeout.current);
      clearTimeout(teleportTimeout.current);
      clearTimeout(enableAnimTimeout.current);
    };
  }, []);

  // Hide goose immediately on hover
  const hideOnHover = () => setVisible(false);

  // Fixed position depending on side
  const basePosition: Record<Side, string> = {
    left: "left-0 top-1/2 -translate-y-1/2",
    right: "right-0 top-1/2 -translate-y-1/2",
    top: "top-0 left-1/2 -translate-x-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
  };

  // Rotate so goose faces inward
  const rotationClass: Record<Side, string> = {
    left: "rotate-90",
    right: "-rotate-90",
    top: "rotate-180",
    bottom: "rotate-0",
  };

  // Off-screen translations (guaranteed fully hidden)
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
        src="/Goose Neck.png"
        alt="Goose Peek"
        width={120}
        height={320}
        onMouseEnter={hideOnHover}
        className={`pointer-events-auto transform ${rotationClass[side]}`}
        priority
      />
    </div>
  );
}
