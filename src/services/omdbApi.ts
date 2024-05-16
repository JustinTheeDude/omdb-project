export const getMovies = async(searchQuery: string) => {
    const omdbResponse = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchQuery}&type=movie`)
    return await omdbResponse.json()
}