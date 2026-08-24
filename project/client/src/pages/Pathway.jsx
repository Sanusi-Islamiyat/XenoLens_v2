"use strict";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, CircleHelp, RotateCcw, ShieldAlert } from "lucide-react";
const nodes = [
  { id: "exposure", title: "Xenobiotic exposure", subtitle: "uptake / exposure", color: "#f27d70", x: "8%", y: "42%", count: "126" },
  { id: "p450", title: "Cytochrome P450", subtitle: "phase-I biotransformation", color: "#a884ff", x: "35%", y: "42%", count: "1.2K" },
  { id: "gst", title: "GST detoxification", subtitle: "phase-II conjugation", color: "#24c6c9", x: "37%", y: "70%", count: "1.1K" },
  { id: "stress", title: "Oxidative stress", subtitle: "ROS imbalance", color: "#f2b85b", x: "67%", y: "42%", count: "892" },
  { id: "sod", title: "SOD response", subtitle: "antioxidant signal", color: "#7bd5a4", x: "67%", y: "16%", count: "537" },
  { id: "h2o2", title: "H\u2082O\u2082", subtitle: "hydrogen peroxide", color: "#f2b85b", x: "67%", y: "70%", count: "742" }
];
export default function Pathway() {
  const [selected, setSelected] = useState("p450");
  const selectedNode = nodes.find((node) => node.id === selected) ?? nodes[1];
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-76px)] bg-[#061219] text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1480px] px-5 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.2em] text-[#73e5e4]", children: "Biomarker map / view 01" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-semibold tracking-[-.06em]", children: "Molecular pathway" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/45", children: "Xenobiotic biotransformation & oxidative stress" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("button", { className: "rounded-xl border border-white/10 bg-white/[.04] px-4 py-2.5 text-sm text-white/65 transition hover:border-[#24c6c9]/50", children: [
          "Pathway view ",
          /* @__PURE__ */ jsx(ChevronRight, { className: "ml-2 inline h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => setSelected("p450"), className: "flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/65 transition hover:text-white", children: [
          /* @__PURE__ */ jsx(RotateCcw, { className: "h-4 w-4" }),
          " Reset view"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-7 grid gap-5 lg:grid-cols-[1fr_340px]", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative min-h-[640px] overflow-hidden rounded-3xl border border-white/10 bg-[#071b24] bg-cover bg-center p-7", style: { backgroundImage: "linear-gradient(140deg,rgba(7,27,36,.97),rgba(7,27,36,.72)), url(/manus-storage/xenolens-pathway-texture_03a1b1b8.jpg)" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute right-6 top-6 flex flex-wrap justify-end gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-white/50", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[#f27d70]/35 bg-[#f27d70]/10 px-3 py-2", children: "Exposure" }),
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[#a884ff]/35 bg-[#a884ff]/10 px-3 py-2", children: "Biotransformation" }),
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[#24c6c9]/35 bg-[#24c6c9]/10 px-3 py-2", children: "Detoxification" }),
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[#f2b85b]/35 bg-[#f2b85b]/10 px-3 py-2", children: "Stress" })
        ] }),
        /* @__PURE__ */ jsxs("svg", { className: "pointer-events-none absolute inset-0 h-full w-full opacity-60", viewBox: "0 0 1000 700", preserveAspectRatio: "none", children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("marker", { id: "arrow", markerWidth: "8", markerHeight: "8", refX: "6", refY: "3", orient: "auto", children: /* @__PURE__ */ jsx("path", { d: "M0,0 L0,6 L7,3 z", fill: "#9fd8d4" }) }) }),
          /* @__PURE__ */ jsx("path", { d: "M175 330 L350 330", stroke: "#9fd8d4", strokeWidth: "2", markerEnd: "url(#arrow)" }),
          /* @__PURE__ */ jsx("path", { d: "M475 330 L675 330", stroke: "#9fd8d4", strokeWidth: "2", markerEnd: "url(#arrow)" }),
          /* @__PURE__ */ jsx("path", { d: "M470 370 L470 520", stroke: "#9fd8d4", strokeWidth: "2", markerEnd: "url(#arrow)" }),
          /* @__PURE__ */ jsx("path", { d: "M750 300 L750 180", stroke: "#9fd8d4", strokeWidth: "2", markerEnd: "url(#arrow)" }),
          /* @__PURE__ */ jsx("path", { d: "M750 380 L750 525", stroke: "#9fd8d4", strokeWidth: "2", markerEnd: "url(#arrow)" })
        ] }),
        nodes.map((node) => /* @__PURE__ */ jsxs("button", { onClick: () => setSelected(node.id), style: { left: node.x, top: node.y, borderColor: `${node.color}99`, boxShadow: selected === node.id ? `0 0 28px ${node.color}45` : "none" }, className: "absolute z-10 w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-[#081c25]/95 p-4 text-left transition hover:-translate-y-[54%]", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-3 block h-2 w-8 rounded-full", style: { background: node.color } }),
          /* @__PURE__ */ jsx("span", { className: "block text-sm font-semibold text-white", children: node.title }),
          /* @__PURE__ */ jsx("span", { className: "mt-1 block text-xs text-white/45", children: node.subtitle }),
          /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-block rounded-full bg-white/[.08] px-2 py-1 text-[10px] font-semibold text-white/55", children: [
            node.count,
            " evidence pieces"
          ] })
        ] }, node.id)),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 max-w-xs rounded-2xl border border-white/10 bg-[#061219]/80 p-4 backdrop-blur-xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-[#73e5e4]", children: "Evidence in view" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-3xl", children: "4,519" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-5 text-white/45", children: "Pathways summarize literature associations and show context. They do not establish deterministic outcomes." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "rounded-3xl border border-white/10 bg-[#081923] p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-[#73e5e4]", children: "Selected signal" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-2xl font-semibold", children: selectedNode.title })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => setSelected("p450"), "aria-label": "Reset selection", className: "text-white/35 hover:text-white", children: "\xD7" })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "mt-4 inline-flex rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-xs text-white/55", children: [
          selectedNode.count,
          " pieces of evidence"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-white/35", children: "Interpretation" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-white/65", children: "This node is presented as a literature-associated signal. Its meaning depends on species, tissue, dose, exposure duration, and assay context." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-white/35", children: "Connected context" }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: ["Diptera", "Insecticide", "Larvae", "Enzyme assay"].map((tag) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55", children: tag }, tag)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 pt-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-white/35", children: "Top source" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-medium leading-6 text-white/75", children: "Induction of xenobiotic metabolism genes in dipteran models under chemical exposure" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-white/35", children: "Example record \xB7 Europe PMC" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: "/evidence", className: "mt-8 flex items-center justify-between rounded-xl bg-[#24c6c9] px-4 py-3 text-sm font-semibold text-[#061219] transition hover:bg-[#65e2df]", children: [
          "View supporting evidence ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2 rounded-xl border border-[#f2b85b]/25 bg-[#f2b85b]/[.06] p-3 text-xs leading-5 text-[#f6d597]", children: [
          /* @__PURE__ */ jsx(ShieldAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }),
          "Association is not causality. Verify the original study before interpreting a response."
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: "/limitations", className: "mt-5 flex items-center gap-2 text-xs text-white/45 hover:text-white", children: [
          /* @__PURE__ */ jsx(CircleHelp, { className: "h-4 w-4" }),
          " Learn how to read the evidence"
        ] })
      ] })
    ] })
  ] }) });
}
