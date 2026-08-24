"use strict";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowUpRight, BarChart3, BookOpen, ChevronRight, Filter, Loader2, RefreshCw, Search, ShieldAlert, Sparkles } from "lucide-react";
import { searchEuropePmc } from "@/lib/api";
import { benchmarkQuery, biomarkerColors, classifyArticles } from "@/lib/evidence";
const fallbackArticles = [
  { id: "demo-1", title: "Oxidative stress biomarkers in dipteran larvae exposed to pesticide mixtures", abstractText: "GST SOD hydrogen peroxide Chironomus pesticide", pubYear: "2024", journalTitle: "Ecotoxicology" },
  { id: "demo-2", title: "Cytochrome P450 induction and insecticide response in Drosophila", abstractText: "cytochrome P450 Drosophila insecticide xenobiotic", pubYear: "2022", journalTitle: "Insect Biochemistry" },
  { id: "demo-3", title: "Glutathione transferase and superoxide dismutase responses in aquatic Diptera", abstractText: "GST SOD Diptera contaminant oxidative stress", pubYear: "2020", journalTitle: "Environmental Research" }
];
function StatCard({ label, value, tint }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[#dbe6e5] bg-white p-5 shadow-[0_12px_32px_rgba(9,50,57,.06)]", children: [
    /* @__PURE__ */ jsx("div", { className: `mb-6 h-2 w-10 rounded-full ${tint}` }),
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-[#698080]", children: label }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-3xl font-semibold tracking-[-.05em] text-[#102f36]", children: value }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-[#819393]", children: "API-derived mention count" })
  ] });
}
export default function Dashboard() {
  const [location, navigate] = useLocation();
  const params = new URLSearchParams(location.split("?")[1] ?? "");
  const initialQuery = params.get("q") || benchmarkQuery;
  const [query, setQuery] = useState(initialQuery);
  const [articles, setArticles] = useState(fallbackArticles);
  const [total, setTotal] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [live, setLive] = useState(false);
  async function runSearch(nextQuery = query) {
    setLoading(true);
    setError("");
    try {
      const result = await searchEuropePmc(nextQuery);
      setArticles(result.articles.length ? result.articles : fallbackArticles);
      setTotal(result.total || result.articles.length);
      setLive(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
      setLive(false);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    runSearch(initialQuery);
  }, []);
  const data = useMemo(() => classifyArticles(articles), [articles]);
  const featured = articles.slice(0, 3);
  const topSpecies = data.speciesData.slice(0, 4);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#f4f8f7] text-[#102f36]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1480px] px-5 py-8 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 border-b border-[#dbe6e5] pb-8 lg:flex-row lg:items-end lg:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#0b9da1]", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
          " Evidence explorer"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-semibold tracking-[-.06em] text-[#102f36]", children: "The literature landscape, in context." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-6 text-[#698080]", children: "Explore public research records as biomarker mentions, species signals, and source-linked associations. No causal conclusions are inferred automatically." })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: "/limitations", className: "inline-flex items-center gap-2 text-sm font-semibold text-[#087f85]", children: [
        "How to read this dashboard ",
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      navigate(`/dashboard?q=${encodeURIComponent(query)}`);
      runSearch();
    }, className: "mt-7 flex flex-col gap-3 rounded-2xl border border-[#cfe1df] bg-white p-3 shadow-[0_15px_40px_rgba(9,50,57,.07)] md:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-3 px-3", children: [
        /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-[#0b9da1]" }),
        /* @__PURE__ */ jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), className: "min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-[#93a5a5]" })
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-center gap-2 rounded-xl bg-[#0b9da1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#087f85] active:scale-[.98]", children: [
        loading ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }),
        " ",
        loading ? "Retrieving" : "Refresh evidence"
      ] })
    ] }),
    error && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-3 rounded-xl border border-[#f2b85b]/50 bg-[#fff9ec] p-4 text-sm text-[#805a13]", children: [
      /* @__PURE__ */ jsx(ShieldAlert, { className: "h-4 w-4" }),
      " ",
      error,
      " Showing the local demonstration state so the dashboard remains inspectable."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsx(StatCard, { label: "Records retrieved", value: total.toLocaleString(), tint: "bg-[#24c6c9]" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Biomarker signals", value: data.biomarkerData.reduce((a, b) => a + b.value, 0).toLocaleString(), tint: "bg-[#a884ff]" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Taxa represented", value: data.speciesData.length.toString().padStart(2, "0"), tint: "bg-[#f2b85b]" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Live source", value: live ? "Europe PMC" : "Demo state", tint: "bg-[#f27d70]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-5 lg:grid-cols-[1.4fr_.8fr]", children: [
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[#dbe6e5] bg-white p-6 shadow-[0_12px_32px_rgba(9,50,57,.05)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-[#698080]", children: "Publication activity" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-2xl font-semibold tracking-[-.04em]", children: "Research attention over time" })
          ] }),
          /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-[#0b9da1]" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 h-[280px]", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(LineChart, { data: data.timelineData.length ? data.timelineData : [{ year: "2020", publications: 1 }, { year: "2022", publications: 2 }, { year: "2024", publications: 3 }], children: [
          /* @__PURE__ */ jsx(CartesianGrid, { stroke: "#e7efee", vertical: false }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "year", tick: { fill: "#819393", fontSize: 11 }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsx(YAxis, { allowDecimals: false, tick: { fill: "#819393", fontSize: 11 }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsx(Tooltip, { contentStyle: { borderRadius: 14, border: "1px solid #dbe6e5", boxShadow: "0 12px 24px rgba(9,50,57,.1)" } }),
          /* @__PURE__ */ jsx(Line, { type: "monotone", dataKey: "publications", stroke: "#0b9da1", strokeWidth: 3, dot: { fill: "#0b9da1", r: 4, strokeWidth: 3, stroke: "#e5f7f5" } })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[#dbe6e5] bg-[#102f36] p-6 text-white shadow-[0_12px_32px_rgba(9,50,57,.12)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-[#73e5e4]", children: "Evidence fingerprint" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-2xl font-semibold tracking-[-.04em]", children: "Biomarker mentions" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/[.06] px-2 py-1 text-[10px] text-white/55", children: live ? "Live" : "Preview" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-7 space-y-5", children: data.biomarkerData.map(({ name, value }) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full", style: { background: biomarkerColors[name] } }),
              name
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-white/70", children: value })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-2 rounded-full bg-white/10", children: /* @__PURE__ */ jsx("div", { className: "h-2 rounded-full", style: { width: `${Math.max(8, value / Math.max(1, data.biomarkerData[0]?.value) * 100)}%`, background: biomarkerColors[name] } }) })
        ] }, name)) }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-xs leading-5 text-white/45", children: "Counts represent terms found in returned titles and abstracts. They are not effect-size measurements." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-5 lg:grid-cols-[.9fr_1.1fr]", children: [
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[#dbe6e5] bg-white p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-[#698080]", children: "Taxonomic signal" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-2xl font-semibold tracking-[-.04em]", children: "Species appearing in the query" })
          ] }),
          /* @__PURE__ */ jsx(Filter, { className: "h-5 w-5 text-[#0b9da1]" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-7 h-[250px]", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(BarChart, { data: topSpecies.length ? topSpecies : [{ name: "diptera", value: 3 }], layout: "vertical", margin: { left: 14, right: 12 }, children: [
          /* @__PURE__ */ jsx(CartesianGrid, { stroke: "#e7efee", horizontal: false }),
          /* @__PURE__ */ jsx(XAxis, { type: "number", hide: true }),
          /* @__PURE__ */ jsx(YAxis, { dataKey: "name", type: "category", tick: { fill: "#698080", fontSize: 11 }, axisLine: false, tickLine: false, width: 92 }),
          /* @__PURE__ */ jsx(Tooltip, { contentStyle: { borderRadius: 14, border: "1px solid #dbe6e5" } }),
          /* @__PURE__ */ jsx(Bar, { dataKey: "value", radius: [0, 8, 8, 0], fill: "#0b9da1" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[#dbe6e5] bg-white p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-[#698080]", children: "Source trail" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-2xl font-semibold tracking-[-.04em]", children: "Recent evidence cards" })
          ] }),
          /* @__PURE__ */ jsx(Link, { href: "/evidence", className: "text-xs font-semibold text-[#087f85]", children: "View all" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 divide-y divide-[#edf2f1]", children: featured.map((article) => /* @__PURE__ */ jsxs("a", { href: article.url || "https://europepmc.org", target: "_blank", rel: "noreferrer", className: "group flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[#0b9da1]", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "h-3 w-3" }),
              " ",
              article.pubYear || "Record",
              " \xB7 ",
              article.journalTitle || "Europe PMC"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm font-medium leading-6 text-[#24444a] group-hover:text-[#087f85]", children: article.title })
          ] }),
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "mt-1 h-4 w-4 shrink-0 text-[#9bb0af] transition group-hover:-translate-y-0.5 group-hover:text-[#0b9da1]" })
        ] }, article.id)) })
      ] })
    ] })
  ] }) });
}
