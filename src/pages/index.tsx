import SearchInput from "@/components/SearchInput";
import MovieCardContainer from "@/components/MovieCardContainer";
import Spinner from "@/components/Spinner";
import { Inter } from "next/font/google";
import { useCallback, useState } from "react";
import { getMovies } from "@/services/omdbApi";
import { debounce } from "@/utils/debounce";
import { MovieCard } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [movieList, setMovieList] = useState<MovieCard[]>([]);
  const [hasError, setError] = useState(); 
  const [isLoading, setLoading] = useState(false);

  const setMovies = async(searchQuery: string) => {
    try {
      if (searchQuery.length > 0) {
        const movies = await getMovies(searchQuery)

        if (movies.Response === "False") {
          throw new Error(movies.Error)
        }

        setMovieList(movies.Search)
      } else {
        setMovieList([])
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false)
    }  
  }

  const debouncedQuery = useCallback(debounce(setMovies), [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1 className="text-5xl font-bold mb-12">OMDB Project</h1>
      <SearchInput debouncedQuery={debouncedQuery} loading={setLoading}/>
      <div className="mt-12">
        {isLoading ? <Spinner /> : <MovieCardContainer movieData={movieList} />}
      </div>
    </main>
  );
}
