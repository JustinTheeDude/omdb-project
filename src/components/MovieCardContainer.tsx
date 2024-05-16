import Card from "./MovieCard";
import { MovieCard } from "@/types";

type MovieCardProps = {
    movieData: MovieCard[]
}

export default function MovieCards({ movieData }: MovieCardProps) {
    return (
        <div className="flex max-w-screen-xl flex-wrap gap-2 justify-center items-stretch">
            {movieData.map(({ Poster, Title, Year }: MovieCard) =>
                <Card 
                    Poster={Poster}
                    Title={Title}
                    Year={Year}
                />
            )}
        </div>
    )
}