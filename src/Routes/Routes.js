import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import About from "../page/About/About";
import MyProducts from "../page/DashBoard/MyProducts/MyProducts";
import MyUser from "../page/DashBoard/MyUsers/MyUser";
import Payment from "../page/DashBoard/Payment/Payment";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import AddProducts from "../page/Products/AddProducts/AddProducts";
import CataProducts from "../page/Products/CataProducts/CataProducts";
import Products from "../page/Products/Products";
import DisplayError from "../page/Shared/MYError/DisplayError";
import Singup from "../page/Singup/Singup";
import AdminRoute from "./AdminRouts/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProductsAll from "../page/DashBoard/MyProducts/AllProducts/ProductsAll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
        path: "/allproducts",
        element: <ProductsAll></ProductsAll>,
      },
      {
        path: "/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/cataproducts/:id",
        element: (
          <PrivateRoute>
            {" "}
            <CataProducts></CataProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resale-server-eight.vercel.app/resaleApple/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/myUser",
        element: (
          <AdminRoute>
            <MyUser></MyUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://resale-server-eight.vercel.app/bookings/${params.id}`),
      },
      {
        path: "/dashboard/allBooking",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://resale-server-eight.vercel.app/bookings/${params.id}`),
      },
    ],
  },
]);
export default router;
