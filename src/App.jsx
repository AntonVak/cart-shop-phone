// import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/routes/root";
import CartPages from "./pages/CartPages/CartPages";
import HomePages from "./pages/HomePages/HomePages";

// const HomePages = lazy(() => import("./pages/HomePages/HomePages"));
// const CartPage = lazy(() => import("./pages/CartPages/CartPages"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePages />} />
        <Route path="cart" element={<CartPages />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
