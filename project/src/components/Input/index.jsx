import "./styles.css";

export const Input = ({ searchValue, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      value={searchValue}
      placeholder={"Faça sua busca"}
      type="search" />
      
  );
}