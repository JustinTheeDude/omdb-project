import Error from "@/components/Error";
import { MovieCard } from "@/types";

export default function Card({ Poster, Title, Year }: MovieCard) {
    return (
        <div className="border-white border-2 rounded-md flex flex-col max-w-64 justify-between bg-[#003566]">
            <div className="w-full">
                { Poster !== "N/A" ? <img
                    className="object-contain aspect-auto w-full h-full"
                    src={Poster}
                    alt={`image of ${Title} movie`}
                /> : <Error errorMessage="Uh oh! Movie poster not found :("/>}
            </div>
            <div className="p-2">
                <h2 className="font-bold mb-2">{Title}</h2>
                <p className="text-sm mb-2">Year of release: {Year}</p>
                <button className="appearance-none bg-white px-2 text-black rounded-md">Text</button>
            </div>
        </div>
    )
}