"use client";

export default function TestIntroPage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
      {/* Video — looping continuously */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/intro-bg.mp4" type="video/mp4" />
      </video>

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Centered snow — Synonym Bold */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-white text-[clamp(6rem,18vw,20rem)] leading-[0.85] font-synonym font-bold tracking-[0.02em] select-none">
          snow
        </h1>
      </div>
    </div>
  );
}
