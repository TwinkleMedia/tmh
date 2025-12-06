import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Cursorfollow() {
  const cursor = useRef(null);

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const target = { x: pos.x, y: pos.y };

  useEffect(() => {
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const smoothFollow = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;

      gsap.set(cursor.current, {
        x: pos.x,
        y: pos.y,
      });

      requestAnimationFrame(smoothFollow);
    };

    window.addEventListener("mousemove", moveCursor);
    smoothFollow();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      ref={cursor}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "#FFA100",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 99999999,
      }}
    />
  );
}
