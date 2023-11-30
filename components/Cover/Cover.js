import Image from "next/image"

export const Cover = ({children, background}) =>{
    return <div className="text-white h-screen bg-slate-800 min-h-[400px] flex justify-center items-center">
                <Image alt="Cover" src={background} layout="fill" className="mix-blend-soft-light object-cover"></Image>
                <div className="max-w-5xl z-10">
                    {children}
                </div>
            </div>
}