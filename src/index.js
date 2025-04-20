import { render } from "./App";

// use the dynamic import for faster app loading in the browser
async function begin() {
  render();

  if (process.env.NODE_ENV !== "local") {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }
}

begin();

if (module.hot) {
  module.hot.accept(); // Accept updates for the current module
}
