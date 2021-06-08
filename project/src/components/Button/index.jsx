import { Component } from "react";
import "./styles.css"

export class Button extends Component {
  render() {
    const { onClick, disabled } = this.props;

    return (
      <button onClick={onClick} disabled={disabled}>
        Clique aqui
      </button>
    );
  }
}