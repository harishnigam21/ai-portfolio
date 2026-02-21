export interface NavItem {
  id: number;
  name: string;
  path: string;
}

export const list: NavItem[] = [
  { id: 1, name: "Home", path: "#home" },
  { id: 2, name: "About Me", path: "#about" },
  { id: 3, name: "Education", path: "#education" },
  { id: 4, name: "Experience", path: "#experience" },
  { id: 5, name: "Projects", path: "#projects" },
  { id: 6, name: "Achievements", path: "#achievements" },
  { id: 7, name: "Contact", path: "#contact" },
];