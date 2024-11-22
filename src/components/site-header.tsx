import Link from "next/link"
import $styles from './site-header.module.css';
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import MainNav from "@/components/Navigation/Navigation"
import { ThemeToggle } from "./Navigation/ThemeToggler/ThemeToggler"
import { useTheme } from 'next-themes'; // Import useTheme

export function SiteHeader() {
  const { theme } = useTheme();

  const headerClassName = theme === 'dark' ? "bg-neutral-950" : "bg-white";
  return (
    <header className={`sticky top-0 z-40 w-full border-b ${headerClassName}`}>
      <div className="container flex h-16 items-center space-x-4 sm:justify-between relative z-10">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link> 
        </div>
        <div className={$styles.homename}>
          <MainNav items={siteConfig.mainNav} />
        </div> 
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
