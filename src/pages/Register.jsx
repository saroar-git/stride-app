import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Register = () => {
    const [matchPass, setMatchPass] = useState(true);
    const { createUser, user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setMatchPass(false)
        }
        if (password === confirmPassword) {
            await createUser(email, password)
            form.reset()
        }
    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate])

    return (
        <div className="hero min-h-[600px] bg-base-200 my-5">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
                        {!matchPass && (
                            <div className="my-2">
                                <p className="text-red-500">Passwords do not match!</p>
                            </div>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-secondary hover:bg-[#8c1771] text-white">Register</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <small>Already a Member?</small>
                        <small><Link to='/login' className="link link-secondary ml-1">Login Now</Link></small>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;