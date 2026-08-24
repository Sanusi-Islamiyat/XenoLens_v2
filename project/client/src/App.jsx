"use strict";
import { jsx, jsxs } from "react/jsx-runtime";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import AppShell from "./components/AppShell";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Evidence from "./pages/Evidence";
import Pathway from "./pages/Pathway";
import Chemicals from "./pages/Chemicals";
import Species from "./pages/Species";
import Limitations from "./pages/Limitations";
import NotFound from "./pages/NotFound";
function Router() {
  const [location] = useLocation();
  const isLanding = location === "/";
  return isLanding ? /* @__PURE__ */ jsx(Switch, { children: /* @__PURE__ */ jsx(Route, { path: "/", component: Home }) }) : /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs(Switch, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/dashboard", component: Dashboard }),
    /* @__PURE__ */ jsx(Route, { path: "/pathway", component: Pathway }),
    /* @__PURE__ */ jsx(Route, { path: "/evidence", component: Evidence }),
    /* @__PURE__ */ jsx(Route, { path: "/chemicals", component: Chemicals }),
    /* @__PURE__ */ jsx(Route, { path: "/species", component: Species }),
    /* @__PURE__ */ jsx(Route, { path: "/limitations", component: Limitations }),
    /* @__PURE__ */ jsx(Route, { path: "/404", component: NotFound }),
    /* @__PURE__ */ jsx(Route, { component: NotFound })
  ] }) });
}
export default function App() {
  return /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(ThemeProvider, { defaultTheme: "dark", children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(Router, {})
  ] }) }) });
}
