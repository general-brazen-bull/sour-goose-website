"use client";
import "./MarqueeSection.css";

interface MarqueeSectionProps {
  text: string;
  direction?: "left" | "right";
}

export default function MarqueeSection({
  text,
  direction = "left",
}: MarqueeSectionProps) {
  return (
    <section className="marquee-section">
      <div className="marquee-track">
        <div className={`marquee-inner ${direction}`}>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>
    </section>
  );
}
