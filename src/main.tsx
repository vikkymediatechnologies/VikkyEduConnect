// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import { AuthProvider } from "@/context/AuthContext";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";

// const root = document.getElementById("root")!;

// // Apply saved theme before rendering
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// createRoot(root).render(
//   <BrowserRouter>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </BrowserRouter>
// );


import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = document.getElementById("root")!;

// Apply saved theme before rendering
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
