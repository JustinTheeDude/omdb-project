import { MovieCard } from "@/types";

export default function Card({ Poster, Title, Year }: MovieCard) {
    return (
        <div className="border-white border-2 rounded-md flex flex-col w-1/6">
            <div className="w-full">
                <img
                    className="object-contain aspect-auto w-full h-full"
                    src={Poster}
                    alt={`image of ${Title} movie`}
                />
            </div>
            <div className="p-2">
                <h2>{Title}</h2>
                <p>{Year}</p>
                <button className="appearance-none bg-white px-2 text-black">Text</button>
            </div>
        </div>
    )
}