import * as React from "react";
import "./App.css";
import { CounterButton, NewTabLink } from "ui";

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>ToolCare</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{" "}
        <NewTabLink href="https://vitejs.dev/">Vite</NewTabLink> +{" "}
        <NewTabLink href="https://reactjs.org/">React</NewTabLink>+{" "}
        <NewTabLink href="https://tailwindcss.com/">Tailwind</NewTabLink>
      </p>

      <p className="description">
        Linted With{" "}
        <NewTabLink href="https://eslint.org/">ESLint</NewTabLink> | {" "}
        Format With{" "}
        <NewTabLink href="https://prettier.io/">Prettier</NewTabLink>
      </p>
    </div>
  );
}

export default App;
