import { useState } from 'react';

function CounterStateful() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Stateful компонент (лічильник)</h2>
      <p>Поточне значення: {count}</p>
      <button type="button" onClick={handleIncrement}>
        Збільшити
      </button>
    </div>
  );
}

export default CounterStateful;