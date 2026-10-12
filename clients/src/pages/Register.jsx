import {Link} from "react-router-dom";
import AuthLayout from "../components/AuthLayout"


export default function Register(){
    return (
        <AuthLayout image="../../../public/images/register.jpg" title="Create Account">
            <form onSubmit ={(e) => e.preventDefault()} className="space-y-4">
                <label className="block font-bold">Name :</label>
                <input 
                 name="name"
                 type="text"
                 required
                 placeholder="full Name"
                 autoComplete="name"
                  className=" w-full rounded-md border focus:outline-blue-400 p-2"
                />

            <label className="block font-bold">Email :</label>
                <input 
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className=" w-full rounded-md p-2 border focus:outline-blue-400" />

                <label className="block font-bold">
                    Password :
                </label>
                <input 
                type="password"
                name="password"
                placeholder="Enter password"
                required
    
                className="w-full p-2 rounded-lg border focus:outline-blue-200 font-semibold"/>
            
            <button className="rounded-lg px-2 bg-blue-400">Register</button>
            </form>

            <p className="mt-5 text-sm text-gray-400">
                Already registered ? <Link to="/login" className="text-movie-accent">Register</Link>
            </p>
        </AuthLayout>
    )
}