"use strict";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, Search, ShieldAlert } from "lucide-react";
import { searchEuropePmc } from "@/lib/api";
import { benchmarkQuery, biomarkerColors, biomarkerGroups } from "@/lib/evidence";
function matched(article) {
  const text = `${article.title} ${article.abstractText}`.toLowerCase();
  return Object.entries(biomarkerGroups).filter(([, terms]) => terms.some((term) => text.includes(term))).map(([name]) => name);
}
export default function Evidence() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(benchmarkQuery);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    searchEuropePmc(benchmarkQuery, 20).then((result) => setArticles(result.articles)).catch((err) => setError(err.message)).finally(() => setLoading(false));
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-76px)] bg-[#f4f8f7] text-[#102f36]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1200px] px-5 py-10 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-6 border-b border-[#dbe6e5] pb-8 lg:flex-row lg:items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.2em] text-[#0b9da1]", children: "Evidence / source trail" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-semibold tracking-[-.06em]", children: "The papers behind the signal." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-6 text-[#698080]", children: "Each card keeps the original record close to the association it supports. Search results are literature mentions until the source is manually verified." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-full border border-[#cfe1df] bg-white px-4 py-2 text-xs text-[#698080]", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-[#0b9da1]" }),
        " Europe PMC source"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-7 flex items-center gap-3 rounded-2xl border border-[#cfe1df] bg-white p-3", children: [
      /* @__PURE__ */ jsx(Search, { className: "ml-3 h-4 w-4 text-[#0b9da1]" }),
      /* @__PURE__ */ jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), className: "min-w-0 flex-1 bg-transparent px-1 py-3 text-sm outline-none" }),
      /* @__PURE__ */ jsxs("span", { className: "hidden text-xs text-[#819393] sm:block", children: [
        articles.length,
        " loaded records"
      ] })
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "mt-5 rounded-xl border border-[#f2b85b]/40 bg-[#fff9ec] p-4 text-sm text-[#805a13]", children: error }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-4", children: loading ? /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[#dbe6e5] bg-white p-8 text-sm text-[#698080]", children: "Retrieving source records\u2026" }) : articles.map((article) => /* @__PURE__ */ jsxs("article", { className: "rounded-3xl border border-[#dbe6e5] bg-white p-6 shadow-[0_12px_32px_rgba(9,50,57,.05)] transition hover:-translate-y-0.5 hover:border-[#9ed8d5]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[#0b9da1]", children: [
            /* @__PURE__ */ jsx("span", { children: article.pubYear || "Year unavailable" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#b7c6c5]", children: "\xB7" }),
            /* @__PURE__ */ jsx("span", { children: article.journalTitle || "Europe PMC record" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-xl font-semibold leading-7 text-[#173a42]", children: article.title }),
          article.abstractText && /* @__PURE__ */ jsx("p", { className: "mt-3 line-clamp-3 text-sm leading-6 text-[#698080]", children: article.abstractText })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: article.url || "https://europepmc.org", target: "_blank", rel: "noreferrer", className: "inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#cfe1df] px-4 py-2.5 text-sm font-semibold text-[#087f85] transition hover:border-[#0b9da1]", children: [
          "Open source ",
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[#f2b85b]/40 bg-[#fff9ec] px-3 py-1.5 text-xs font-medium text-[#8c671a]", children: "Literature mention" }),
        matched(article).map((name) => /* @__PURE__ */ jsx("span", { className: "rounded-full px-3 py-1.5 text-xs font-semibold", style: { color: biomarkerColors[name], background: `${biomarkerColors[name]}18`, border: `1px solid ${biomarkerColors[name]}55` }, children: name }, name))
      ] })
    ] }, article.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex gap-3 rounded-2xl border border-[#f2b85b]/35 bg-[#fff9ec] p-5 text-sm leading-6 text-[#805a13]", children: [
      /* @__PURE__ */ jsx(ShieldAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Interpretation rule:" }),
        " a matched keyword means the term appears in a returned record. It does not automatically prove that exposure caused a biomarker response."
      ] })
    ] })
  ] }) });
}
