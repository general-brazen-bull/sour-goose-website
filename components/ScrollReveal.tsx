import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'top 30%',       // UPDATED DEFAULTS
  wordAnimationEnd = 'top 30%'   // UPDATED DEFAULTS
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current ? scrollContainerRef.current : window;

    /* -------------------------------------------
       ROTATION (slower reveal)
    -------------------------------------------- */
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        rotate: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top 90%',   // EARLY start
          end: rotationEnd,   // MUCH later end
          scrub: 1.2          // smooth slow movement
        }
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    /* -------------------------------------------
       OPACITY (slow fade-in)
    -------------------------------------------- */
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top 95%',   // earliest start
          end: wordAnimationEnd,
          scrub: 1.2
        }
      }
    );

    /* -------------------------------------------
       BLUR (smooth unblur)
    -------------------------------------------- */
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: 'blur(0px)',
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 95%',
            end: wordAnimationEnd,
            scrub: 1.2
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
