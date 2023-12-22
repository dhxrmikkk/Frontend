import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Contact from '../Pages/Contact.jsx'

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    }, {
        path: "/about",
        element: <About/>,
    }, {
        path: "/contact",
        element: <Contact/>,
    }
]);
export default MainRouter;