import { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);

    // локальний стан класового компонента
    this.state = {
      count: 0,
    };
  }

  // метод, який оновлює стан
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>Class компонент (лічильник)</h2>
        <p>Поточне значення: {count}</p>
        <button type="button" onClick={this.handleIncrement}>
          Збільшити
        </button>
      </div>
    );
  }
}

export default CounterClass;