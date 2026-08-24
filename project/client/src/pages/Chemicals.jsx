"use strict";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FlaskConical, Search, ShieldAlert, Sparkles } from "lucide-react";
import { getChemicalProfile } from "@/lib/api";
export default function Chemicals() {
  const [name, setName] = useState("imidacloprid");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      setProfile(await getChemicalProfile(name));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Lookup failed");
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-[calc(100vh-76px)] bg-[#f4f8f7] text-[#102f36]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1100px] px-5 py-10 lg:px-8", children: [
    /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#0b9da1]", children: [
      /* @__PURE__ */ jsx(FlaskConical, { className: "h-4 w-4" }),
      " Chemical context"
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-semibold tracking-[-.06em]", children: "Identity before interpretation." }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-6 text-[#698080]", children: "Look up a xenobiotic and bring its public chemical identity into the same workspace as the literature evidence." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-[#cfe1df] bg-white p-3 shadow-[0_12px_32px_rgba(9,50,57,.05)]", children: [
      /* @__PURE__ */ jsx(Search, { className: "ml-3 h-5 w-5 text-[#0b9da1]" }),
      /* @__PURE__ */ jsx("input", { value: name, onChange: (e) => setName(e.target.value), className: "min-w-0 flex-1 bg-transparent px-1 py-3 text-sm outline-none", placeholder: "Chemical name or synonym" }),
      /* @__PURE__ */ jsx("button", { className: "rounded-xl bg-[#0b9da1] px-5 py-3 text-sm font-semibold text-white", children: loading ? "Looking up\u2026" : "Lookup" })
    ] }),
    error && /* @__PURE__ */ jsx("p", { className: "mt-4 rounded-xl border border-[#f2b85b]/40 bg-[#fff9ec] p-4 text-sm text-[#805a13]", children: error }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-5 lg:grid-cols-[.7fr_1.3fr]", children: profile ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl bg-[#102f36] p-7 text-white", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-6 w-6 text-[#24c6c9]" }),
        /* @__PURE__ */ jsx("p", { className: "mt-16 text-xs uppercase tracking-[.18em] text-[#73e5e4]", children: "PubChem profile" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-semibold", children: profile.Title || name }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-white/50", children: "Public chemical identity from PubChem. This panel does not infer ecological risk." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-3xl border border-[#dbe6e5] bg-white p-7", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[.16em] text-[#698080]", children: "Identity details" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [["CID", profile.CID], ["Formula", profile.MolecularFormula], ["Molecular weight", profile.MolecularWeight], ["Canonical SMILES", profile.CanonicalSMILES]].map(([label, value]) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#f4f8f7] p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[.14em] text-[#819393]", children: label }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 break-words text-sm font-semibold text-[#24444a]", children: value || "Not available" })
        ] }, label)) })
      ] })
    ] }) : /* @__PURE__ */ jsxs("section", { className: "col-span-full rounded-3xl border border-dashed border-[#b8cfcd] bg-white p-12 text-center", children: [
      /* @__PURE__ */ jsx(FlaskConical, { className: "mx-auto h-8 w-8 text-[#0b9da1]" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-2xl font-semibold", children: "Search a chemical to begin" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-md text-sm leading-6 text-[#698080]", children: "Try a known xenobiotic such as imidacloprid or chlorpyrifos. The result will be enriched from a public chemical record." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-3 rounded-2xl border border-[#f2b85b]/35 bg-[#fff9ec] p-5 text-sm leading-6 text-[#805a13]", children: [
      /* @__PURE__ */ jsx(ShieldAlert, { className: "mt-0.5 h-5 w-5 shrink-0" }),
      /* @__PURE__ */ jsx("p", { children: "PubChem supplies chemical identity and properties. It does not replace toxicological interpretation or establish a biomarker effect in an insect." })
    ] })
  ] }) });
}
