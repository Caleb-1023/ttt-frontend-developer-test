"use client";
import React from "react";
import { motion } from "framer";

export default function Animation({ className, variants, children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={className || ""}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
