import { MovieItem } from "./MovieItem"
import { MainMenuElement } from "../styles/MainMenuElement"

export const MoviesList = ({ movies }) => {
    return (
        <section>
            <MainMenuElement>
                {movies.map(m => <MovieItem movie={m} key={m.id} />)}
            </MainMenuElement>
        </section>
    )
}