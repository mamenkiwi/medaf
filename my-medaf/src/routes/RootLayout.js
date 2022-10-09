import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={{
      initial: {
        opacity: 0
      },
      in: {
        opacity: 1
      },
      out: {
        opacity: 0
      }
    }}
    transition={{
      type: "spring",
      damping: 10,
      stiffness: 50
    }}
  >
    <Outlet />
  </motion.div>
)
  
}
