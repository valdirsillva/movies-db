
export const VoteAverage = ({ movie }) => {
    return (
        <div className="flex items-center justify-center -mt-8 bg-[#151516] w-[50px] h-[50px] circle rounded-3xl border-4 border-[#1eaa64]">
            <span className="text-lg font-bold">{movie.vote_average.toFixed(1)}</span>
            <small className="text-[10px] font-mono ml-1 mb-2">%</small>
        </div>
    )
}