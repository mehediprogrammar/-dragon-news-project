import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import New from "../Pages/New/New";
import Register from "../Pages/Register/Register";
import PrivetedRouter from "./PrivetedRouter";

const myRouters = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
          children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('news.json')
            },
            {
                path:'/news/:id',
                element: <PrivetedRouter><New></New></PrivetedRouter>
            },
            {
              path:'/login',
              element:<LogIn ></LogIn>
            },
            {
              path:'/register',
              element:<Register></Register>
            }
          ]
    }
])

export default myRouters;