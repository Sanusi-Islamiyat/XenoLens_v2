"use strict"; 
import { jsx, jsxs } from "react/jsx-runtime"; 
import { Link, useLocation } from "wouter"; 
import { Bell, ChevronDown, FlaskConical, Search, Sparkles } from "lucide-react"; 
import { cn } from "@/lib/utils"; 
const navItems = [ 
  { href: "/dashboard", label: "Explore", icon: Sparkles }, 
  { href: "/pathway", label: "Biomarker map", icon: FlaskConical }, 
  { href: "/species", label: "Species", icon: Sparkles }, 
  { href: "/chemicals", label: "Chemicals", icon: FlaskConical }, 
  { href: "/evidence", label: "Evidence", icon: Search } 
]; 
export default function AppShell({ children }) { 
  const [location] = useLocation(); 
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#061219] text-[#edf6f4] selection:bg-[#24c6c9]/30", children: [ 
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-white/[0.08] bg-[#061219]/90 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-[76px] max-w-[1480px] items-center gap-6 px-5 lg:px-8", children: [ 
      /* @__PURE__ */ jsxs(Link, { href: "/", className: "group flex min-w-[180px] items-center gap-3", children: [ 
        /* @__PURE__ */ jsx("div", { className: "relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#24c6c9]/40 bg-[#0b2029] shadow-[0_0_22px_rgba(36,198,201,0.12)]", children: /* @__PURE__ */ jsx("img", { src: "/manus-storage/xenolens-logo_291dcb8c.png", alt: "", className: "h-7 w-7 object-contain" }) }), 
        /* @__PURE__ */ jsxs("span", { className: "font-display text-[22px] font-semibold tracking-[-0.04em]", children: [ 
          "Xeno", 
          /* @__PURE__ */ jsx("span", { className: "text-[#24c6c9]", children: "Lens" }) 
        ] }) 
      ] }), 
      /* @__PURE__ */ jsx("nav", { className: "hidden flex-1 items-center gap-1 md:flex", children: navItems.map(({ href, label, icon: Icon }) => { 
        const active = location === href || href === "/dashboard" && location === "/"; 
        return /* @__PURE__ */ jsxs(Link, { href, className: cn("group relative flex items-center gap-2 px-4 py-3 text-sm font-medium text-white/55 transition-colors hover:text-white", active && "text-[#73e5e4]"), children: [ 
          /* @__PURE__ */ jsx(Icon, { className: cn("h-4 w-4 transition-transform group-hover:-translate-y-0.5", active && "text-[#24c6c9]") }), 
          label, 
          active && /* @__PURE__ */ jsx("span", { className: "absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-[#24c6c9] shadow-[0_0_14px_rgba(36,198,201,0.8)]" }) 
        ] }, href); 
      }) }), 
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-3", children: [ 
        /* @__PURE__ */ jsx(Link, { href: "/dashboard", "aria-label": "Open search", className: "hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#24c6c9]/50 hover:text-[#73e5e4] sm:flex", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }) }), 
        /* @__PURE__ */ jsxs("button", { "aria-label": "Notifications", className: "relative hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:text-white sm:flex", children: [ 
          /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }), 
          /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#24c6c9]" }) 
        ] }), 
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1.5", children: [ 
          /* @__PURE__ */ jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#16343d] text-xs font-semibold text-[#9be7e2]", children: "IS" }), 
          /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 text-white/40" }) 
        ] }) 
      ] }) 
    ] }) }), 
    /* @__PURE__ */ jsx("main", { children }) 
  ] }); 
} 