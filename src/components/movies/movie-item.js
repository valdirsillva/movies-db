import { Link } from 'react-router-dom'
import { VoteAverage } from '../vote-average/vote-average'

export const MovieItem = ({ movie }) => {
    return (
        <div className="md:w-[220px] md:h-[380px] flex flex-col  items-center flex-wrap">
            <div className="md:absolute flex flex-col items-center">
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    className="rounded-md md:w-full xs:w-64 md:h-[340px] "
                    loading='lazy'
                    alt={movie.title}
                />
                <VoteAverage movie={movie} />
                <div className="md:w-[220px] flex text-wrap text-center mt-2 mb-4">
                    <Link to={`movie/${movie.id}`}>{movie.title} </Link>
                    {/* <span>{movie.release_date}</span> */}
                </div>
            </div>
        </div>
    )
}
