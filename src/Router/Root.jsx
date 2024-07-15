import { Outlet } from "react-router-dom";
import Navbar from "../Components/ShareFile/Navbar/Navbar";
import Footer from "../Components/ShareFile/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;