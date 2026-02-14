import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const moveCursor = useCallback((e: MouseEvent) => {
    if (cursorRef.current && followerRef.current) {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);

    // Hover effect on links and buttons
    const handleEnter = () => {
      gsap.to(followerRef.current, { scale: 2.5, opacity: 0.15, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 0.5, duration: 0.3 });
    };
    const handleLeave = () => {
      gsap.to(followerRef.current, { scale: 1, opacity: 0.3, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
    };

    const interactiveEls = document.querySelectorAll("a, button, .skill-card, .project-card");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [moveCursor]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary z-[9999] pointer-events-none hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 z-[9998] pointer-events-none hidden md:block opacity-30"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
