import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { registerMicroApps, start } from "qiankun";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
registerMicroApps([
  {
    name: "micro1", // app name registered
    entry: "//localhost:7000",
    container: "#subapp-container",
    activeRule: "/micro1",
  },
  {
    name: "micro2",
    entry: "//localhost:7100",
    container: "#subapp-container",
    activeRule: "/micro2",
  },
]);
start();
createRoot(document.getElementById("root")!).render(<App />);
