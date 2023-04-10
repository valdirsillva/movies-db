import { MovieItem } from "./MovieItem"

export const MoviesList = () => {
    <section>
        <ul>
            {movies.map(m => <MovieItem title={m.title} />)}
        </ul>
    </section>
}