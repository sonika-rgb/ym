import { motion, useInView, type UseInViewOptions } from "motion/react";
import { useRef, type ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "blur-up";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  variant?: RevealVariant;
  className?: string;
  once?: boolean;
  margin?: UseInViewOptions["margin"];
}

export function Reveal({
  children,
  delay = 0,
  duration = 1.2,
  y = 30,
  x = 0,
  variant = "fade-up",
  className,
  once = true,
  margin = "-80px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin });

  const getVariants = () => {
    switch (variant) {
      case "blur-up":
        return {
          hidden: { opacity: 0, y, filter: "blur(12px)", scale: 0.98 },
          visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.92, y: 15 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: x || 40 },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: x || -40 },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -y },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: y || 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Cinematic smooth cubic-bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  delay = 0,
  className,
  margin = "-60px",
}: {
  children: ReactNode;
  staggerDelay?: number;
  delay?: number;
  className?: string;
  margin?: UseInViewOptions["margin"];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
