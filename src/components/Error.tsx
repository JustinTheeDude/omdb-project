type ErrorProps = {
    errorMessage: string
}

export default function Error({ errorMessage }: ErrorProps ) {
    return (
        <div className="flex-col flex max-w-96">
            <img src="/pikachu.png" alt="image of a sad pikachu"/>
            <p className="px-2">{ errorMessage }</p>
        </div>
    )
}