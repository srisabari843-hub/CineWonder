
export default function AuthLayout({image,title,children}){

return (
    <div className = "grid min-h-screen overflow-hidden md:grid-cols-[60%_40%]">
        <div className = "relative hidden md:block p-0">
            <img 
            src={image}
            alt={`${title} illustration`}
            className="absolute inset-0 h-full w-full object-cover border-red-500"/>
        </div>

        <div className="flex items-center justify-center bg-movie-bg p-6">
            <div className="w-full max-w-sm mt-[10px]">
                <h1 className="mb-6 text-3xl font-bold">{title}</h1>
                {children}
            </div>
        </div>
    </div>
)
    
}
