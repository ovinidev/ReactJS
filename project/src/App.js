/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from 'react';
import './App.css';

const globalState = { // Estado inicial
  title: 'Titulo do contexto',
  body: 'body do contexto',
  counter: 0,
};

const GlobalContext = createContext(); // Criando um contexto

// Para ser um componente que receba filhos, utilizar o {}

// eslint-disable-next-line
const Div = ({ children }) => {
  // Fragmentando com <> para o retorno ter mais de um componente
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState: { title, counter } } = theContext;

  return <h1>{title} {counter}</h1>;
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;

  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  // Ele vai prover um contexto para outros elementos
  // Passar um value com o objeto de estado inicial
  // Vai passar esse valor para todos os filhos do componente
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>

  );
}

export default App;
