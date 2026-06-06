type NavLink = {
  name: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [];

/** Drawer / archive chrome only */
export const NAV_LINKS_V1 = [
  { name: "Home", href: "/v1" },
  { name: "Projects", href: "/v1/projects" },
  { name: "Blog", href: "/v1/blog" },
  { name: "Services", href: "/v1/services" },
];
