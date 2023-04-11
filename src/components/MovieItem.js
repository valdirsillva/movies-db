import { Link } from 'react-router-dom';
import { MovieCard } from '../styles/MovieCard';

export const MovieItem = ({ movie }) => {
    return (
        <MovieCard>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=" " />

            <div>
                <Link to={`movie/${movie.id}`}>{movie.title} </Link>
            </div>
        </MovieCard>
    )
}