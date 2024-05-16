type PaginationProps = {
    handlePageChange: Function;
    pageNumber: number;
}

export default function PaginationButtons({ handlePageChange, pageNumber }: PaginationProps) {
    return(
      <div className="mt-10">
            <button 
              className="bg-[#000814] px-2 text-white text-xl mr-4"
              onClick={() => handlePageChange(pageNumber - 1)}
            >
                Back
              </button>
            <button
              className="bg-[#000814] px-2 text-white text-xl"
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              Next
            </button>
        </div>
    )
}