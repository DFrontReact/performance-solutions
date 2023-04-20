import { Fragment, useState } from 'react';

const Top = () => {
  const [reverse, setReverse] = useState(false);

  const displayedAnimals = [...animals];
  if (reverse) {
    displayedAnimals.reverse();
  }

  return (
    <Fragment>
      <h1>Lista de animales</h1>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Revertir
      </label>
      <ul>
        {displayedAnimals.map((animal, i) =>
          <li key={i}>
            <Animal animal={animal} />
          </li>
        )}
      </ul>
    </Fragment>
  );
}

export default Top;

const animals = [
  { id: 0, name: 'African Wild Dog', scientificName: 'Lycaon pictus', diet: 'Carnivore' },
  { id: 1, name: 'American Bulldog', scientificName: 'Canis Lupus', diet: 'Omnivore' },
  { id: 2, name: 'American Dog Tick', scientificName: 'Dermacentor variabilis', diet: 'Omnivore' }
];

function Animal({ animal }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Fragment>
      <p><b>{animal.name}</b></p>
      {expanded &&
        (
          <Fragment>
            <p><i>{animal.scientificName}</i></p>
            <p><i>{animal.diet}</i></p>  
          </Fragment>

        )
      }
      <button onClick={() => {
        setExpanded(!expanded);
      }}>
        {expanded ? 'Ocultar' : 'Mostrar'} detalles
      </button>
    </Fragment>
  );
}