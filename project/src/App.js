import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [reverse, setReverse] = useState(false); // Estado, set do estado
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCounter((c) => c + 1);
  };

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>
          Contador: {counter}
        </h1>

        <button type="button" onClick={handleClick}>
          Reverse
        </button>

      </header>
    </div>
  );
}

export default App;
