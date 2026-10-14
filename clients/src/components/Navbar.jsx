import { NavLink } from 'react-router-dom'

const links=[
   
    {name:"Home",path:"/"},
    {name:"Watchlist",path:"/watchlist"},
    {name:"Profile",path:"/profile"},
     {name:"Login",path:"/login"},
     {name:"Register",path:"/Register"}
     
]

export default function Navbar(){
    return (
        <nav className="sticky top-0 z-50 border-b bg-movie-bg/90 px-5 py-4 ">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                <NavLink to="/" className=" font-fredoka  text-3xl font-semibold tracking-tight">
                <span className="text-movie-accent">Kid</span>Movie
                </NavLink>
            
            <div className="flex items-center gap-5">
                {links.map((link) => (
                <NavLink
                key={link.path}
                to={link.path}
                end={link.path==="/"}
                className={({isActive}) =>
                `font-bold text-lg relative  after:absolute after:h-0.5 after:bg-blue-500 after:bottom-0 after:left-0 after:w-full after:transition-transform after:duration-400 ${
                    isActive ? 
                    "font-semibold text-movie-accent after:scale-x-100" 
                    :
                     "text-gray-400 hover:text-white after:scale-x-0"
                }`
            }
                >
                 {link.name}
                </NavLink>
                ))}
            </div>
            </div>
        </nav>
    )
}
