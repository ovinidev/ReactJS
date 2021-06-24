import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '.';

describe('<Posts />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<Input handleChange={fn} searchValue="testando" />);

    const input = screen.getByPlaceholderText(/Faça sua busca/i);

    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<Input handleChange={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/Faça sua busca/i);
    const valueInput = 'valor';

    userEvent.type(input, valueInput);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(valueInput.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Input handleChange={fn} searchValue="testando" />);

    expect(container).toMatchSnapshot();
  });
});
