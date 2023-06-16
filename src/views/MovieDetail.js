import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { MovieService } from '../services/MovieService';
import { MovieCard } from '../styles/MovieCard';
import { MovieSectionPoster } from '../styles/MovieSectionPoster';
import { Trailler } from '../components/modal/Trailler';

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MovieService.getMovieById(id);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie()
    })


    return (
        <>
            <MovieCard>
                <MovieSectionPoster >
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=" " />

                    <article className='w-full flex flex-col mb-5 items-start'>
                        <h1 className='text-violet-500 text-5xl mb-5 pb-7 font-medium '>{movie.title}</h1>
                        <p className='w-9/12 mb-10 h-3/6 '>
                            {movie.overview}
                        </p>

                        <Trailler
                            title={movie.title}
                            url={`https://www.youtube.com/embed/${movie.id}`}
                        />
                    </article>



                </MovieSectionPoster>

            </MovieCard>
        </>
    )
}