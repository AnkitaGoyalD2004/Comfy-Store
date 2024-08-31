import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "./components";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import {
  checkoutLoader,
  landingLoader,
  ordersLoader,
  productsLoader,
  singleProductLoader,
} from "./pages/Loaders";
import { checkoutAction, loginAction, registerAction } from "./pages/actions";
import { store } from "./store";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        loader: landingLoader(queryClient),
        errorElement: ErrorElement,
      },
      {
        path: "/products",
        loader: productsLoader(queryClient),
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <SingleProduct></SingleProduct>,
        loader: singleProductLoader(queryClient),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/about", element: <About /> },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store,queryClient),
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: ordersLoader(store,queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <Error></Error>,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router = {router}></RouterProvider>
      {/* <ReactQueryDevtools initialIsOpen = {false}></ReactQueryDevtools> */}
    </QueryClientProvider>
  );
}

export default App;