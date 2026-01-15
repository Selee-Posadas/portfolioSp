export interface NavItem {
  label: string;
  path: string;
}


export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "PROJECTS", path: "/projects" },
  { label: "CONTACT", path: "/contact" },
];