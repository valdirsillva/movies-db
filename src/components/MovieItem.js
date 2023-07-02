import { Link } from 'react-router-dom';
import { MovieCard } from '../styles/MovieCard';
import { SpanPercent } from '../styles/SpanPercent';

export const MovieItem = ({ movie }) => {
    return (
        <MovieCard>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=" " />

            <SpanPercent>
                {movie.vote_average}%
            </SpanPercent>

            <div>
                <Link to={`movie/${movie.id}`}>{movie.title} </Link>
                {/* <span>{movie.release_date}</span> */}
            </div>
        </MovieCard>
    )
}