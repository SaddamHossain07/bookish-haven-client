import { Link } from "react-router-dom";
import bookImg from '../../assets/images/openBook.jpg'
const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-col gap-6 md:gap-0 md:flex-row">
                <div className="w-[400px] lg:w-[500px] h-[412px] shadow-2xl rounded-lg md:rounded-l-lg md:rounded-r-none overflow-hidden">
                    <img className="w-full h-full object-cover" src={bookImg} alt="" />
                </div>
                <div className="rounded-lg md:rounded-r-lg md:rounded-l-none w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#bea493] to-[#e3c7b4]">
                    <form className="card-body">
                        <h3 className="text-3xl font-bold text-orange-500 text-center">Login Now!</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 text-white font-bold">Login</button>
                        </div>
                        <p className="mt-4">New to BookishHaven? <Link to='/register' className="border-b-2 border-violet-800 text-violet-800">Register</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;