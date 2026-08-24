"use strict"; 
import { jsx, jsxs } from "react/jsx-runtime"; 
import { useState } from "react"; 
import { Link, useLocation } from "wouter"; 
import { ArrowRight, ChevronRight, Database, Dna, Search, ShieldCheck, Sparkles } from "lucide-react"; 
import { benchmarkQuery } from "@/lib/evidence"; 

const heroImage = "/assets/xenolens-hero_1e7c3f0b.jpg"; 

const examples = [ 
  { label: "Diptera + pesticide + GST", query: benchmarkQuery }, 
  { label: "Drosophila + insecticide + P450", query: "Drosophila AND insecticide AND cytochrome P450" }, 
  { label: "Chironomus + SOD + oxidative stress", query: "Chironomus AND SOD AND oxidative stress" } 
]; 

export default function Home() { 
  const [, navigate] = useLocation(); 
  const [query, setQuery] = useState(""); 
  const [focus, setFocus] = useState(false); 

  function submit(event) { 
    event.preventDefault(); 
    const value = query.trim() || benchmarkQuery; 
    navigate(`/dashboard?q=${encodeURIComponent(value)}`); 
  } 

  return /* @__PURE__ */ jsxs("div", { 
    className: "min-h-screen overflow-hidden bg-[#061219] text-[#edf6f4]", 
    children: [ 
      /* @__PURE__ */ jsxs("section", { 
        className: "relative min-h-[720px] border-b border-white/[0.08]", 
        children: [ 
          /* @__PURE__ */ jsx("div", { 
            className: "absolute inset-0 bg-cover bg-center opacity-50", 
            style: { backgroundImage: `linear-gradient(90deg, #061219 0%, rgba(6,18,25,.88) 34%, rgba(6,18,25,.32) 100%), url(${heroImage})` } 
          }), 

          /* @__PURE__ */ jsx("div", { 
            className: "absolute inset-0 bg-[radial-gradient(circle_at_14%_60%,rgba(36,198,201,.15),transparent_32%),linear-gradient(180deg,transparent_72%,#061219_100%)]" 
          }), 

          /* @__PURE__ */ jsxs("header", { 
            className: "relative z-10 mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 lg:px-8", 
            children: [ 
              /* @__PURE__ */ jsxs(Link, { 
                href: "/", 
                className: "flex items-center gap-3", 
                children: [ 
                  /* @__PURE__ */ jsx("div", { 
                    className: "flex h-10 w-10 items-center justify-center rounded-xl border border-[#24c6c9]/50 bg-[#0b2029]", 
                    children: /* @__PURE__ */ jsx("img", { 
                      src: "/project/assets/xenolens-logo.png", 
                      alt: "", 
                      className: "h-7 w-7 object-contain" 
                    }) 
                  }), 

                  /* @__PURE__ */ jsxs("span", { 
                    className: "font-display text-2xl font-semibold tracking-[-0.05em]", 
                    children: [ 
                      "Xeno", 
                      /* @__PURE__ */ jsx("span", { 
                        className: "text-[#24c6c9]", 
                        children: "Lens" 
                      }) 
                    ] 
                  }) 
                ] 
              }), 

              /* @__PURE__ */ jsxs("div", { 
                className: "hidden items-center gap-7 text-sm text-white/55 md:flex", 
                children: [ 
                  /* @__PURE__ */ jsx("span", { 
                    children: "Evidence explorer" 
                  }), 

                  /* @__PURE__ */ jsx("span", { 
                    children: "API-native" 
                  }), 

                  /* @__PURE__ */ jsx("span", { 
                    className: "rounded-full border border-[#24c6c9]/25 bg-[#24c6c9]/10 px-3 py-1.5 text-[#8be6e0]", 
                    children: "About XenoLens" 
                  }) 
                ] 
              }) 
            ] 
          }), 

          /* @__PURE__ */ jsxs("div", { 
            className: "relative z-10 mx-auto flex max-w-[1480px] flex-col px-5 pb-24 pt-24 lg:px-8 lg:pt-28", 
            children: [ 
              /* @__PURE__ */ jsxs("div", { 
                className: "max-w-3xl animate-[rise_.7s_cubic-bezier(.23,1,.32,1)]", 
                children: [ 
                  /* @__PURE__ */ jsxs("p", { 
                    className: "mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] text-[#73e5e4]", 
                    children: [ 
                      /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }), 
                      " Molecular evidence, made navigable" 
                    ] 
                  }), 

                  /* @__PURE__ */ jsxs("h1", { 
                    className: "max-w-4xl font-display text-5xl font-semibold leading-[.98] tracking-[-.06em] text-white sm:text-7xl", 
                    children: [ 
                      "Trace the signal from ", 
                      /* @__PURE__ */ jsx("span", { 
                        className: "text-[#24c6c9]", 
                        children: "xenobiotic" 
                      }), 
                      " to biomarker." 
                    ] 
                  }), 

                  /* @__PURE__ */ jsx("p", { 
                    className: "mt-7 max-w-2xl text-lg leading-8 text-white/62", 
                    children: "XenoLens turns public scientific records into an evidence-aware visual workspace for insect ecotoxicology. Search a species, chemical, or biomarker and see the research landscape take shape." 
                  }) 
                ] 
              }), 

              /* @__PURE__ */ jsxs("form", { 
                onSubmit: submit, 
                className: "relative mt-12 max-w-3xl", 
                children: [ 
                  /* @__PURE__ */ jsxs("div", { 
                    className: `flex items-center gap-3 rounded-2xl border bg-[#071922]/90 p-2 shadow-2xl backdrop-blur-xl transition ${focus ? "border-[#24c6c9] shadow-[0_0_35px_rgba(36,198,201,.18)]" : "border-white/15"}`, 
                    children: [ 
                      /* @__PURE__ */ jsx(Search, { 
                        className: "ml-4 h-5 w-5 text-[#24c6c9]" 
                      }), 

                      /* @__PURE__ */ jsx("input", { 
                        value: query, 
                        onChange: (e) => setQuery(e.target.value), 
                        onFocus: () => setFocus(true), 
                        onBlur: () => setFocus(false), 
                        placeholder: "Search species, xenobiotic, or biomarker…", 
                        className: "min-w-0 flex-1 bg-transparent px-1 py-4 text-base text-white outline-none placeholder:text-white/35" 
                      }), 

                      /* @__PURE__ */ jsxs("button", { 
                        className: "flex items-center gap-2 rounded-xl bg-[#24c6c9] px-5 py-3.5 text-sm font-semibold text-[#061219] transition hover:bg-[#65e2df] active:scale-[.98]", 
                        children: [ 
                          "Explore evidence ", 
                          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }) 
                        ] 
                      }) 
                    ] 
                  }), 

                  /* @__PURE__ */ jsx("div", { 
                    className: "mt-4 flex flex-wrap gap-2", 
                    children: examples.map((example) => /* @__PURE__ */ jsx("button", { 
                      type: "button", 
                      onClick: () => setQuery(example.query), 
                      className: "rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs text-white/55 transition hover:border-[#24c6c9]/40 hover:text-[#9be7e2]", 
                      children: example.label 
                    }, example.label)) 
                  }) 
                ] 
              }) 
            ] 
          }), 

          /* @__PURE__ */ jsx("div", { 
            className: "relative z-10 mx-auto grid max-w-[1480px] grid-cols-1 gap-4 px-5 pb-8 sm:grid-cols-3 lg:px-8", 
            children: [ 
              { 
                icon: Database, 
                title: "Public-source first", 
                copy: "Europe PMC + PubChem, directly in the browser." 
              }, 
              { 
                icon: Dna, 
                title: "Biomarker-aware", 
                copy: "P450, GST, SOD, H₂O₂ and the context around them." 
              }, 
              { 
                icon: ShieldCheck, 
                title: "Transparent by design", 
                copy: "Associations are visible; causality still needs context." 
              } 
            ].map(({ icon: Icon, title, copy }) => /* @__PURE__ */ jsxs("div", { 
              className: "rounded-2xl border border-white/10 bg-[#071922]/70 p-5 backdrop-blur-xl", 
              children: [ 
                /* @__PURE__ */ jsx(Icon, { 
                  className: "mb-8 h-5 w-5 text-[#24c6c9]" 
                }), 

                /* @__PURE__ */ jsx("p", { 
                  className: "font-display text-lg font-medium", 
                  children: title 
                }), 

                /* @__PURE__ */ jsx("p", { 
                  className: "mt-2 text-sm leading-6 text-white/45", 
                  children: copy 
                }) 
              ] 
            }, title)) 
          }) 
        ] 
      }), 

      /* @__PURE__ */ jsxs("section", { 
        className: "mx-auto grid max-w-[1480px] gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8", 
        children: [ 
          /* @__PURE__ */ jsxs("div", { 
            children: [ 
              /* @__PURE__ */ jsx("p", { 
                className: "text-xs font-semibold uppercase tracking-[.22em] text-[#f2b85b]", 
                children: "A research instrument" 
              }), 

              /* @__PURE__ */ jsx("h2", { 
                className: "mt-4 max-w-md font-display text-4xl font-semibold tracking-[-.05em]", 
                children: "Not another paper list. A path through the evidence." 
              }), 

              /* @__PURE__ */ jsx("p", { 
                className: "mt-5 max-w-md leading-7 text-white/50", 
                children: "Search results become timelines, biomarker distributions, species matrices, source cards, and a cautious molecular pathway you can inspect node by node." 
              }), 

              /* @__PURE__ */ jsxs(Link, { 
                href: "/limitations", 
                className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#73e5e4]", 
                children: [ 
                  "Read the interpretation rules ", 
                  /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }) 
                ] 
              }) 
            ] 
          }), 

          /* @__PURE__ */ jsxs("div", { 
            className: "grid gap-4 sm:grid-cols-2", 
            children: [ 
              /* @__PURE__ */ jsxs("div", { 
                className: "rounded-3xl border border-white/10 bg-white/[.04] p-6", 
                children: [ 
                  /* @__PURE__ */ jsx("p", { 
                    className: "text-xs uppercase tracking-[.18em] text-[#73e5e4]", 
                    children: "01 / discover" 
                  }), 

                  /* @__PURE__ */ jsx("p", { 
                    className: "mt-16 font-display text-2xl", 
                    children: "Search any signal" 
                  }), 

                  /* @__PURE__ */ jsx("p", { 
                    className: "mt-2 text-sm leading-6 text-white/45", 
                    children: "Query a chemical, insect taxon, or molecular response." 
                  }) 
                ] 
              }), 

              /* @__PURE__ */ jsxs("div", { 
                className: "rounded-3xl border border-white/10 bg-[#10262c] p-6", 
                children: [ 
                  /* @__PURE__ */ jsx("p", { 
                    className: "text-xs uppercase tracking-[.18em] text-[#24c6c9]", 
                    children: "02 / compare" 
                  }), 

                  /* @__PURE__ */ jsx("p", { 
                    className: "mt-16 font-display text-2xl", 
                    children: "See the landscape" 
                  }), 

                  /* @__PURE__ */ jsx("p", { 
                    className: "mt-2 text-sm leading-6 text-white/55", 
                    children: "Compare frequency, context, and co-occurrence." 
                  }) 
                ] 
              }) 
            ] 
          }) 
        ] 
      }) 
    ] 
  }); 
}