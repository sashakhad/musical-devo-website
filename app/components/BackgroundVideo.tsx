"use client";
import { useEffect, useState } from "react";

export function BackgroundVideo() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(mounted && window.innerWidth <= 768);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden">
      {isMobile ? (
        <img
          src={`/bg-image-option-2.jpg`}
          alt="Background"
          className="min-h-full min-w-full object-cover"
        />
      ) : (
        <video
          className="min-h-full min-w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={`/pink-smoke-medium.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
