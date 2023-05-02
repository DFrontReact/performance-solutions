import { useState } from 'react';

export default function Guess() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      <h1>Adivinanza</h1> 
      <p>Para ser más elegante no usa guante ni chaqué,
      solo cambia en un instante por una «efe» la «ge».</p>
      {showHint && (<p><i>Pista: Es grande.</i></p>)}
      <Form />
      <br />
      {showHint ? (
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
      ) : (
        <button onClick={() => {
          setShowHint(true);
        }}>Show hint</button>
      )}
    </div>
  )
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
