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
import { loader as singlePageLoader } from "./pages/SingleProduct";
import Login from "./Components/Login";
import Register from "./components/Register";
import { ErrorElement } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as productsLoader } from "./pages/Products";
import { loader as landingLoader } from "./pages/Landing";
import { action as registerAction } from "./components/Register";
// import { action as loginAction } from "./Components/";
import { store } from "./store";
// import { loader as checkoutLoader } from "./pages/Checkout";
// import { action as checkoutAction } from "./Components/";
import { loader as orderLoader } from "./pages/Orders";

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
        errorElement: <ErrorElement />,
        loader: singlePageLoader,
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        errorElement: <ErrorElement />,
        action: checkoutAction(store),
        loader: checkoutLoader(store),
        element: <Checkout />,
      },
      {
        path: "orders",
        loader: orderLoader(store),
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
    errorElement: <Error />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
