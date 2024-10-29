"use client";
import { useState, ReactNode } from "react";
import Tilt from "react-parallax-tilt";

export function ParallaxTilt({
  children,
  className,
  tiltMaxAngleX = 6,
  tiltMaxAngleY = 6,
}: {
  children: ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
}) {
  const [scale, setScale] = useState(1.15);

  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={scale}
      transitionSpeed={2500}
      className={className && className?.length > 0 ? className : ""}
    >
      {children}
    </Tilt>
  );
}
