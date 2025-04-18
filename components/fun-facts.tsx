"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

export default function FunFacts() {
  const facts = [
    "I can't start my day without iced coffee, even in winter",
    "My camera roll is 90% sunset pictures and 10% memes",
    "I've watched the same show on Netflix 7 times",
    "I collect vinyl records but don't own a record player",
    "I can type 120 words per minute but only when it's gossip",
    "My favorite sound is rain on a window",
    "I once went viral for a video of my cat knocking over my plants",
    "I have a playlist for every possible mood",
    "I'm chronically online but will ghost everyone for days",
    "I can't cook but I can make amazing aesthetic food boards",
  ]

  const [currentFacts, setCurrentFacts] = useState(facts.slice(0, 4))
  const [isShuffling, setIsShuffling] = useState(false)

  const shuffleFacts = () => {
    setIsShuffling(true)

    setTimeout(() => {
      const shuffled = [...facts].sort(() => 0.5 - Math.random())
      setCurrentFacts(shuffled.slice(0, 4))
      setIsShuffling(false)
    }, 500)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid gap-6 md:grid-cols-2">
        {currentFacts.map((fact, index) => (
          <motion.div
            key={fact}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isShuffling ? 0 : 1,
              y: isShuffling ? 20 : 0,
            }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <p className="text-lg">{fact}</p>
          </motion.div>
        ))}
      </div>

      <Button onClick={shuffleFacts} disabled={isShuffling} variant="outline" className="mx-auto mt-8 flex">
        <Shuffle className="mr-2 h-4 w-4" />
        Shuffle Facts
      </Button>
    </div>
  )
}
