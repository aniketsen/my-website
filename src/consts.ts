import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Aniket Sen",
  DESCRIPTION: "Personal website of Aniket Sen, postdoctoral researcher in lattice QCD at the University of Bonn.",
  AUTHOR: "Aniket Sen",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "sen@hiskp.uni-bonn.de",
    HREF: "mailto:sen@hiskp.uni-bonn.de",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "aniketsen",
    HREF: "https://github.com/aniketsen"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Aniket Sen",
    HREF: "https://www.linkedin.com/in/aniket-sen-53916b41/",
  },
]

