import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { LayoutProvider } from "@/providers/LayoutProvider";
import { LandingLayout } from "@/layout/Landing";
import { Index } from "@/pages/Index";

import "@/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LayoutProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/nft-landing" element={<LandingLayout />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LayoutProvider>
  </StrictMode>
);
