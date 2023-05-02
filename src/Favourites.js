import { Fragment, useState } from 'react';

export default function Favourites() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <Fragment>
        <h1>Animales favoritos</h1>
        <Field key="Last name" label="Last name" />
        <Field key="First name" label="First name" />
        {checkbox}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1>Animales favoritos</h1>
        <Field key="First name" label="First name" />
        <Field key="Last name" label="Last name" />
        {checkbox}
      </Fragment>
    );    
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
