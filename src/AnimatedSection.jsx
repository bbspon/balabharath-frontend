// AnimatedSection.jsx with Navbar Support and Custom Animation Variants

import React from "react";
import { motion } from "framer-motion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const imageSlideRight = {
  hidden: { opacity: 0, x: 100, rotate: 5, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export const buttonPop = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 1.1 },
  },
};

export const navItemFade = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AnimatedSection({
  children,
  delay = 0,
  type = "text",
}) {
  let variant;
  if (type === "image") variant = imageSlideRight;
  else if (type === "button") variant = buttonPop;
  else if (type === "nav") variant = navItemFade;
  else variant = fadeInUp;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className="py-3"
    >
      {children}
    </motion.div>
  );
}
