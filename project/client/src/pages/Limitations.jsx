"use strict";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Info, ShieldAlert } from "lucide-react";
const rules = [
  ["Literature mention", "A biomarker or contaminant term appears in the returned title or abstract."],
  ["Co-occurrence", "Two terms appear in the same record; this does not prove they interacted biologically."],
  ["Context-dependent", "Interpretation can change with species, tissue, life stage, dose, assay, or exposure duration."],
  ["Verified response", "A human reviewer has checked the original study or a sufficiently detailed abstract."]
];
export default function Limitations() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-76px)] bg-[#f4f8f7] text-[#102f36]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1000px] px-5 py-10 lg:px-8", children: [
    /* @__PURE__ */ jsxs(Link, { href: "/dashboard", className: "inline-flex items-center gap-2 text-sm font-semibold text-[#087f85]", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to explorer"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 border-b border-[#dbe6e5] pb-8", children: [
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#c5841e]", children: [
        /* @__PURE__ */ jsx(ShieldAlert, { className: "h-4 w-4" }),
        " Interpretation rules"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 max-w-3xl font-display text-5xl font-semibold tracking-[-.06em]", children: "The dashboard shows associations. Science supplies the context." }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-7 text-[#698080]", children: "XenoLens is a literature exploration instrument. It helps people find and organize evidence, but it does not replace experimental design, statistical analysis, or expert toxicological interpretation." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-5 lg:grid-cols-[1.1fr_.9fr]", children: [
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[#dbe6e5] bg-white p-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Info, { className: "h-5 w-5 text-[#0b9da1]" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold", children: "Evidence language" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 divide-y divide-[#edf2f1]", children: rules.map(([label, description]) => /* @__PURE__ */ jsxs("div", { className: "py-5 first:pt-0 last:pb-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#24444a]", children: label }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-[#698080]", children: description })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[#f2b85b]/35 bg-[#fff9ec] p-7", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.18em] text-[#9b711d]", children: "What XenoLens does not do" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 text-sm leading-6 text-[#805a13]", children: [
          /* @__PURE__ */ jsx("p", { children: "It does not predict toxicity, diagnose contamination, estimate effect sizes, or determine that a biomarker change is beneficial or harmful." }),
          /* @__PURE__ */ jsx("p", { children: "It does not treat keyword frequency as a measurement of biological importance." }),
          /* @__PURE__ */ jsx("p", { children: "It does not hide uncertainty when a public API returns incomplete metadata or ambiguous language." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 border-t border-[#e7c77c] pt-5", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#805a13]", children: "Use the source trail" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-[#9b711d]", children: "Open the original record, check the experimental conditions, and interpret the biomarker in context." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mt-5 rounded-3xl bg-[#102f36] p-7 text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-1 h-5 w-5 shrink-0 text-[#73e5e4]" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold", children: "A transparent technical method" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-6 text-white/55", children: "The project records its query, API source, retrieval date, browser-side processing rules, and evidence labels. That makes the dashboard reproducible as a frontend study and honest as a scientific communication tool." })
      ] })
    ] }) })
  ] }) });
}
