"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 3,
  className,
  decimalPlaces = 0
}) {
  const ref = useRef(null);
  const [formattedNumber, setFormattedNumber] = useState("0");
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 10
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const formatted = Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces
      }).format(Number(latest.toFixed(decimalPlaces)));
      setFormattedNumber(formatted);
    });

    return () => unsubscribe();
  }, [springValue, decimalPlaces]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-white tracking-wider",
        className
      )}
      ref={ref}
    >
      {formattedNumber}+
    </span>
  );
}
