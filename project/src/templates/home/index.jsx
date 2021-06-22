import { Component } from 'react';
import './styles.css';


export class Home extends Component {
  state = {
    counter: 0
  }

  click = () => {
    this.setState({ counter: this.state.counter + 1 });
  }


  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.click}>Increment</button>
      </div>
    );
  }
}

export default Home;