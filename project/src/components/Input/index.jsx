import './styles.css';
import P from 'prop-types';

export const Input = ({ searchValue, handleChange }) => {
  return <input onChange={handleChange} value={searchValue} placeholder={'Faça sua busca'} type="search" />;
};

Input.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
