import { NavLink } from 'react-router-dom'

const links=[
   
    {name:"Home",path:"/"},
    {name:"Watchlist",path:"/watchlist"},
    {name:"profile",path:"/profile"},
     {name:"Login",path:"/login"},
     {name:"Register",path:"/Register"}
     
]

export default function Navbar(){
    return (
        <nav className="sticky top-0 z-50 border-b bg-movie-bg/90 px-5 py-4 ">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                <NavLink to="/" className="text-2xl font-bold tracking-tight">
                <span className="text-movie-accent">Kid</span>Movie
                </NavLink>
            
            <div className="flex items-center gap-5">
                {links.map((link) => (
                <NavLink
                key={link.path}
                to={link.path}
                end={link.path==="/"}
                className={({isActive}) =>
                `text-sm transition ${
                    isActive ? 
                    "font-semibold text-movie-accent" 
                    :
                     "text-gray-400 hover:text-white"
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
