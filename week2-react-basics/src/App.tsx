import { useState } from 'react';
import './index.css';
import Message from "./Message";
import TodoList from "./TodoList";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [count, setCount] = useState(0);
  const todos = ['Design homework', 'Bass practice', 'Read novel'];
  const w = ['☀', '☔', '🌤'];
  const d = ['4/25', '4/26', '4/27'];
  const t = ['20℃', '18℃', '22℃'];
  return (
    <div className="App">
      <Message text="huimei"/>
      <Message name="huimei" age={20} hobby="bass guitar" />
      <TodoList items={todos} />
      <WeatherDisplay weather={w} temp={t} date={d}/>
    </div>
  );
}

export default App;