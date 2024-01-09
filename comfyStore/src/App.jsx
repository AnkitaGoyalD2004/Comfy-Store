// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import {
//   About,
//   Cart,
//   Checkout,
//   Error,
//   HomeLayout,
//   Landing,
//   Login,
//   Orders,
//   Products,
//   Register,
//   SingleProduct,
// } from "./pages";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Landing />,
//       },
//       {
//         path: "products",
//         element: <Products />,
//       },
//       {
//         path: "products/:id",
//         element: <SingleProduct />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       { path: "about", element: <About /> },
//       {
//         path: "checkout",
//         element: <Checkout />,
//       },
//       {
//         path: "orders",
//         element: <Orders />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//     errorElement: <Error />,
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };
// export default App;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

// import { action as checkoutAction } from "./components/CheckoutForm";
// import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
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
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
