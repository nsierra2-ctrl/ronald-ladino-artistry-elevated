import { useEffect, useRef, useState } from "react";

/** Poster-first video: only loads the source when it enters the viewport. */
export function LazyVideo({
  src,
  poster,
  className = "",
  priority = false,
  label,
}: {
  src: string;
  poster?: string;
  className?: string;
  priority?: boolean;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(priority);

  useEffect(() => {
    if (priority) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [priority]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={priority ? "auto" : "none"}
      aria-label={label}
    >
      {load && <source src={src} type="video/mp4" />}
    </video>
  );
}
