import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Link} from "react-router-dom";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors}, } = useForm();
  const {signin, errors: signinErrors} = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });


  return (  
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        
        {
            signinErrors.map((error, i) => (
                <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
                    {error}
                </div>
            ))}

        <h1 className="text-2xl font-bold">Login</h1>
        
        <form
         onSubmit={onSubmit}
        >
          
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
                Iniciar Sesión
            </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Todavía no tienes una cuenta? <Link to="/register" className="text-sky-500">Sign up</Link>
        </p>
        </div>
    </div>
  )
}

