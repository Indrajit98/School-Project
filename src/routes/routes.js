import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Main from "../layout/Main";


export const router = createBrowserRouter([
    {
        path:'/',
        // element:<Main/>,
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
        ]
    }
])