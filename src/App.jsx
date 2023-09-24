import { useState } from 'react';
import Form from './Components/Form';
import Todos from './Components/Todos';

const DEF_VALUES = [
  { id: 1, text: 'todo1' },
  { id: 2, text: 'todo2' },
];

function App() {
  const [data, setData] = useState([...DEF_VALUES]);

  const addTodo = (input) => {
    const newTodo = { id: Math.random().toString(), text: input };
    setData((prevValue) => [...prevValue, newTodo]);
  };
  return (
    <div className="font-mono font-bold text-xl max-w-4xl m-auto p-4">
      <Form lift={addTodo} />
      <Todos data={data} />
    </div>
  );
}

export default App;
