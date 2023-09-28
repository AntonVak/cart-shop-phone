import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/routes/root";
import ErrorPages from "./pages/ErrorPages/ErrorPages";
import CartPages from "./pages/CartPages/CartPages.jsx";
import HomePages from "./pages/HomePages/HomePages.jsx";
import theme from "./styles/breakPoints.js";
import Post from "./components/Post/Post";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Root />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "home",
        element: <HomePages />,
      },
      {
        path: "posts",
        element: <Post />,
      },
      {
        path: "cart",
        element: <CartPages />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
