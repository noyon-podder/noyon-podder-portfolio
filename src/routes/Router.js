import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import PortfolioDetails from "../pages/Home/PortfolioDetails/PortfolioDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/portfolio/:id',
                element: <PortfolioDetails/>,
                loader: async({params}) => fetch(`https://portfolio-server-liard.vercel.app/projects/${params.id}`)
            }
        ]
    }
])