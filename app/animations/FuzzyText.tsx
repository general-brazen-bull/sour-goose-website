import React, { useEffect, useRef } from "react";

interface FuzzyTextProps {
  children: React.ReactNode;
  fontSize?: number | string;
  fontWeight?: string | number;
  fontFamily?: string;
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
}

const FuzzyText: React.FC<FuzzyTextProps> = ({
  children,
  fontSize = "clamp(2rem, 8vw, 8rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  enableHover = true,
  baseIntensity = 0.15,
  hoverIntensity = 0.5,
}) => {
  const canvasRef =
    useRef<HTMLCanvasElement & { cleanupFuzzyText?: () => void }>(null);

  useEffect(() => {
    let animationFrameId: number;
    let isCancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // ⭐ NEW → get actual size that Tailwind sets on canvas
      const computedCanvasStyle = getComputedStyle(canvas);
      const numericFontSize = parseFloat(computedCanvasStyle.fontSize);

      const computedFontFamily =
        fontFamily === "inherit"
          ? computedCanvasStyle.fontFamily || "sans-serif"
          : fontFamily;

      const text = React.Children.toArray(children).join("");

      // Offscreen canvas for text rendering
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${numericFontSize}px ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      const metrics = offCtx.measureText(text);

      const left = metrics.actualBoundingBoxLeft ?? 0;
      const right = metrics.actualBoundingBoxRight ?? metrics.width;
      const ascent = metrics.actualBoundingBoxAscent ?? numericFontSize * 0.8;
      const descent =
        metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

      const textWidth = Math.ceil(left + right);
      const textHeight = Math.ceil(ascent + descent);

      offscreen.width = textWidth + 10;
      offscreen.height = textHeight;

      offCtx.font = `${fontWeight} ${numericFontSize}px ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = color;
      offCtx.fillText(text, 5 - left, ascent);

      // ⭐ Canvas scales with CSS, not fixed px
      canvas.width = offscreen.width + 100;
      canvas.height = offscreen.height;

      ctx.translate(50, 0);

      const fuzzRange = 30;
      let isHovering = false;

      const run = () => {
        if (isCancelled) return;

        ctx.clearRect(
          -fuzzRange,
          -fuzzRange,
          offscreen.width + fuzzRange * 2,
          offscreen.height + fuzzRange * 2
        );

        const intensity = isHovering ? hoverIntensity : baseIntensity;

        for (let j = 0; j < offscreen.height; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreen.width,
            1,
            dx,
            j,
            offscreen.width,
            1
          );
        }

        animationFrameId = requestAnimationFrame(run);
      };

      run();

      // Hover logic
      const rectCheck = (x: number, y: number) =>
        x >= 50 &&
        x <= 50 + textWidth &&
        y >= 0 &&
        y <= textHeight;

      const handleMouseMove = (e: MouseEvent) => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = rectCheck(x, y);
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!enableHover) return;
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const t = e.touches[0];
        const x = t.clientX - rect.left;
        const y = t.clientY - rect.top;
        isHovering = rectCheck(x, y);
      };

      const handleTouchEnd = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
        canvas.addEventListener("touchend", handleTouchEnd);
      }

      canvas.cleanupFuzzyText = () => {
        cancelAnimationFrame(animationFrameId);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
        canvas.removeEventListener("touchmove", handleTouchMove);
        canvas.removeEventListener("touchend", handleTouchEnd);
      };
    };

    init();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      canvas?.cleanupFuzzyText?.();
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
  ]);

  // ⭐ KEY FIX: Let Tailwind control the fontSize via CSS
  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-auto"
      style={{
        fontSize: fontSize,
        fontFamily: fontFamily,
      }}
    />
  );
};

export default FuzzyText;
