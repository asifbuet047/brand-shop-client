import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AddProductPage from "../Components/Home/AddProduct/AddProductPage";
import MyCartPage from "../Components/Home/MyCart/MyCartPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../Components/Home/SignIn/SignInPage";
import AllProductsPage from "../Components/Home/AllProducts/AllProductsPage";
import ProductDetailsPage from "../Components/Home/ProductDetails/ProductDetailsPage";
import RegistrationPage from "../Components/Home/Registration/RegistrationPage";
import SignInPage from "../Components/Home/SignIn/SignInPage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/addproduct',
                element: <AddProductPage></AddProductPage>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/mycart',
                element: <MyCartPage></MyCartPage>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/login',
                element: <PrivateRoute><SignInPage></SignInPage></PrivateRoute>,
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
                element: <ProductDetailsPage></ProductDetailsPage>,
                errorElement: <ErrorPage></ErrorPage>
            }
        ]
    }
]);

export default routes;