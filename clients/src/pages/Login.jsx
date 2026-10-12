import {Link} from "react-router-dom"
import AuthLayout from "../components/AuthLayout"

export default function Login(){
    return (
        <AuthLayout image="../../../public/images/login.jpg" title="Welcome Back Kids">
            <form onSubmit = {(e) => e.preventDefault()} className="space-y-4">
             <label className="block font-bold">Email</label>
             <input
             name="email"
             type="email"
             required 
             placeholder ="Enter Email ID"
             autoComplete ="email"
             className="p-2 rounded-md  border  focus:outline-blue-400"
             />
                
                <label className="block font-bold">Password</label>
                <input
                name="password"
                type="password"
                required
                placeholder ="password"
                autoComplete="current-password"
                className=" block p-2 rounded-md border focus:outline-blue-400"/>

                <button className=" rounded-md bg-movie-accent p-2 ">Login</button>
            </form>
            
              <p className="mt-4 text-gray-400">New Here? <Link to="/register" className="text-movie-accent">Create Account</Link></p>
            
        </AuthLayout>
    )
}