"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prevTrail) => {
        // Add new position to the beginning
        const newTrail = [{ x: mousePosition.x, y: mousePosition.y, id: Date.now() }, ...prevTrail]

        // Keep only the last 5 positions
        return newTrail.slice(0, 5)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [mousePosition])

  return (
    <>
      {trail.map((position, index) => (
        <motion.div
          key={position.id+index}
          className="pointer-events-none fixed z-50 h-4 w-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-70 mix-blend-screen"
          style={{
            left: position.x - 8,
            top: position.y - 8,
          }}
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      ))}
    </>
  )
}
