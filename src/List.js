import { useEffect, useState } from 'react';

function List() {
  const [animals, setAnimals] = useState([]);
  const [searcher, setSearcher] = useState([]);

  const handleChange = evt => {
    setSearcher(evt.target.value);
  }

  const onClickFilter = () => {
    fetch(`https://api.api-ninjas.com/v1/animals?name=${searcher}`, {
      headers: {
        'X-Api-Key': 'xOgcBLTk9ZvG5bGTzeP6nw==0rPJoVOZEFUD0zmp'
      }
    })
      .then(response => response.json())
      .then(data => setAnimals(data));
  }
  
  return (
    <div>
      <h1>Lista de animales</h1>
      <form>
        <input type='text' value={searcher} onChange={handleChange}/>
      </form>
      <button onClick={onClickFilter}>Filtrar</button>
      <ul>
        {animals.map(a => {
          return <li>{a.name}</li>
        })}
      </ul>
    </div>
  );
}

export default List;