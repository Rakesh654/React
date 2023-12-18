import React, {lazy, Suspense, useContext} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurentmenu from "./components/RestaurentMenu";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// React element
const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () =>
{
return (
    <div className="app">
        <Provider store={appStore}>
        <Header></Header>
        <Outlet></Outlet>
        </Provider>
    </div>
)}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children: [
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/restaurents/:restid',
                element: <Restaurentmenu />
            },
            {
                path:'/grocery',
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }
])

var render = ReactDOM.createRoot(document.getElementById("root"));
render.render(<RouterProvider router={appRouter}></RouterProvider>);