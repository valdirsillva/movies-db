import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { MovieDetail } from "./views/MovieDetail";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
