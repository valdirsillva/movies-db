import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MovieService } from '../services/MovieService';
import { MovieCard } from '../styles/MovieCard';

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MovieService.getMovieById(id);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie()
    }, [])


    return (
        <>
            <MovieCard>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=" " />
                <h1>{movie.title}</h1>
                <article>
                    {movie.overview}
                </article>
            </MovieCard>
        </>
    )
}