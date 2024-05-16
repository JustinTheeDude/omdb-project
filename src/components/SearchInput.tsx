type InputProps = {
    debouncedQuery: Function;
    loading: Function;
    resetErrorState: Function;
    setSearchQuery: Function
}

export default function SearchInput({ debouncedQuery, loading, resetErrorState, setSearchQuery }: InputProps) {
    const handleInputChange = (inputText: string) => {
        debouncedQuery(inputText);
        loading(true);
        resetErrorState("")
        setSearchQuery(inputText)
    };

    return (
        <form className="w-full max-w-2xl flex" onSubmit={(e) => e.preventDefault()}>
            <input 
                onChange={(e) => handleInputChange(e.target.value)}
                id="search" 
                type="text" 
                placeholder="Search for a movie title like 'Blade Runner' or 'Indiana Jones'" 
                className="text-xl appearance-none rounded-lg border-none text-black p-2 w-full"
            />
        </form>
    );
}