import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/Authcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <h1 className="text-center text-3xl pt-4">Supabase Auth </h1>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  </StrictMode>
);