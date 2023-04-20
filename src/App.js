import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './List';
import Top from './Top';
import Guess from "./Guess";
import Favourites from "./Favourites";
import './App.css';

function App() {  
  return (
    <BrowserRouter>
      <nav>
        <a href="/">Lista</a>
        <a href="/top">Top</a>
        <a href="/guess">Adivinanza</a>
        <a href="/favourites">Favoritos</a>
      </nav>
      <main>
        <Routes>
          <Route path="top" element={<Top />} />
          <Route path="guess" element={<Guess />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="/" exact element={<List />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
