import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      document.documentElement.style.setProperty("--cursor-scale", "0.5");
    };

    const handleMouseUp = () => {
      document.documentElement.style.setProperty("--cursor-scale", "1");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="fixed w-6 h-6 bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out mix-blend-difference"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%) scale(var(--cursor-scale, 1))",
      }}
    />
  );
};

export default Cursor;