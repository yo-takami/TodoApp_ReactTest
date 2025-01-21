import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const { HashRouter } = ReactRouterDom;

import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>
);
