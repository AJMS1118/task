import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useTheme } from "../../context/ThemeContext";

export const StarryBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!isDark) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        style={{
          background: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.1} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0.5}
          fade
          speed={1}
        />
        <fog attach="fog" args={["#0a0a0a", 10, 30]} />
      </Canvas>
    </div>
  );
};
