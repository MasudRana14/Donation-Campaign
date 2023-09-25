import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Donation from "../NavBar/Donation/Donation";
import Statistics from "../NavBar/Statistics/Statistics";
import CardDetails from "../Home/CardDetails/CardDetails";

const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element:<Home></Home>,
                loader: ()=> fetch('/donations.json')
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path: "/details/:id",
                element:<CardDetails></CardDetails>,
                loader: ()=> fetch("/donations.json")
            }
        ]
    }
])


export default myCreateRoute;