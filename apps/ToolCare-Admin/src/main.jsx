import * as React from "react";

import * as ReactDOM from "react-dom/client";

import "../../../packages/ui/src/index.css";
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
