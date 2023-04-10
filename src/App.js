import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { About } from "./views/About";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
