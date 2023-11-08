import React from "react";

import App from "App";

import { createRoot } from "react-dom/client";

import "index.scss";

const rootElement: Element = document.getElementById("root")!;

const root = createRoot(rootElement);
root.render(<App />);
