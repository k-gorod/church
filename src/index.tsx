import React from "react";

import App from "components/App";

import { createRoot } from "react-dom/client";

import { AppStateProvider } from "context/AppState";

import "index.scss";

const rootElement: Element = document.getElementById("root")!;

const root = createRoot(rootElement);

root.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
