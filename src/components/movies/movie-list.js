import { MovieItem } from "./movie-item"

export const MoviesList = ({ movies }) => {
    return (
        <section>
            <h2 className="mt-2 ml-14 text-3xl">Total de filmes: {movies.length}</h2>
            <main className="flex flex-row xs:flex-col flex-wrap items-center justify-center gap-10 mt-10">
                {movies.map((m, index) => <MovieItem movie={m} key={`${index}__${m.title}`} />)}
            </main>
        </section>
    )
}