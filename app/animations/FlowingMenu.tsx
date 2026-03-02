"use client";

import React from "react";
import { gsap } from "gsap";
import "./FlowingMenu.css";

/* EXPORT so page.tsx can import it */
export interface MenuItemProps {
  link: string; // kept for compatibility, but no longer used
  text: string;
  marquee: string;
  direction?: "left" | "right";
}

export interface FlowingMenuProps {
  items?: MenuItemProps[];
}

/* ============================================================
   FLOWING MENU
============================================================ */

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

/* ============================================================
   MENU ITEM (GSAP-ONLY INTERACTION)
============================================================ */

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  marquee,
  direction = "left",
}) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults: gsap.TweenVars = {
    duration: 0.6,
    ease: "expo.out",
  };

  /* ------------------------------------------------------------
     INITIAL STATE — marquee hidden
  ------------------------------------------------------------ */

  React.useEffect(() => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;

    gsap.set(marqueeRef.current, { yPercent: 101 });
    gsap.set(marqueeInnerRef.current, { yPercent: -101 });
  }, []);

  /* ------------------------------------------------------------
     HELPERS — determine entry edge
  ------------------------------------------------------------ */

  const dist = (x: number, y: number, x2: number, y2: number) =>
    Math.pow(x - x2, 2) + Math.pow(y - y2, 2);

  const closestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" =>
    dist(mouseX, mouseY, width / 2, 0) <
    dist(mouseX, mouseY, width / 2, height)
      ? "top"
      : "bottom";

  /* ------------------------------------------------------------
     HOVER IN
  ------------------------------------------------------------ */

  const handleMouseEnter = (
    ev: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = closestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, {
        yPercent: edge === "top" ? -101 : 101,
      })
      .set(marqueeInnerRef.current, {
        yPercent: edge === "top" ? 101 : -101,
      })
      .to([marqueeRef.current, marqueeInnerRef.current], {
        yPercent: 0,
      });
  };

  /* ------------------------------------------------------------
     HOVER OUT
  ------------------------------------------------------------ */

  const handleMouseLeave = (
    ev: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = closestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, {
        yPercent: edge === "top" ? -101 : 101,
      })
      .to(
        marqueeInnerRef.current,
        {
          yPercent: edge === "top" ? 101 : -101,
        },
        0
      );
  };

  /* ------------------------------------------------------------
     MARQUEE CONTENT
  ------------------------------------------------------------ */

  const repeatedMarquee = React.useMemo(
    () =>
      Array.from({ length: 8 }).map((_, idx) => (
        <span key={idx}>{marquee}</span>
      )),
    [marquee]
  );

  return (
    <div
      className="menu__item"
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="menu__item-link"
        role="presentation"
        aria-hidden="true"
      >
        {text}
      </div>

      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div
            className={`marquee__inner ${
              direction === "right" ? "marquee__inner--right" : ""
            }`}
            aria-hidden="true"
          >
            {repeatedMarquee}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
