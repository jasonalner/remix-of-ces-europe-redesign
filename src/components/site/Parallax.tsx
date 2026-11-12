import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Slow scroll parallax for photography (Elementor-reproducible). Disabled for reduced motion.
export function Parallax({ src, alt, className, imgClassName, strength = 0.12 }: { src: string; alt: string; className?: string; imgClassName?: string; strength?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      const w = wrap.current, i = img.current;
      if (w && i) {
        const r = w.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -strength;
        i.style.transform = `translate3d(0, ${off}px, 0) scale(1.18)`;
      }
      raf = 0;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, [strength]);
  return (
    <div ref={wrap} className={cn("relative overflow-hidden", className)}>
      <img ref={img} src={src} alt={alt} loading="lazy" className={cn("absolute inset-0 h-full w-full object-cover will-change-transform", imgClassName)} style={{ transform: "scale(1.18)" }} />
    </div>
  );
}
