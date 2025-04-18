"use client"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedIntro from "@/components/animated-intro"
import FunFacts from "@/components/fun-facts"
import SocialFeed from "@/components/social-feed"
import CursorTrail from "@/components/cursor-trail"
import FloatingStickers from "@/components/floating-stickers"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CursorTrail />
      <FloatingStickers />

      <section className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <AnimatedIntro />

        <div className="mt-12 space-y-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-pink-500" />
              Latest Vibes
              <Sparkles className="h-5 w-5 text-pink-500" />
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SocialFeed type="featured" limit={3} />
          </div>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            <Link href="/portfolio" onClick={()=>console.log("sdsds")
            } className="group">
              See All My Content
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">Random Facts About Me</h2>
          <FunFacts />
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">Latest Blog Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold">That time I found the perfect aesthetic...</h3>
                <p className="text-muted-foreground">
                  Just vibing and found this amazing color palette that literally changed my life...
                </p>
                <div className="mt-4 flex justify-between">
                  <span className="text-sm text-muted-foreground">April 12, 2024</span>
                  <span className="text-sm font-medium text-primary">32 reactions</span>
                </div>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" size="lg" className="mt-8">
            <Link href="/blog" className="group">
              Read My Blog
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
