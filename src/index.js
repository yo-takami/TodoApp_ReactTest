import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";

const root = document.getElementById("root");

createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>
);
