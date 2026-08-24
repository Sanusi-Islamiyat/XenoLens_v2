"use strict";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "wouter";
import { ArrowRight, Bug, Map, Search } from "lucide-react";
const species = [
  { name: "Chironomus riparius", group: "Aquatic dipteran", note: "A strong ecotoxicology case study for larval exposure and antioxidant responses.", color: "#24c6c9" },
  { name: "Drosophila melanogaster", group: "Model dipteran", note: "A widely used model for xenobiotic metabolism, resistance, and molecular response.", color: "#7bd5a4" },
  { name: "Aedes aegypti", group: "Mosquito", note: "A useful lens for insecticide response and detoxification pathways.", color: "#f2b85b" },
  { name: "Anopheles gambiae", group: "Mosquito", note: "A literature-rich system for vector biology and chemical resistance research.", color: "#f27d70" }
];
export default function Species() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-76px)] bg-[#f4f8f7] text-[#102f36]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1200px] px-5 py-10 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-5 border-b border-[#dbe6e5] pb-8 lg:flex-row lg:items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#0b9da1]", children: [
          /* @__PURE__ */ jsx(Bug, { className: "h-4 w-4" }),
          " Taxonomic explorer"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-semibold tracking-[-.06em]", children: "Start with the organism." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-6 text-[#698080]", children: "Diptera is the first validation domain, not the boundary of the product. Choose a species to move directly into its xenobiotic and biomarker evidence." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-full border border-[#cfe1df] bg-white px-4 py-2 text-xs text-[#698080]", children: [
        /* @__PURE__ */ jsx(Map, { className: "h-4 w-4 text-[#0b9da1]" }),
        " 4 benchmark taxa"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-5 md:grid-cols-2", children: species.map((item) => /* @__PURE__ */ jsxs("article", { className: "group rounded-3xl border border-[#dbe6e5] bg-white p-6 shadow-[0_12px_32px_rgba(9,50,57,.05)] transition hover:-translate-y-1 hover:border-[#9ed8d5]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl", style: { background: `${item.color}18`, color: item.color }, children: /* @__PURE__ */ jsx(Bug, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("span", { className: "rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em]", style: { color: item.color, borderColor: `${item.color}55`, background: `${item.color}12` }, children: item.group })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-8 font-display text-2xl font-semibold tracking-[-.04em]", children: item.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-sm leading-6 text-[#698080]", children: item.note }),
      /* @__PURE__ */ jsxs(Link, { href: `/dashboard?q=${encodeURIComponent(`${item.name} xenobiotic biomarker`)}`, className: "mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#087f85]", children: [
        "Explore evidence ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
      ] })
    ] }, item.name)) }),
    /* @__PURE__ */ jsx("section", { className: "mt-7 rounded-3xl bg-[#102f36] p-7 text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-[#73e5e4]", children: [
          /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }),
          " Open search"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-2xl font-semibold", children: "Looking for another organism?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/50", children: "Use the main evidence explorer with any taxon, chemical, or biomarker term." })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: "/dashboard", className: "inline-flex items-center gap-2 rounded-xl bg-[#24c6c9] px-5 py-3 text-sm font-semibold text-[#061219]", children: [
        "Search the literature ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] }) });
}
