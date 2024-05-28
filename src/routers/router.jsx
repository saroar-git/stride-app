import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ProductDetail from "../pages/ProductDetail";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard";
import AllProducts from "../pages/Admin/AllProducts";
import AddProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, element: <Home />,
                loader: () => fetch('http://localhost:3000/shoes') // fetch data system 1
            },
            {
                path: '/products/:id', element: <ProductDetail />,
                loader: ({ params }) => fetch(`http://localhost:3000/shoes/${params.id}`)
            },
            { path: 'about', element: <About /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <PrivateRoute><Navigate to='admin' /></PrivateRoute> },
            { path: 'admin', element: <PrivateRoute><Dashboard /></PrivateRoute> },
            { path: 'all-products', element: <PrivateRoute><AllProducts /></PrivateRoute> },
            { path: 'add-product', element: <PrivateRoute><AddProduct /></PrivateRoute> },
            {
                path: 'edit-product/:id', element: <PrivateRoute><EditProduct /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/shoes/${params.id}`)
            },

        ]
    }
])