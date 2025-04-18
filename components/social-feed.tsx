"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface SocialFeedProps {
  type: "all" | "tiktok" | "instagram" | "art" | "featured";
  limit: number;
}

export default function SocialFeed({ type, limit }: SocialFeedProps) {
  // Mock data for social media posts
  const allPosts = [
    {
      id: 1,
      type: "instagram",
      image: "/instaPost.png",
      likes: 1243,
      comments: 89,
      caption: "Just vibing ✨ #aesthetic",
    },
    {
      id: 2,
      type: "tiktok",
      image: "/instaPost.png",
      videoEmbedUrl: "/abc.mp4",

      likes: 5678,
      comments: 321,
      caption: "This trend is everything 💯",
    },
    {
      id: 3,
      type: "art",
      image: "/instaPost.png",
      likes: 876,
      comments: 54,
      caption: "New digital art piece 🎨",
    },
    {
      id: 4,
      type: "instagram",
      image: "/instaPost.png",
      likes: 2345,
      comments: 123,
      caption: "Beach day was a vibe 🌊",
    },
    {
      id: 5,
      type: "tiktok",
      image: "/instaPost.png",
      likes: 9876,
      comments: 432,
      caption: "POV: when your bestie does that thing 😂",
    },
    {
      id: 6,
      type: "art",
      image: "/instaPost.png",
      likes: 1543,
      comments: 98,
      caption: "Experimenting with new styles ✨",
    },
    {
      id: 7,
      type: "instagram",
      videoEmbedUrl: "/abc.mp4",
      likes: 3421,
      comments: 156,
      caption: "Coffee shop finds 📸",
    },
    {
      id: 8,
      type: "tiktok",
      image: "/instaPost.png",
      likes: 7654,
      comments: 321,
      caption: "This sound is stuck in my head 🎵",
    },
    {
      id: 9,
      type: "art",
      videoEmbedUrl: "/abc.mp4",
      likes: 2187,
      comments: 76,
      caption: "Late night doodles 🌙",
    },
    {
      id: 10,
      type: "instagram",
      videoEmbedUrl: "/abc.mp4",
      likes: 4532,
      comments: 213,
      caption: "Festival outfit check ✓",
    },
    {
      id: 11,
      type: "tiktok",
      videoEmbedUrl: "/abc.mp4",

      likes: 8765,
      comments: 432,
      caption: "When the beat drops 🔥",
    },
    {
      id: 12,
      type: "art",
      videoEmbedUrl: "/abc.mp4",
      likes: 1987,
      comments: 87,
      caption: "New commission finished today 🎨",
    },
  ];

  // Filter posts based on type
  const filteredPosts =
    type === "all"
      ? allPosts.slice(0, limit)
      : type === "featured"
      ? allPosts.filter((post) => post.likes > 5000).slice(0, limit)
      : allPosts.filter((post) => post.type === type).slice(0, limit);

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <div className="aspect-square overflow-hidden">
            {post.videoEmbedUrl ? (
              <video
                width="400"
                height={post.type === "tiktok" ? 225 : 400}
                controls
                preload="metadata"
                className={`h-full w-full object-cover transition-transform duration-300 ${
                  hoveredId === post.id ? "scale-110" : "scale-100"
                }`}
              >
                <source src={post.videoEmbedUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.caption}
                width={400}
                height={post.type === "tiktok" ? 225 : 400}
                className={`h-full w-full object-cover transition-transform duration-300 ${
                  hoveredId === post.id ? "scale-110" : "scale-100"
                }`}
              />
            )}
          </div>

          <div
            className={` `}
          >
            <p className="mb-2 line-clamp-2 text-sm text-white">
              {post.caption}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-white">
                <Heart className="h-4 w-4" />
                <span className="text-xs">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">{post.comments}</span>
              </div>
              <Link
                href="https://www.instagram.com/p/DIfxS6ytdXA/?utm_source=ig_web_copy_link"
                className="ml-auto h-7 w-7 rounded-full bg-white/20 p-0 text-white"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="sr-only">Open post</span>
              </Link>
            </div>
          </div>
          </div>      ))}
    </>
  );
}
