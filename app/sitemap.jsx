import { profile, navLinks } from "@/lib/data";

export default function sitemap() {
  return navLinks.map((link) => ({
    url: `${profile.site}${link.path === "/" ? "" : link.path}`,
    lastModified: new Date(),
  }));
}
