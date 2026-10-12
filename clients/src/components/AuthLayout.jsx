
export default function AuthLayout({image,title,children}){

return (
    <div className = "grid min-h-screen md:grid-cols-[60%_40%]">
        <div className = "hidden md:block">
            <img 
            src={image}
            alt={`${title} illustration`}
            className="h-[540px] w-full object-contain"/>
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
