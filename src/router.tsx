import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/signup", element: <Signup />},
    {path: "/signin", element: <Signin />},
    {path: "/signup/:id", element: <App />},
    {path: "*", element: <div>Page Not Found</div>},
]);