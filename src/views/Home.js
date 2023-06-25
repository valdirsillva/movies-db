
import { Fragment, useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList"
import { MoviesContainer } from "../styles/MoviesContainer"
import { MovieService } from "../services/MovieService";
import { Header } from "../components/Header"

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const { data } = await MovieService.getMovies();
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <Fragment>
            <Header fieldSearch={true} />
            <MoviesContainer>
                <MoviesList movies={movies} />
            </MoviesContainer>
        </Fragment>
    )
}