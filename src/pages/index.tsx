import SearchInput from "@/components/SearchInput";
import MovieCardContainer from "@/components/MovieCardContainer";
import Spinner from "@/components/Spinner";
import Error from "@/components/Error";
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
  const [nextPage, setNextPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalResults, setTotalResults] = useState("");

  const setMovies = async(searchQuery: string) => {
    try {
      if (searchQuery.length > 0) {
        const movies = await getMovies(searchQuery)

        if (movies.Response === "False") {
          throw Error(movies.Error)
        }

        setMovieList(movies.Search)
        setTotalResults(movies.totalResults);
      } else {
        setMovieList([])
        setTotalResults("");
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false)
    }  
  }

  const handlePageChange = async(pageNumber: number) => {
    if (pageNumber !== 0 && pageNumber !== Number(totalResults)) {
      console.log(pageNumber)
      setNextPage(pageNumber)
      try {
        setLoading(true)
        const movies = await getMovies(searchQuery, pageNumber)
        setMovieList(movies.Search)
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false)
      }
    }
  }

  const debouncedQuery = useCallback(debounce(setMovies), [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1 className="text-5xl font-bold mb-12">OMDB Project</h1>
      <SearchInput 
        debouncedQuery={debouncedQuery} 
        loading={setLoading}
        resetErrorState={setError}
        setSearchQuery={setSearchQuery}
      />
      {hasError ? 
        <Error errorMessage="Uh Oh! We can't seem to find that movie make sure to double check your spelling"/> :
        <div className="mt-12">
          {isLoading ? <Spinner /> : <MovieCardContainer movieData={movieList} />}
        </div>
      }
      {
        Number(totalResults) > 10 && !hasError && !isLoading &&
        <div className="mt-10">
            <button 
              className="bg-[#000814] px-2 text-white text-xl mr-4"
              onClick={() => handlePageChange(nextPage - 1)}
            >
                Back
              </button>
            <button
              className="bg-[#000814] px-2 text-white text-xl"
              onClick={() => handlePageChange(nextPage + 1)}
            >
              Next
            </button>
        </div>
      }
    </main>
  );
}
