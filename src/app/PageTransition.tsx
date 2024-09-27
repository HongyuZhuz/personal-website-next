"use client"; // 只在这个组件中使用客户端逻辑

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // 这个钩子只能在客户端使用

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}