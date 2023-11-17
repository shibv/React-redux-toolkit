import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home.js";
import MovieDetails from "./components/MovieDetails/Moviedetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetails} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
