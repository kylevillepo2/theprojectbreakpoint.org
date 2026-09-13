import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pages = {
  "/": [
    "Project Breakpoint | Free Youth Tennis & Mentorship",
    "Student-led university chapters bringing free tennis coaching, equipment, and mentorship to youth. UC Irvine is active; UC San Diego is launching soon.",
  ],
  "/about": [
    "About | Project Breakpoint",
    "Meet Project Breakpoint, a student-led organization making tennis accessible through free coaching, equipment, and mentorship.",
  ],
  "/contact": [
    "Contact | Project Breakpoint",
    "Ask about free youth tennis programs, volunteering, equipment donations, and partnerships.",
  ],
  "/chapters": [
    "Chapters | Project Breakpoint",
    "Connect with our active UC Irvine chapter or help launch our incoming UC San Diego chapter.",
  ],
  "/events": [
    "Events | Project Breakpoint",
    "Find updates about Project Breakpoint youth tennis clinics and volunteer opportunities.",
  ],
  "/donate": [
    "Donate | Project Breakpoint",
    "Support free youth tennis programs, equipment, and mentorship through Project Breakpoint.",
  ],
};
export default function RouteBehavior() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
    const [title, description] = pages[pathname] || pages["/"];
    for (const [key, value] of Object.entries({
      "og:title": title,
      "og:description": description,
      "og:url": `https://theprojectbreakpoint.org${pathname}`,
      "twitter:title": title,
      "twitter:description": description,
    })) {
      const meta = document.querySelector(
        `meta[property="${key}"], meta[name="${key}"]`,
      );
      if (meta) meta.content = value;
    }
  }, [pathname, hash]);
  return null;
}
