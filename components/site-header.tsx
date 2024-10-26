import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b shadow-sm bg-background/75 backdrop-blur-sm">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
     
      </div>
    </header>
  )
}
