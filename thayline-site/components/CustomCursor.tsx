"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "interactive" | "image";

export default function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>("default");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("img,[data-cursor='image']")) {
        setMode("image");
        return;
      }
      if (target.closest("a,button,[data-cursor='link']")) {
        setMode("interactive");
        return;
      }
      setMode("default");
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  const isImage = mode === "image";
  const isInteractive = mode === "interactive";

  return (
    <>
      <motion.div
        className={`cursor-dot ${isImage ? "cross" : ""}`}
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      />
      <motion.div
        className={`cursor-ring ${isInteractive ? "grow" : ""} ${isImage ? "cross" : ""}`}
        animate={{ x: position.x - 18, y: position.y - 18 }}
        transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.5 }}
      />
    </>
  );
}
