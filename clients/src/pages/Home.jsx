const movies =[
    {id:1,title:"Black Panter",genre:"Action",emoji:"🐈‍⬛"},
    {id:2,title:"Spider-Man",genre:"Adventure",emoji:"🕷️"},
    { id: 3, title: "Inside Out", genre: "Comedy", emoji: "😊" },
   { id: 4, title: "The Conjuring", genre: "Horror", emoji: "👻" },
   { id: 5, title: "Titanic", genre: "Romance", emoji: "🚢" },
   { id: 6, title: "Avengers", genre: "Action", emoji: "🦸" },
];

import {useState} from 'react'


export default function Home(){

const [search,setsearch] = useState("")
const [genre,setgenre] = useState("All")

const genres=["All",...new Set(movies.map((m)=>m.genre))]

const filtered = movies.filter((movie)=>
    movie.title.toLowerCase().includes(search.toLowerCase()) &&
     movie.genre == genre || genre=="All"
)
return (
<main className="min-h-screen bg-movie-bg p-10  text-white flex flex-col gap-10 ">
    
    <div className="[box-shadow:0_0_5px_white] [text-shadow:0_0_10px_white] bg-purple-900 w-100% h-[200px] rounded-4xl p-10 flex flex-col gap-5">
        <p className="tracking-widest">your Movie Universe</p>
        <h1 className="tracking-wide font-bold text-3xl ">Find Your Next Favourite Movie..</h1>
        <p className="tracking-widest">Discover movies for evert mood</p>
    </div>

    <input
    placeholder="Enter Your favourite Movie"
    value={search}
    onChange ={(e) => setsearch(e.target.value)}
    className="bg-movie-surface p-4 rounded-xl  w-100 [box-shadow:0_0_3px_white]"/>
   
   <div className=" p-3 w-full flex gap-12">
    {genres.map((g) => (
        <button 
        key={g}
        onClick={() => setgenre(g)}
        className={`rounded-full p-3  ${
            genre == g
            ? "bg-movie-accent text-bold"
            : "bg-movie-surface text-gray-300"
        }`}
        >{g}</button>
    ))}
   </div>
    
    <h1 className="text-2xl font-bold">Explore Movies</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
     {filtered.map((movie) => (
        <article 
        key={movie.id}
        className="rounded-2xl border-white/10 bg-movie-surface transition hover:-translate-y-1 "
         >
        <div className=" h-36 mb-4 items-center justify-center rounded-xl bg-blue-300 ">
        </div>
        <h3>{movie.title}</h3>
        <p className="mt-1 text-sm text-grey">{movie.title}</p>
        <p className="mt-1 text-sm text-gray-400">{movie.genre}</p>
         </article>
     ))}
    </div>
</main>

)
}