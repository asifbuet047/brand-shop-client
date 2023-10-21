import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AddProductPage from "../Components/AddProduct/AddProductPage";
import MyCartPage from "../Components/MyCart/MyCartPage";
import PrivateRoute from "./PrivateRoute";
import SignInPage from "../Components/SignIn/SignInPage";
import AllProductsPage from "../Components/AllProducts/AllProductsPage";
import ProductDetailsPage from "../Components/ProductDetails/ProductDetailsPage";
import RegistrationPage from "../Components/Registration/RegistrationPage";
import Home from "../Components/Home/Home";
import UpdateProduct from "../Components/AddProduct/UpdateProduct";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProductPage></AddProductPage></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/updateproduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCartPage></MyCartPage></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/signin',
                element: <SignInPage></SignInPage>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/register',
                element: <RegistrationPage></RegistrationPage>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/allproducts/:name',
                element: <AllProductsPage></AllProductsPage>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/productdetails/:id',
                element: <PrivateRoute><ProductDetailsPage></ProductDetailsPage></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>
            }
        ]
    }
]);

export default routes;