import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Aniket Sen",
  DESCRIPTION: "Personal website of Aniket Sen, postdoctoral researcher in lattice QCD at the University of Bonn.",
  AUTHOR: "Aniket Sen",
}

// About Me Page
export const ABOUT: Page = {
  TITLE: "About Me",
  DESCRIPTION: "An overview of my background, research interests, and current projects.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Articles and updates about my research, projects, and whatever else I find interesting.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Past and current projects that I have been working on, including code repositories and demos where applicable.",
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
    TEXT: "About Me", 
    HREF: "/about", 
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

