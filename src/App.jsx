import './App.css';
import CounterStateful from './components/CounterStateful.jsx';
import UserCardStateless from './components/UserCardStateless.jsx';
import CounterClass from './components/CounterClass.jsx'; 

function App() {
  return (
    <div className="app">
      <h1>Домашнє завдання: stateful та stateless компоненти</h1>

      <h2>Функціональний stateful компонент</h2>
      <CounterStateful />

      <h2>Class stateful компонент з такою ж логікою</h2>
      <CounterClass />

      <UserCardStateless name="Катерина" age={25} />
    </div>
  );
}

export default App;