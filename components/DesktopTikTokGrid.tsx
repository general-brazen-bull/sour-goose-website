// components/DesktopTikTokGrid.tsx
"use client";

import { useEffect } from "react";
import DecryptedText from "./DecryptedText";

const videos = [
  "https://www.tiktok.com/@drinksourgoose/video/7584607408048164114",
  "https://www.tiktok.com/@drinksourgoose/video/7540419881980808453",
  "https://www.tiktok.com/@drinksourgoose/video/7582766069870300434",
];

export default function DesktopTikTokGrid() {
  useEffect(() => {
    // Load TikTok embed script once
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="hidden lg:block relative mt-40 mb-40 px-16">
      {/* TITLE */}
      <div className="text-center mb-20 mt-[70px]">
        <DecryptedText
          text="GOOSE IN THE WILD"
          speed={100}
          sequential
          maxIterations={12}
          revealDirection="start"
          animateOn="view"
          className="
            text-6xl sm:text-7xl md:text-8xl lg:text-9xl
            font-bebas text-lightning-yellow lightning-text
            tracking-wide transition-all duration-300
            hover:drop-shadow-[0_0_40px_rgba(255,255,0,1)]
          "
          encryptedClassName="
            text-6xl sm:text-7xl md:text-8xl lg:text-9xl
            font-bebas text-lightning-yellow
          "
          onFinish={() => {}}
        />
      </div>

      {/* EMBEDS */}
      <div className="flex justify-center gap-12 max-w-6xl mx-auto">
        {videos.map((url, index) => (
          <blockquote
            key={index}
            className="tiktok-embed"
            cite={url}
            style={{ maxWidth: 325, minWidth: 325 }}
          >
            <section>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Watch on TikTok
              </a>
            </section>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
