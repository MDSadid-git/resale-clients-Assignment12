import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../page/About/About";
import Details from "../page/Details/Details";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import AllProducts from "../page/Products/AllProducts/AllProducts";
import CataProducts from "../page/Products/CataProducts/CataProducts";
import Products from "../page/Products/Products";
import Singup from "../page/Singup/Singup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <Singup></Singup>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/cataproducts/:id",
        element: <CataProducts></CataProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/resaleApple/${params.id}`),
      },

      // {
      //   path: "/allproducts/:id",
      //   element: (
      //     <PrivateRoute>
      //       <AllProducts></AllProducts>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/resaleApple/${params.id}`),
      // },
      // {
      //   path: "/details/:id",
      //   element: <Details></Details>,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/resaleone/${params.id}`),
      // },
    ],
  },
]);
export default router;
