"use client";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./StaggeredMenu.css";

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
  external?: boolean;
  target?: string;
  rel?: string;
}

export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  disableLogo?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  isFixed?: boolean;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = "right",
  colors = ["#B19EEF", "#5227FF"],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl,
  disableLogo = false,
  menuButtonColor = "#fff",
  openMenuButtonColor = "#fff",
  changeMenuColorOnOpen = true,
  accentColor = "#5227FF",
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
}) => {
  const [open, setOpen] = useState(false);
  const [textLines, setTextLines] = useState<string[]>(["Menu", "Close"]);

  const openRef = useRef(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);

  /* ============================================================
     INITIAL SETUP
  ============================================================ */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(
          preContainer.querySelectorAll(".sm-prelayer")
        ) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === "left" ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });

      gsap.set(plusH, { transformOrigin: "50% 50%", rotate: 0 });
      gsap.set(plusV, { transformOrigin: "50% 50%", rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    });

    return () => ctx.revert();
  }, [menuButtonColor, position]);

  /* ============================================================
     BUILD OPEN ANIMATION (FAST VERSION)
  ============================================================ */
  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;

    if (!panel) return null;

    openTlRef.current?.kill();

    const itemEls = Array.from(
      panel.querySelectorAll(".sm-panel-itemLabel")
    ) as HTMLElement[];

    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];

    const socialTitle = panel.querySelector(".sm-socials-title") as HTMLElement | null;

    const socialLinks = Array.from(
      panel.querySelectorAll(".sm-socials-link")
    ) as HTMLElement[];

    const tl = gsap.timeline({ paused: true });
    const offscreen = position === "left" ? -100 : 100;

    /* Faster prelayer slides */
    layers.forEach((el, i) => {
      tl.fromTo(
        el,
        { xPercent: offscreen },
        {
          xPercent: 0,
          duration: 0.28,
          ease: "power2.out",
        },
        i * 0.03
      );
    });

    /* Faster panel slide */
    tl.fromTo(
      panel,
      { xPercent: offscreen },
      {
        xPercent: 0,
        duration: 0.35,
        ease: "power2.out",
      },
      "+=0.03"
    );

    /* Faster menu items */
    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: { each: 0.05, from: "start" },
        },
        "-=0.25"
      );
    }

    /* Faster numbering */
    if (numberEls.length) {
      gsap.set(numberEls, { "--sm-num-opacity": 0 });
      tl.to(
        numberEls,
        {
          "--sm-num-opacity": 1,
          duration: 0.35,
          ease: "power2.out",
          stagger: { each: 0.04, from: "start" },
        },
        "-=0.3"
      );
    }

    /* Faster socials */
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
      tl.to(
        socialTitle,
        {
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
      tl.to(
        socialLinks,
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          stagger: { each: 0.04, from: "start" },
        },
        "-=0.2"
      );
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    const tl = buildOpenTimeline();
    tl?.play(0);
  }, [buildOpenTimeline]);

  /* ===== FAST CLOSE ===== */
  const playClose = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    gsap.to([panel, ...layers], {
      xPercent: position === "left" ? -100 : 100,
      duration: 0.22,
      ease: "power2.in",
    });
  }, [position]);

  /* ============================================================
     TEXT ANIMATION
  ============================================================ */
  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    const targetLabel = opening ? "Close" : "Menu";
    const seq = ["Menu", "Close", "Menu", "Close", targetLabel];

    setTextLines(seq);

    gsap.set(inner, { yPercent: 0 });
    gsap.to(inner, {
      yPercent: -((seq.length - 1) / seq.length) * 100,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  /* ============================================================
     ICON ANIMATION
  ============================================================ */
  const animateIcon = useCallback((opening: boolean) => {
    if (!iconRef.current) return;
    gsap.to(iconRef.current, {
      rotate: opening ? 225 : 0,
      duration: 0.45,
      ease: "power2.out",
    });
  }, []);

  /* ============================================================
     COLOR ANIMATION
  ============================================================ */
  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn || !changeMenuColorOnOpen) return;

      gsap.to(btn, {
        color: opening ? openMenuButtonColor : menuButtonColor,
        duration: 0.25,
        ease: "power2.out",
      });
    },
    [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]
  );

  /* ============================================================
     TOGGLE MENU
  ============================================================ */
  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }

    animateText(target);
    animateIcon(target);
    animateColor(target);
  }, [animateText, animateIcon, animateColor, onMenuOpen, onMenuClose, playOpen, playClose]);

  /* ============================================================
     CLICK AWAY
  ============================================================ */
  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handle = (e: MouseEvent) => {
      const panel = panelRef.current;
      const toggleBtn = toggleBtnRef.current;

      if (toggleBtn && toggleBtn.contains(e.target as Node)) return;

      if (panel && !panel.contains(e.target as Node)) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open, closeOnClickAway, toggleMenu]);

  /* ============================================================
     RENDER
  ============================================================ */
  return (
    <div
      className={`staggered-menu-wrapper ${className || ""} ${
        isFixed ? "fixed-wrapper" : ""
      }`}
      style={accentColor ? { ["--sm-accent" as any]: accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      {/* PRELAYERS */}
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(colors.length ? colors.slice(0, 4) : ["#1e1e22", "#35353c"]).map(
          (c, i) => (
            <div
              key={i}
              className="sm-prelayer"
              style={{ background: c }}
            />
          )
        )}
      </div>

      {/* HEADER BAR */}
      <header className="staggered-menu-header" aria-label="Main navigation header">

        {!disableLogo && (
          <a href="/" className="sm-logo" aria-label="Homepage">
            <img
              src={logoUrl}
              alt="Logo"
              className="sm-logo-img"
              draggable={false}
            />
          </a>
        )}

        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span className="sm-toggle-textWrap" aria-hidden="true">
            <span ref={textInnerRef} className="sm-toggle-textInner">
              {textLines.map((line, i) => (
                <span className="sm-toggle-line" key={i}>
                  {line}
                </span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span ref={plusHRef} className="sm-icon-line" />
            <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
          </span>
        </button>
      </header>

      {/* SLIDING PANEL */}
      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            role="list"
            data-numbering={displayItemNumbering || undefined}
          >
            {items.length ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <a
                    className="sm-panel-item"
                    href={it.link}
                    aria-label={it.ariaLabel}
                    data-index={idx + 1}
                    {...(it.external
                      ? {
                          target: it.target ?? "_blank",
                          rel: it.rel ?? "noopener noreferrer",
                        }
                      : {})}
                  >
                    <span className="sm-panel-itemLabel">{it.label}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>

          {displaySocials && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">Socials</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;
