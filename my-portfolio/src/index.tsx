import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import { App } from "./App";
import { theme } from "./theme";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App />
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
