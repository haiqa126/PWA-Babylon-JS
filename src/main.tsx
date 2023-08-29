import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// import './index.css'
import { registerSW } from "virtual:pwa-register";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerSW({
  // if there's an update send a message
  async onNeedRefresh() {
    const registration = await navigator.serviceWorker.ready;
    document.dispatchEvent(
      new CustomEvent("sw", { detail: { event: "force", registration } })
    );
  },

  // When the precache is ready do something
  onOfflineReady() {
    document.dispatchEvent(
      new CustomEvent("sw", { detail: { event: "cache" } })
    );
  },

  // if the service worker is registered send a signal up
  onRegisteredSW() {
    document.dispatchEvent(
      new CustomEvent("sw", { detail: { event: "ready" } })
    );
  },
});
