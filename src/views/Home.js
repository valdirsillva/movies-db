
import { Fragment, useEffect, useState } from "react"
import { MoviesList } from "../components/movies/movie-list"
import { MovieService } from "../services/MovieService"
import { Header } from "../components/header/header"
import { Spinner } from "../components/spinner/Spinner"
import { GenresMovies } from "../components/genres/genres-movies"

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
            <section className="md:w-full flex md:flex-row xs:flex-col bg-[#151516]">
                <div className="invisible hidden md:flex md:w-1/4 md:visible">
                   <GenresMovies genres={genres} />
                </div>
                
                <div className="md:w-3/4 xs:w-full">
                    <MoviesList movies={movies} />
                </div>
            </section>
            <Spinner loagind={loading} />
        </Fragment>
    )
}