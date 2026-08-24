"use strict";
export const biomarkerGroups = {
  "Cytochrome P450": ["cytochrome p450", "cyp450", "p450"],
  GST: ["glutathione s-transferase", "glutathione transferase", "gst"],
  SOD: ["superoxide dismutase", "sod"],
  "Hydrogen peroxide": ["hydrogen peroxide", "h2o2", "h\u2082o\u2082"]
};
export const biomarkerColors = {
  "Cytochrome P450": "#a884ff",
  GST: "#24c6c9",
  SOD: "#f2b85b",
  "Hydrogen peroxide": "#f27d70"
};
const speciesTerms = ["drosophila", "chironomus", "mosquito", "aedes", "anopheles", "culex", "diptera", "musca", "sciara"];
const contaminantTerms = ["pesticide", "insecticide", "xenobiotic", "contaminant", "metal", "cadmium", "copper", "lead", "pyrethroid", "organophosphate", "imidacloprid"];
function textFor(article) {
  return `${article.title} ${article.abstractText}`.toLowerCase();
}
function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}
export function classifyArticles(articles) {
  const biomarkerCounts = Object.fromEntries(Object.keys(biomarkerGroups).map((name) => [name, 0]));
  const speciesCounts = {};
  const contaminantCounts = {};
  const yearCounts = {};
  const matrix = {};
  for (const article of articles) {
    const text = textFor(article);
    const year = article.pubYear || "Unknown";
    yearCounts[year] = (yearCounts[year] ?? 0) + 1;
    const matchedBiomarkers = [];
    Object.entries(biomarkerGroups).forEach(([name, terms]) => {
      if (includesAny(text, terms)) {
        biomarkerCounts[name] += 1;
        matchedBiomarkers.push(name);
      }
    });
    speciesTerms.forEach((term) => {
      if (text.includes(term)) speciesCounts[term] = (speciesCounts[term] ?? 0) + 1;
    });
    contaminantTerms.forEach((term) => {
      if (text.includes(term)) contaminantCounts[term] = (contaminantCounts[term] ?? 0) + 1;
    });
    const species = speciesTerms.find((term) => text.includes(term)) ?? "other dipteran";
    matrix[species] ??= {};
    matchedBiomarkers.forEach((name) => {
      matrix[species][name] = (matrix[species][name] ?? 0) + 1;
    });
  }
  const topEntries = (record, limit = 8) => Object.entries(record).sort((a, b) => b[1] - a[1]).slice(0, limit).map(([name, value]) => ({ name, value }));
  return { biomarkerCounts, biomarkerData: topEntries(biomarkerCounts, 6), speciesData: topEntries(speciesCounts), contaminantData: topEntries(contaminantCounts), timelineData: Object.entries(yearCounts).filter(([name]) => name !== "Unknown").sort(([a], [b]) => Number(a) - Number(b)).slice(-15).map(([year, publications]) => ({ year, publications })), matrix, total: articles.length };
}
export const benchmarkQuery = '(Diptera OR Drosophila OR Chironomus OR mosquito) AND (xenobiotic OR pesticide OR contaminant) AND ("cytochrome P450" OR GST OR "superoxide dismutase" OR "hydrogen peroxide")';
