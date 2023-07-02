
import { Fragment, useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList"
import { MoviesContainer } from "../styles/MoviesContainer"
import { MovieService } from "../services/MovieService";
import { Header } from "../components/Header"
import { Spinner } from "../components/spinner/Spinner";

export const Home = () => {
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const { data } = await MovieService.getMovies(page);
        setMovies([...movies, ...data.results]);
    }

    const handleScroll = (event) => {
        const sizeScroll = window.scrollY
        const sizeHeight = window.innerHeight
        const documentHeight = document.body.offsetHeight
        const sum = sizeHeight + sizeScroll

        if (sum >= documentHeight) {
            setLoading(true)
            setTimeout(() => {
                const p = page + 1
                setPage(p)
                fetchMovies(p)
                setLoading(false)
            }, 2500)
        }
    }

    window.addEventListener('scroll', handleScroll)


    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <Fragment>
            <Header fieldSearch={true} />
            <MoviesContainer>
                <MoviesList movies={movies} />

                <Spinner loagind={loading} />
            </MoviesContainer>
        </Fragment>
    )
}