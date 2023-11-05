import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/icons/logo-1.png'

const MainLayout = () => {
    const navLinks = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-violet-800 text-violet-800" : ""
        }> Home </NavLink>
        <NavLink to="/add-book" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-violet-800 text-violet-800" : ""
        }> Add Book </NavLink>
        <NavLink to="/borrowed-books" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-violet-800 text-violet-800" : ""
        }> Borrowed Books </NavLink>
        <NavLink to="/login" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-violet-800 text-violet-800" : ""
        }> Login </NavLink>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full max-w-[1280px] mx-auto navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 items-center py-3">
                        <img className="h-[60px]" src={logo} alt="" />
                        <h2 className="text-3xl font-bold text-violet-800">BookishHaven</h2>

                    </div>
                    <div className="flex-none hidden lg:block">
                        <div className="flex gap-6 mr-6">
                            {navLinks}
                        </div>
                    </div>
                </div>
                {/* Page content here */}
                <div className="max-w-[1280px] mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;