
import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";


const Router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <div>Hello world! <button className="btn btn-warning">Warning</button> </div>,
    },
]);

export default Router;