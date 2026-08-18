import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SpotlightCard({ 
  children, 
  className = "", 
  spotlightColor = "rgba(59, 130, 246, 0.15)",
  borderColor = "rgba(59, 130, 246, 0.3)"
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative overflow-hidden rounded-3xl border border-white/8 bg-[#0B0F19]/80 backdrop-blur-xl transition-colors duration-300 ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      
      {/* Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 35%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}
