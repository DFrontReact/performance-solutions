import { memo, useState } from "react";

const Searcher = ({onSubmit}) => {
  const [searcher, setSearcher] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searcher);
  }

  const handleChange = evt => {
    setSearcher(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={searcher} onChange={handleChange}/>
      <button>Buscar</button>
    </form>
  )
}

export default memo(Searcher);