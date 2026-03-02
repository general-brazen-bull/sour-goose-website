// components/DesktopTikTokGrid.tsx
"use client";

import Image from "next/image";
import DecryptedText from "./DecryptedText";

const videos = [
  {
    id: "1",
    thumb: "/t1.webp",
    url: "https://www.tiktok.com/@drinksourgoose/video/7582766069870300434",
  },
  {
    id: "2",
    thumb: "/t2.webp",
    url: "https://www.tiktok.com/@drinksourgoose/video/7540419881980808453",
  },
  {
    id: "3",
    thumb: "/t3.webp",
    url: "https://www.tiktok.com/@drinksourgoose/video/7584607408048164114",
  },
];

export default function DesktopTikTokGrid() {
  return (
    <section className="relative mt-32 mb-32 px-6 lg:px-16">
      {/* TITLE */}
      <div className="text-center mb-16">
  <div className="relative w-full">

    {/* GHOST TEXT */}
    <h2
      aria-hidden
      className="
        font-bebas
        text-lightning-yellow
        text-[clamp(6rem,7vw,9rem)]
        leading-[0.9]
        tracking-wide
        opacity-0
        pointer-events-none
      "
    >
      GOOSE IN THE WILD
    </h2>

    {/* ANIMATED TEXT */}
    <div className="absolute inset-0 flex items-center justify-center">
      <DecryptedText
        text="GOOSE IN THE WILD"
        speed={100}
        sequential
        maxIterations={12}
        revealDirection="start"
        animateOn="view"
        className="
          font-bebas text-lightning-yellow lightning-text
          text-[clamp(6rem,7vw,9rem)]
          tracking-wide
          leading-[0.9]
        "
        encryptedClassName="
          font-bebas text-lightning-yellow
          text-[clamp(6rem,7vw,9rem)]
          leading-[0.9]
        "
        onFinish={() => {}}
      />
    </div>

  </div>
</div>


      {/* GRID — RESPONSIVE */}
      <div className="
        grid gap-8 max-w-6xl mx-auto
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      ">
       {videos.map((video) => (
  <div
    key={video.id}
    className="relative overflow-hidden rounded-2xl border border-sour-red/40"
  >
    {/* CLICKABLE IMAGE */}
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      <Image
        src={video.thumb}
        alt="Sour Goose on TikTok"
        width={600}
        height={1000}
        className="
          object-cover transition-transform duration-500
          lg:group-hover:scale-105
        "
      />

      {/* DESKTOP HOVER OVERLAY ONLY */}
      <div
        className="
          hidden lg:flex
          absolute inset-0 items-center justify-center
          bg-black/70 opacity-0
          group-hover:opacity-100
          transition
        "
      >
        <span
          className="
            font-bebas text-white text-3xl tracking-wide
          "
        >
          WATCH ON TIKTOK
        </span>
      </div>
    </a>

    {/* MOBILE CTA BELOW IMAGE */}
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        lg:hidden
        block text-center py-4
        font-bebas text-xl tracking-wide
        text-white
        bg-black
      "
    >
      WATCH ON TIKTOK →
    </a>
  </div>
))}

      </div>

      {/* FOLLOW CTA */}
      <div className="mt-20 text-center max-w-4xl mx-auto px-4">
        <p className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white">
          Follow{" "}
          <a
            href="https://www.tiktok.com/@drinksourgoose"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-lightning-yellow
              hover:text-[#ff0000]
              transition-colors
            "
          >
            Kevin The Goose
          </a>{" "}
          on TikTok for chaos, cocktails, and unhinged Goose behaviour.
        </p>
      </div>
    </section>
  );
}
