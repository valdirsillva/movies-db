
import { Fragment, useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList"
import { MoviesContainer } from "../styles/MoviesContainer"
import { MovieService } from "../services/MovieService";
import { Header } from "../components/Header"
import { Spinner } from "../components/spinner/Spinner";
import { GenresMovies } from "../components/genres/Genres";

export const Home = () => {
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([]);

    const [genres, setGenres] = useState([]);

    const fetchMovies = async () => {
        const { data } = await MovieService.getMovies(page);
        setMovies([...movies, ...data.results]);
    }

    const handleScroll = () => {
        const sizeScroll = window.scrollY
        const sizeHeight = window.innerHeight
        const documentHeight = document.body.offsetHeight
        const sum = sizeHeight + sizeScroll

        if (sum >= documentHeight) {
            setLoading(true)
            setTimeout(() => {
                const p = page + 1
                setPage(p)
                // fetchMovies(p)
                setLoading(false)
            }, 1500)
        }
    }

    window.addEventListener('scroll', handleScroll)

    const getGenres = async () => {
        const { data } = await MovieService.getMoviesGenres()
        setGenres(data.genres)
    }

    useEffect(() => {
        getGenres()
    }, [])

    useEffect(() => {
        fetchMovies()
    }, [page])

    return (
        <Fragment>
            <Header fieldSearch={true} />
            <MoviesContainer>
                <GenresMovies genres={genres} />

                <MoviesList movies={movies} />
            </MoviesContainer>
            <Spinner loagind={loading} />
        </Fragment>
    )
}