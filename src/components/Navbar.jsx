import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = async () => {
        await logOut();
    }
    return (
        <div className="navbar border-b border-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    </ul>
                </div>
                <p className="btn btn-ghost text-2xl">
                    <Link to='/'>Stride</Link>
                </p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user ?
                    <>
                        <button onClick={handleLogout} className="btn btn-secondary hover:bg-[#8c1771] text-white">Logout</button>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || "/public/placeholder.jpg"} /> :
                            </div>
                        </div>
                    </>
                    :
                    <p className="btn btn-secondary hover:bg-[#8c1771] text-white"> <Link to='/login'>Login</Link></p>
                }
            </div>
        </div>
    );
};

export default Navbar;