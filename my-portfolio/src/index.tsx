"use client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { ColorModeProvider } from "./components/ui/color-mode";
import { Provider } from "./components/ui/provider";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Provider>
      <ColorModeProvider forcedTheme="dark">
          <App />
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
