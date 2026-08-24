"use strict";
const API_ROOT = "https://www.ebi.ac.uk/europepmc/webservices/rest/search";
export async function searchEuropePmc(query, pageSize = 30) {
  const params = new URLSearchParams({ query, format: "json", pageSize: String(pageSize), resultType: "core", sort: "CITED desc" });
  const response = await fetch(`${API_ROOT}?${params.toString()}`);
  if (!response.ok) throw new Error("The literature service could not be reached. Please try again.");
  const payload = await response.json();
  const articles = (payload.resultList?.result ?? []).map((item) => ({
    id: item.id ?? item.pmid ?? crypto.randomUUID(),
    title: item.title ?? "Untitled record",
    abstractText: item.abstractText ?? "",
    authorString: item.authorString,
    journalTitle: item.journalTitle,
    pubYear: item.pubYear,
    doi: item.doi,
    url: item.doi ? `https://doi.org/${item.doi}` : `https://europepmc.org/article/MED/${item.id}`
  }));
  return { articles, total: Number(payload.hitCount ?? articles.length), query, retrievedAt: (/* @__PURE__ */ new Date()).toISOString() };
}
export async function getChemicalProfile(name) {
  const encoded = encodeURIComponent(name.trim());
  const response = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encoded}/property/Title,MolecularFormula,MolecularWeight,CanonicalSMILES/JSON`);
  if (!response.ok) throw new Error("No chemical profile was found for this term.");
  const payload = await response.json();
  const property = payload.PropertyTable?.Properties?.[0];
  if (!property) throw new Error("No chemical profile was found for this term.");
  return property;
}
