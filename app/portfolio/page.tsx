import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SocialFeed from "@/components/social-feed"
import CursorTrail from "@/components/cursor-trail"
import FloatingStickers from "@/components/floating-stickers"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <CursorTrail />
      <FloatingStickers />

      <div className="container px-4 py-16 md:py-24">
        <h1 className="mb-2 text-center text-4xl font-bold tracking-tight md:text-5xl">Genz Content</h1>
        <p className="mb-8 text-center text-muted-foreground">Check out all my creative work and social posts</p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="art">Art</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <SocialFeed type="all" limit={12} />
            </div>
          </TabsContent>
          <TabsContent value="tiktok" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <SocialFeed type="tiktok" limit={6} />
            </div>
          </TabsContent>
          <TabsContent value="instagram" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <SocialFeed type="instagram" limit={6} />
            </div>
          </TabsContent>
          <TabsContent value="art" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <SocialFeed type="art" limit={6} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
