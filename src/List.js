import { useEffect, useState } from 'react';

function List() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/animals?name=dog', {
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
      <ul>
        {animals.map(a => {
          return <li>{a.name}</li>
        })}
      </ul>
    </div>
  );
}

export default List;
