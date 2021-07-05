import { H1 } from './H1';
import { P } from './P';

// eslint-disable-next-line
export const Div = ({ children }) => {
  // Fragmentando com <> para o retorno ter mais de um componente
  return (
    <>
      <H1 />
      <P />
    </>
  );
};
