import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../Pages/home.jsx"
import AboutUs from "./../Pages/AboutUs.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    }, {
        path: "/about",
        element: <AboutUs/>,
    },
]);
export default router;