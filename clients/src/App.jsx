import {Routes,Route}  from "react-router-dom"
import Navbar from  "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from './pages/Home'



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

