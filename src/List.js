import { useCallback, useEffect, useState } from 'react';
import Searcher from './components/Searcher';

function List() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    setAnimals([]);
  }, [])

  const handleSubmit = useCallback(searcher => {
    fetch(`https://api.api-ninjas.com/v1/animals?name=${searcher}`, {
      headers: {
        'X-Api-Key': 'xOgcBLTk9ZvG5bGTzeP6nw==0rPJoVOZEFUD0zmp'
      }
    })
      .then(response => response.json())
      .then(data => setAnimals(data));
  }, []) 
  
  return (
    <div>
      <h1>Lista de animales</h1>
      <Searcher onSubmit={handleSubmit}/>
      <ul>
        {animals.map(a => {
          return <li>{a.name}</li>
        })}
      </ul>
    </div>
  );
}

export default List;