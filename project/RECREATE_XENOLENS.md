# Recreate XenoLens with React + Vite + JavaScript

## 1. Create the application

```bash
pnpm create vite xenolens --template react
cd xenolens
pnpm install
```

Install the main runtime dependencies:

```bash
pnpm add wouter recharts lucide-react axios framer-motion sonner next-themes clsx tailwind-merge
```

The supplied project also uses Tailwind CSS and the shadcn/ui primitives included under `client/src/components/ui/`.

## 2. Exact application files

The source package preserves the same XenoLens structure:

| File | Purpose |
|---|---|
| `client/index.html` | Browser metadata and JavaScript entry point. |
| `client/src/main.jsx` | React DOM entry point. |
| `client/src/App.jsx` | Global providers and route map. |
| `client/src/index.css` | Global XenoLens colors, typography, layout, and motion. There is no `App.css`. |
| `client/src/components/AppShell.jsx` | Persistent navigation and shared visual shell. |
| `client/src/pages/Home.jsx` | Landing and search route: `/`. |
| `client/src/pages/Dashboard.jsx` | API-driven dashboard route: `/dashboard`. |
| `client/src/pages/Pathway.jsx` | Molecular pathway route: `/pathway`. |
| `client/src/pages/Evidence.jsx` | Source-linked evidence route: `/evidence`. |
| `client/src/pages/Chemicals.jsx` | PubChem chemical lookup route: `/chemicals`. |
| `client/src/pages/Species.jsx` | Species exploration route: `/species`. |
| `client/src/pages/Limitations.jsx` | Evidence limitations route: `/limitations`. |
| `client/src/lib/api.js` | Europe PMC and PubChem request functions. |
| `client/src/lib/evidence.js` | Browser-side biomarker, species, contaminant, and timeline processing. |
| `client/src/lib/utils.js` | JavaScript class-name helper. |

## 3. Required routes

The route map uses Wouter:

```text
/             Home.jsx
/dashboard    Dashboard.jsx
/pathway      Pathway.jsx
/evidence     Evidence.jsx
/chemicals    Chemicals.jsx
/species      Species.jsx
/limitations  Limitations.jsx
```

## 4. Required template files

The package also includes the existing `client/src/components/ui/` primitives used by the app. Keep that directory when recreating the project. The template may contain some `.tsx` compatibility files even though the authored XenoLens application is JavaScript/JSX.

## 5. Assets

The generated assets are supplied separately in the `assets/` directory. In a deployed Manus WebDev project, use the permanent storage URL provided for each uploaded asset rather than putting large media files in `client/public/`.

## 6. Run the app

```bash
pnpm dev
```

Build it with:

```bash
pnpm build
```

The dashboard uses public API responses at runtime. Replace preview/demo values with the actual captured Europe PMC results before using numbers in the congress abstract or poster.
