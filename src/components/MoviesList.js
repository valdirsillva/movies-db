import { MovieItem } from "./MovieItem"
import { MainMenuElement } from "../styles/MainMenuElement"

export const MoviesList = ({ movies }) => {
    return (
        <section>
            <MainMenuElement>
                {movies.map((m, index) => <MovieItem movie={m} key={`${index}__${m.title}`} />)}
            </MainMenuElement>
        </section>
    )
}