import { BiHome } from "react-icons/bi";
import { BsBrowserSafari } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const AdminLayout = () => {
    const { user } = useAuth();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="flex items-end justify-end w-full">
                    <label htmlFor="my-drawer-2" className="px-3 py-1 text-xl font-semibold drawer-button lg:hidden"><MdMenu /></label>
                </div>
                <div className="p-10">
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content flex flex-col text-lg z-[999]">
                    <div>
                        <h2 className="mb-4 text-center border-b-2 border-gray-500">Hi, <span className="font-semibold">{user?.displayName}</span></h2>
                        <li><NavLink to='/dashboard/admin'><RiAdminFill /> Users</NavLink></li>
                        <li><NavLink to='/dashboard/all-products'><BsBrowserSafari /> Products</NavLink></li>
                        <li><NavLink to='/dashboard/add-products'><BsBrowserSafari /> Add Products</NavLink></li>
                    </div>
                    <div className="mt-auto border-t-2 border-gray-500">
                        <li><Link to='/'><BiHome /> Back to Home</Link></li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default AdminLayout;