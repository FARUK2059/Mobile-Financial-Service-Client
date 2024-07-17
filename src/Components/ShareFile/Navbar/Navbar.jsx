import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import MFS from '../../../assets/MFS Icon.png'
import { useAuth } from "../../Authentication/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import useAxios from "../../../Hooks/AxiosPublic/useAxios";


const Navbar = () => {

    const { token } = useAuth();
    const axioss = useAxios();

    const navMenu = <>


        <li><NavLink to="/" > Service </NavLink></li>
        <li><NavLink to=""  > Offers </NavLink></li>
        <li><NavLink to="/" > About Us </NavLink></li>
        <li><NavLink to="/" > Help </NavLink></li>

    </>

    // const handleSignOut = () => {
    //     logout()
    //         .then(() => {
    //             toast.success('LogOut successful!');
    //         })
    //         .catch()
    // }

    const handleSignOut = () => {
        axioss.post('/logout', {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(() => {
                localStorage.removeItem('token');
                toast.success('LogOut successful!');
                setTimeout(() => {
                    window.location.reload();
                }, 400);
            })
            .catch((error) => {
                console.error('Logout error:', error);
                toast.error('Failed to log out!');
            });
    };

    const profile = <>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="null" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRyukDe4q5dJpXgg5nIegQYQf66HXPGm57S_9EpJYbZtm0WP0R29sB9gxyUJZEqTew7Y&usqp=CAU" />
                    <FaUserCircle />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-blue-300 text-black rounded-box w-52">
                <li>
                    <a className="justify-center text-blue-500"> Dashboard </a>
                </li>
                <li><Link to="/deshoard" >Overview</Link></li>
                <li><Link to="#sendmoney" href="#sendmoney1" >Send Money</Link></li>
                <li><Link onClick={handleSignOut}>Logout</Link></li>
            </ul>
        </div>
    </>




    return (
        <div>
            <div className="justify-center flex text-center">
                <div className="navbar  fixed z-10  hover:bg-green-500  bg-opacity-30 max-w-screen-lg bg-green-200 text-white rounded-full mt-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-300 rounded-box w-52 gap-4">
                                {navMenu}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl text-[#CCCCFF]"> <img className="h-8 w-12" src={MFS} alt="" />ReadyPay</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end mr-4">
                        {
                            token ? <Link className="btn">{profile}</Link> : <Link to="login"><button className="btn btn-warning">Login</button></Link>
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;