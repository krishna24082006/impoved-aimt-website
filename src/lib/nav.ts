export const NAV_ITEMS = [
  { to: "/", label: "Home", short: "01" },
  { to: "/about", label: "About", short: "02" },
  { to: "/courses", label: "Courses", short: "03" },
  { to: "/admissions", label: "Admissions", short: "04" },
  { to: "/campus", label: "Campus", short: "05" },
  { to: "/placements", label: "Placements", short: "06" },
  { to: "/contact", label: "Contact", short: "07" },
] as const;

export type NavPath = (typeof NAV_ITEMS)[number]["to"];
