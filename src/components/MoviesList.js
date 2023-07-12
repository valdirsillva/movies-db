import { MovieItem } from "./MovieItem"
import { MainMenuElement } from "../styles/MainMenuElement"

export const MoviesList = ({ movies }) => {
    return (
        <section >
             <h2 className="mt-2 text-3xl">Total de filmes: {movies.length}</h2>
            <MainMenuElement>
                {movies.map((m, index) => <MovieItem movie={m} key={`${index}__${m.title}`} />)}
            </MainMenuElement>
        </section>
    )
}