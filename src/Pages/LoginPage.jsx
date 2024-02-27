import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from 'react-router-dom'
import { FirebaseLogin } from "../Redux/Features/userSlice";
import Swal from 'sweetalert2';
import { useEffect } from "react";


const LoginPage = () => {

    const dispatch = useDispatch();
    const { error, isError, email } = useSelector(state => state.user);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        dispatch(FirebaseLogin({
            email: data.email,
            password: data.password
        }))
    }

    useEffect(() => {
        if (isError) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (email) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Login",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        }
    }, [error, isError,email])





    return (
        <div className=" bg-black min-h-screen flex items-center ">
            <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto max-w-xl p-3 space-y-4 rounded-xl min-w-[500px] -mt-[200px]">
                <h1 className=" text-white text-center text-2xl font-bold py-3 uppercase">Login Here</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input {...register("email", { required: true })} type="text" className="grow" placeholder="Email" />
                    {errors.email && <span className=" text-red-500">This field is required</span>}
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input {...register("password", { required: true })} type="password" className="grow" placeholder="Password" />
                    {errors.password && <span className=" text-red-500">This field is required</span>}
                </label>
                <small className=" text-white">Dont have an account ? <NavLink to={'/signup'} className=" text-blue-400 font-semibold">Create Accout</NavLink></small>
                <button className=" btn w-full uppercase btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginPage