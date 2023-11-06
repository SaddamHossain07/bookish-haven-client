import { Link, useNavigate } from "react-router-dom";
import bookImg from '../../assets/images/books.jpg'
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const Register = () => {
    const { registerUser } = useAuth()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        registerUser(email, password)
            .then(result => {
                toast.success('User created successfully!')
                navigate('/login')

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen">


            <div className="hero-content flex flex-col gap-6 md:gap-0 md:flex-row">
                <div className="w-[400px] lg:w-[500px] h-[412px] shadow-2xl rounded-lg md:rounded-l-lg md:rounded-r-none overflow-hidden">
                    <img className="w-full h-full object-cover" src={bookImg} alt="" />
                </div>
                <div className="rounded-lg md:rounded-r-lg md:rounded-l-none w-full max-w-sm shadow-2xl bg-gradient-to-r from-slate-200 to-[#e3b99c]">
                    <form className="card-body" onSubmit={handleRegister}>
                        <h3 className="text-3xl font-bold text-orange-500 text-center">Register Now!</h3>
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
                            <button type="submit" className="btn bg-orange-500 text-white font-bold">Register</button>
                        </div>
                        <p className="mt-4">Already have an account? <Link to='/login' className="border-b-2 border-violet-800 text-violet-800">Login</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;