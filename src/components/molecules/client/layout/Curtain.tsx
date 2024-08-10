"use client"
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const curtainVariant = {
  enter: {
    transition: {
      staggerChildren: 0.08
    }
  },
  end: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1
    }
  }
}

const colorVariant = {
  start: { scaleY: 1 },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  end: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

const Curtain = () => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait" >
      <motion.div
        key={pathName}
        initial="start"
        animate="enter"
        exit="end"
        variants={curtainVariant}
        className="curtain"
      >
        <motion.div variants={colorVariant} className="color-1" />
        <motion.div variants={colorVariant} className="color-2" />
        <motion.div variants={colorVariant} className="color-3" />
      </motion.div>
    </AnimatePresence>
  )
}

export default Curtain
