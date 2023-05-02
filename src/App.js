import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Suspense, lazy } from "react";

const Top = lazy(() => import('./Top'));
const Guess = lazy(() => import('./Guess'));
const Favourites = lazy(() => import('./Favourites'));
const List = lazy(() => import('./List'));

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
        <Suspense fallback={<div>Cargando vista...</div>}>
          <Routes>
            <Route path="top" element={<Top />} />
            <Route path="guess" element={<Guess />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="/" exact element={<List />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
