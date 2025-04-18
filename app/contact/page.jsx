"use client";
import { useRef } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import QRCode from "@/components/qr-code";
import CursorTrail from "@/components/cursor-trail";
import FloatingStickers from "@/components/floating-stickers";

export default function ContactPage() {
 

  

  return (
    <main className="relative min-h-screen">
      <CursorTrail />
      <FloatingStickers />

      <div className="container px-4 py-16 md:py-24">
        <h1 className="mb-2 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Slide Into My DMs
        </h1>
        <p className="mb-12 text-center text-muted-foreground">
          Let's connect and create something amazing together
        </p>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">Message Me</h2>

            <form className="space-y-4" >
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  ref={nameRef}
                  placeholder="What should I call you?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  ref={emailRef}
                  placeholder="So I can reply to you"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  ref={messageRef}
                  placeholder="Tell me what's on your mind..."
                  className="min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">Find Me Online</h2>

            <div className="mb-6 flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="h-12 w-12 rounded-full p-0">
                <span className="sr-only">TikTok</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-brand-tiktok"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </Button>
              <Button variant="outline" className="h-12 w-12 rounded-full p-0">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
              <Button variant="outline" className="h-12 w-12 rounded-full p-0">
                <span className="sr-only">Spotify</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-music"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </Button>
              <Button variant="outline" className="h-12 w-12 rounded-full p-0">
                <span className="sr-only">YouTube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </Button>
            </div>

            <div className="text-center">
              <p className="mb-4 text-muted-foreground">
                Scan my social link QR code
              </p>
              <QRCode value="https://asadullahabbasi.com/social" size={200} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
