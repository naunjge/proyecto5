import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
    const { 
        register, 
        handleSubmit,
        formState: {errors}, 
    } = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async(values) => {
       signup(values); 
    });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {
            registerErrors.map((error, i) => (
                <div className="bg-red-500 p-2 text-white" key={i}>
                    {error}
                </div>
            ))
        }
        <form
         onSubmit={onSubmit}
        >
            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="text"placeholder="Username" {...register("username", { required: true})} 
            /> 
            {errors.username && (
                <p className="text-red-500">Username is required</p>
            )}
            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="email" placeholder="Email" {...register("email", { required: true})}
             />
             {errors.email && (
                <p className="text-red-500">Email is required</p>
            )}
            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="password" placeholder="Password" {...register("password", { required: true})} 
            /> 
            {errors.password && (
                <p className="text-red-500">Password is required</p>
            )}
            <button type="submit" className="border px-5 rounded-md">
                Register
            </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Login</Link>
        </p>
    </div>
  )
}

