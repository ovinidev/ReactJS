/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
import {
  useEffect, useState, useRef,
} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const contador = useRef(0);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h2>
        Renderizou: {contador.current} x
      </h2>
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      <button type="button" onClick={handleClick}>Render</button>
    </div>
  );
}

export default App;
