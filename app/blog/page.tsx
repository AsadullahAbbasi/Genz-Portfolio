"use client";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CursorTrail from "@/components/cursor-trail";
import FloatingStickers from "@/components/floating-stickers";
import { useState } from "react";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState([
    { id: 1, reactions: 28 },
    { id: 2, reactions: 32 },
    { id: 3, reactions: 23 },
    { id: 4, reactions: 34 },
  ]);

  const blogPosts = [
    {
      id: 1,
      title: "That time I found the perfect aesthetic...",
      content:
        "Just vibing and found this amazing color palette that literally changed my life. It's giving Y2K meets cyberpunk and I'm obsessed. #aesthetic #vibes",
      date: "April 12, 2024",
      reactions: selectedPost[0].reactions,
      comments: 8,
    },
    {
      id: 2,
      title: "My thoughts on the latest TikTok trend",
      content:
        "Everyone's doing this new dance and honestly it's so fun but also kinda cringe? I tried it anyway and now I can't stop. The song is stuck in my head 24/7. #trendalert",
      date: "April 8, 2024",
      reactions: selectedPost[1].reactions,
      comments: 12,
    },
    {
      id: 3,
      title: "Why Gen Z humor is elite",
      content:
        "The way we can communicate with just random sounds and everyone understands? Elite. The way we can make anything into a meme? Iconic. Our humor is so chaotic and I love it.",
      date: "March 30, 2024",
      reactions: selectedPost[2].reactions,
      comments: 15,
    },
    {
      id: 4,
      title: "My creative process explained",
      content:
        "Step 1: Procrastinate. Step 2: Panic. Step 3: Get randomly inspired at 2am. Step 4: Create something in a feverish state. Step 5: Post it and hope for the best.",
      date: "March 22, 2024",
      reactions: selectedPost[3].reactions,
      comments: 9,
    },
  ];

  return (
    <main className="relative min-h-screen">
      <CursorTrail />
      <FloatingStickers />

      <div className="container px-4 py-16 md:py-24">
        <h1 className="mb-2 text-center text-4xl font-bold tracking-tight md:text-5xl">
          My Blog
        </h1>
        <p className="mb-12 text-center text-muted-foreground">
          Random thoughts, vibes, and creative process
        </p>

        <div className="mx-auto max-w-3xl space-y-8">
          {blogPosts.map((post, i) => (
            <div
              key={post.id}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Profile"
                  />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </div>

              <p className="mb-6">{post.content}</p>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Heart className="h-4 w-4" />
                  <span
                    onClick={() => {
                      const updatedPosts = selectedPost.map((post) =>
                        post.id === post.id
                          ? { ...post, reactions: post.reactions + 1 }
                          : post
                      );
                      setSelectedPost(updatedPosts);
                    }}
                  >
                    {post.reactions}
                  </span>{" "}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
