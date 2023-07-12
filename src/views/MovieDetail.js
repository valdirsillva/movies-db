import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header';
import { MovieCard } from '../styles/MovieCard';
import { MovieService } from '../services/MovieService';
import { MovieSectionPoster } from '../styles/MovieSectionPoster';
import { Trailler } from '../components/modal/Trailler';

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MovieService.getMovieById(id);
        setMovie(data);
    }

    const getDetailsMovie = async (id) => {
        const response = await MovieService.getDetailsMovieById(id)

        if (response.data.results[1]) {
            const dubbedTrailer = response.data.results[1].key
            // Retorna key p/ trailler dublado
            return dubbedTrailer
        }

        if (response.data.results[0]) {
            const subtitledTrailer = response.data.results[0].key
            // Retorna key p/ trailler legendado
            return subtitledTrailer
        }
    }

    const viewTraillerMovie = async () => {
        const response = await getDetailsMovie(movie.id)
        return response
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <>
            <Header
                fieldSearch={false}
            />
            <MovieCard>
                <MovieSectionPoster >
                    <img

                        loading="lazy"
                        className='w-[350px] rounded-lg'
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />

                    <article className='w-full flex flex-col mb-5 items-start'>
                        <h1 className='text-violet-500 text-5xl mb-5 pb-7 font-medium '>{movie.title}</h1>
                        <p className='w-9/12 mb-10 h-3/6 '>
                            {movie.overview}
                        </p>

                        <Trailler
                            handleOnClick={viewTraillerMovie}
                            title={movie.title}
                        />

                    </article>
                </MovieSectionPoster>
            </MovieCard>
        </>
    )
}