import * as React from "react"
import Link from "next/link"

import { NavItem } from "../types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "../utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium font-bold text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
