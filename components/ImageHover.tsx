"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

export function ImageHover({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className && className.length > 0 ? className : "rounded-xxl",
        "overflow-hidden",
      )}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
