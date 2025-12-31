// components/TikTokEmbed.tsx
"use client";

import { useEffect } from "react";

export default function TikTokEmbed({ url }: { url: string }) {
  useEffect(() => {
    // Remove existing script if present
    const existing = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );
    if (existing) existing.remove();

    // Re-add script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [url]);

  return (
    <div className="w-full flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id=""
        style={{ maxWidth: 325, width: "100%" }}
      >
        <section>
          <a href={url}>Watch on TikTok</a>
        </section>
      </blockquote>
    </div>
  );
}
