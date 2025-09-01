import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
