"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AnimatedIntro() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
      >
        ✌️ Hey there, I'm
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
      >
Gen Z      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto max-w-2xl text-xl text-muted-foreground"
      >
        Digital creator, aesthetic enthusiast, and vibes curator. I make content that's a little bit of everything.
      </motion.p>
    </div>
  )
}
