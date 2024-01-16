import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  // Register,
  // Login,
  Checkout,
  Orders,
} from "./pages";
import Login from "./components/Login";
import Register from "./components/Register";
import { ErrorElement } from "./Components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as productsLoader } from "./pages/Products";
import { loader as landingLoader } from "./pages/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        errorElement: <ErrorElement />,
        loader: landingLoader,
        element: <Landing />,
      },
      {
        path: "products",
        errorElement: <ErrorElement />,
        loader: productsLoader,
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
