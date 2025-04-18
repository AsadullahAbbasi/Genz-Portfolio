import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeSwitcher from "@/components/theme-switcher"
import Navbar from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gen Z Creator Portfolio",
  description: "A vibrant personal brand website for a Gen Z creator",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
            <ThemeSwitcher className="fixed bottom-4 right-4 z-50" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'