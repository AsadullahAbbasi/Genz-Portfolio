"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingStickers() {
  const [stickers, setStickers] = useState<any[]>([])

  useEffect(() => {
    // Create random stickers
    const newStickers = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      emoji: getRandomEmoji(),
    }))

    setStickers(newStickers)
  }, [])

  const getRandomEmoji = () => {
    const emojis = ["✨", "💖", "🌈", "🔥", "💯", "🌟", "💫", "⚡", "🦋", "🎵"]
    return emojis[Math.floor(Math.random() * emojis.length)]
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stickers.map((sticker) => (
        <motion.div
          key={sticker.id}
          className="absolute text-3xl"
          style={{
            left: `${sticker.x}%`,
            top: `${sticker.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.8,
            scale: sticker.scale,
            rotate: sticker.rotation,
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            rotate: { duration: 1 },
            x: { repeat: Number.POSITIVE_INFINITY, duration: 5 + Math.random() * 5, ease: "easeInOut" },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 5 + Math.random() * 5, ease: "easeInOut" },
          }}
        >
          {sticker.emoji}
        </motion.div>
      ))}
    </div>
  )
}
