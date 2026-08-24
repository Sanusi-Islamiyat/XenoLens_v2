 XenoLens
An evidence-exploration interface for insect gut microbiome, xenobiotic exposure, and insecticide resistance research.

XenoLens is a web-based research exploration tool designed to help users navigate scientific literature connecting insect gut microbiomes, xenobiotics, insecticides, detoxification mechanisms, biomarkers, and resistance.

The application retrieves public research records from **Europe PMC** and transforms returned article metadata into an interactive evidence landscape containing biomarker signals, taxonomic signals, publication trends, and source-linked evidence cards.

Important: XenoLens is an evidence-exploration and visualization tool. It does not automatically establish causal relationships between biomarkers, microbiomes, xenobiotics, or insecticide resistance.

---

 Features

- 🔎 Literature search
  - Search scientific literature using Europe PMC.
  - Supports custom research queries.
  - Uses a benchmark query focused on insect gut microbiomes and xenobiotics.

- 📊 Evidence dashboard
  - Displays retrieved publication counts.
  - Visualizes publication activity over time.
  - Identifies biomarker mentions.
  - Displays taxonomic/species signals.
  - Provides links to the original scientific records.

- 🧬 Biomarker classification
  - Glutathione S-transferase (GST)
  - Carboxylesterase
  - Cytochrome P450
  - Superoxide dismutase (SOD)
  - Acetylcholinesterase (AChE)
  - ABC transporters
  - Gut microbiome / microbiota

- 🧫 Species exploration
  - Identifies insect taxa appearing in returned records.
  - Supports exploration of genera and broader taxonomic signals.

- 🧪Chemical exploration
  - Designed to support chemical/xenobiotic information and PubChem-based lookup.

- 🧬 Pathway exploration
  - Provides a visual research-oriented view of molecular and detoxification pathways.

- 📚 Evidence source trail
  - Links displayed evidence cards back to public scientific records.

- ⚠️ Evidence limitations
  - Clearly communicates limitations of automated literature classification and interpretation.

---

 Technology Stack

XenoLens is built with:

- React
- Vite
- JavaScript / JSX
- Wouter — client-side routing
- Recharts — data visualization
- Lucide React — icons
- Tailwind CSS — styling
- Sonner — notifications
- Framer Motion — interface animation
- Europe PMC REST API — scientific literature retrieval
- PubChem API — chemical information

---
 Project Structure

```text
XenoL/
│
├── client/
│   ├── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── AppShell.jsx
│   │   │   └── ErrorBoundary.jsx
│   │   │
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── lib/
│   │   │   ├── api.js
│   │   │   ├── evidence.js
│   │   │   └── utils.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Evidence.jsx
│   │   │   ├── Pathway.jsx
│   │   │   ├── Chemicals.jsx
│   │   │   ├── Species.jsx
│   │   │   ├── Limitations.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── ...
│
├── package.json
├── vite.config.js
├── README.md
└── ...
