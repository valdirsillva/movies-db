import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";
import { MoviesContainer } from "./styles/MoviesContainer";
import { MovieService } from "./services/MovieService";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MovieService.getMovies();
    setMovies(data.results);

    console.log(movies)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
