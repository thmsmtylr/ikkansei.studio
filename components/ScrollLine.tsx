"use client";
import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollLine({
  children,
  className,
  left = "-left-10",
  top = "top-0",
  offset = ["start end", "end end"],
}: {
  children: ReactNode;
  className: string;
  left?: string;
  top?: string;
  offset?: any[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={className} ref={ref}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={`absolute inset-y-0 ${left} ${top} w-px bg-jurassic-park`}
        style={{ scaleY, originY: 0 }}
      />
      {children}
    </div>
  );
}
