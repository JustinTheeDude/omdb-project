export const getMovies = async(searchQuery: string, page: number = 1) => {
    const omdbResponse = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchQuery}&type=movie&page=${page}`)
    return await omdbResponse.json()
}