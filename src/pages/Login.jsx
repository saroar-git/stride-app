import { Link, useNavigate, useLocation } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
    const { logIn, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        await logIn(email, password);
        form.reset();
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate])

    return (
        <div className="hero min-h-[530px] bg-base-200 my-5">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control my-3">
                        <button type="submit" className="btn btn-secondary hover:bg-[#8c1771] text-white">Login</button>
                    </div>
                    <div><GoogleLogin /></div>

                    {/* <div className="divider divider-secondary text-secondary my-2">●</div> */}
                    <div className="flex items-center justify-center mt-3">
                        <small> New to Stride?</small>
                        <small><Link to='/register' className="link link-secondary ml-1">Register Now</Link></small>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;