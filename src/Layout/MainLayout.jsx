import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/icons/logo-1.png'
import useAuth from "../Hooks/useAuth";
import { FiLogOut } from 'react-icons/fi';
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {

    const { user, logOut } = useAuth()

    const handleLogout = () => {
        logOut()
    }

    const navLinks = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-orange-500 text-orange-500" : ""
        }> Home </NavLink>
        <NavLink to="/add-book" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-orange-500 text-orange-500" : ""
        }> Add Book </NavLink>
        <NavLink to="/all-books" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-orange-500 text-orange-500" : ""
        }> All Books </NavLink>
        <NavLink to="/borrowed-books" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-orange-500 text-orange-500" : ""
        }> Borrowed Books </NavLink>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full max-w-[1280px] mx-auto navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 items-center py-3">
                        <Link to='/'>
                            <div className="flex px-2 mx-2 items-center py-3">
                                <img className="h-[60px]" src={logo} alt="" />
                                <h2 className="text-3xl font-bold text-orange-500">BookishHaven</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <div className="flex gap-4">
                            {navLinks}
                        </div>
                    </div>
                    <div className="ml-6">
                        {user?.email ?
                            <div className="flex gap-4 items-center">
                                <h3 className="hidden md:block text-orange-800 italic font-semibold">{user?.displayName}</h3>
                                <div className="hidden md:block w-10 rounded-full">
                                    <img className="rounded-full" src={user?.photoURL} />
                                </div>
                                <button onClick={handleLogout} className="btn btn-md bg-orange-500 text-white ">
                                    <FiLogOut />
                                    Logout</button>

                            </div> :
                            <Link className="btn btn-outline btn-warning" to='/login'>Login</Link>
                        }
                    </div>
                </div>
                {/* Page content here */}
                <div className="max-w-[1280px] mx-auto min-h-screen">
                    <Outlet></Outlet>
                </div>
                <div >
                    <Footer></Footer>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;