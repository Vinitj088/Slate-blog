export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "< Slate />",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    docs: "#",
  },
}
