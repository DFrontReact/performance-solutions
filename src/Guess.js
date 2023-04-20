import { useState } from 'react';

export default function Guess() {
  const [showHint, setShowHint] = useState(false);
  if (showHint) {
    return (
      <div>
        <h1>Adivinanza</h1> 
        <p>Para ser más elegante no usa guante ni chaqué,
        solo cambia en un instante por una «efe» la «ge».</p>
        <p><i>Pista: Es grande.</i></p>
        <Form />
        <br />
        <button onClick={() => {
          setShowHint(false);
        }}>Ocultar pista</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Adivinanza</h1>
      <p>Para ser más elegante no usa guante ni chaqué,
        solo cambia en un instante por una «efe» la «ge».</p>
      <Form />
      <br />
      <button onClick={() => {
        setShowHint(true);
      }}>Mostrar pista</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
