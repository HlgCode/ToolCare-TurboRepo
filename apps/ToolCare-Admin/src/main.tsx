import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "../../../packages/ui/src/index.css";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
