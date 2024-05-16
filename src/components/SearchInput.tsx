type InputProps = {
    debouncedQuery: Function;
    loading: Function;
}

export default function SearchInput({ debouncedQuery, loading }: InputProps) {
    const handleInputChange = (inputText: string) => {
        debouncedQuery(inputText);
        loading(true);
    };

    return (
        <form className="w-2/5 flex">
            <label className="search-label">
            </label>
            <input 
                onChange={(e) => handleInputChange(e.target.value)}
                id="search" 
                type="text" 
                placeholder="Search for a movie title like 'Blade Runner' or 'Indianna Jones'" 
                className="text-xl appearance-none rounded-lg border-none text-black p-2 w-full"
            />
        </form>
    );
}