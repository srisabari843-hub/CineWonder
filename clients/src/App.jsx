import {Routes,Route}  from "react-router-dom"
import Navbar from  "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"

function Home(){
  return (
    <main className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="text-4xl font-bold">
        Discover your next <span className="text-movie-accent">Favorite</span>
      </h1>
      <p className="mt-3 text-gray-400" >
        Explore movies for every mood
      </p>
    </main>
  )
}

function Watchlist(){
  return <main className="p-8 text-2xl">Your Watchlist</main>
}

function Profile(){
  return <main className="p-8 text-2xl">Your Profile</main>
}

export default function App(){
  return (<>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/watchlist" element={<Watchlist />} />
    <Route path="/profile" element = {<Profile />} />
    <Route path="/login" element={<Login />}></Route>
    <Route path ="/register" element={<Register />}></Route>
   </Routes >
  </>
  )
}

