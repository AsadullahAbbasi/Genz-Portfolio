"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Palette, Moon, Sun, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeSwitcherProps {
  className?: string
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { name: "Light", value: "light", icon: Sun },
    { name: "Dark", value: "dark", icon: Moon },
    { name: "System", value: "system", icon: Monitor },
    
  ]

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={cn("rounded-full", className)}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => {
          const Icon = t.icon
          return (
            <DropdownMenuItem
              key={t.value}
              onClick={() => {
                setTheme(t.value)
                setIsOpen(false)
              }}
              className={cn("flex items-center gap-2 cursor-pointer", theme === t.value && "bg-accent")}
            >
              <Icon className="h-4 w-4" />
              <span>{t.name}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
