import { Link, useNavigate } from "react-router-dom";
import bookImg from '../../assets/images/pickawood-8SfXsep8EIA-unsplash.jpg'
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
    const { loginUser, googleLogin } = useAuth()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(result => {
                toast.success('User logged in successfully!')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success('User logged in successfully!')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-col gap-6 md:gap-0 md:flex-row">
                <div className="w-[400px] lg:w-[500px] h-[560px] shadow-2xl rounded-lg md:rounded-l-lg md:rounded-r-none overflow-hidden">
                    <img className="w-full h-full object-cover" src={bookImg} alt="" />
                </div>
                <div className="rounded-lg md:rounded-r-lg md:rounded-l-none w-full max-w-sm shadow-2xl bg-gradient-to-r from-slate-200 to-[#e3b99c]">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h3 className="text-3xl font-bold text-orange-500 text-center">Login Now!</h3>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-orange-500 text-white font-bold">Login</button>
                        </div>
                    </form>
                    <div className="card-body">
                        <h3 className="text-center">-------------- or --------------</h3>
                        <button onClick={handleGoogleLogin} className="border-2 border-purple-600 bg-slate-100 rounded-lg py-3 px-4 mt-4 flex gap-4 justify-center font-semibold w-full">
                            <span><img className="h-6" src="https://i.ibb.co/1RHYhnL/download.png" alt="" /></span>
                            Continue with Google
                        </button>

                        <p className="">New to BookishHaven? <Link to='/register' className="border-b-2 border-violet-800 text-violet-800">Register</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;