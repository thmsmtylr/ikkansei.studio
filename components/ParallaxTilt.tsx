"use client";
import Tilt from "react-parallax-tilt";

export function ParallaxTilt({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      className={className && className?.length > 0 ? className : ""}
    >
      {children}
    </Tilt>
  );
}
