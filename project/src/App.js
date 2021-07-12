/* eslint-disable default-case */
import { useReducer } from 'react';
import './App.css';

export const globalState = { // Estado inicial
  title: 'Titulo do contexto',
  body: 'body do contexto',
  counter: 0,
};

// action recebe o valor do type:
const reducer = (state, action) => {
  switch (action.type) { // dispatch sendo utilizado
    case 'muda':
      console.log('Chamou muda');
      return { ...state, title: 'Mudou' };
    case 'inverter':
      console.log('Chamou inverter');
      const {title} = state;
      return { ...state, title: title.split('').reverse().join('') };
  }

  return { ...state }; // Retornando o estado novo, obrigatoriamente
};

function App() {
  // dispatch irá disparar ações, no caso irá disparar a função reducer
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda' })}>Click</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverte</button>
    </div>
  );
}

export default App;
