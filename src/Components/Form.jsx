import Button from './Button';
import { useState } from 'react';

const Form = ({ lift }) => {
  const [input, setInput] = useState('');

  return (
    <form
      className="pb-8"
      onSubmit={(e) => {
        e.preventDefault();
        lift(input);
        setInput('');
      }}
    >
      <div className="sm:gap-2 form-control flex justify-between sm:flex-col">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className=" sm:rounded-full pl-4 py-4 rounded-l-full flex-1 outline-none p-2 "
          type="text"
          id="todo"
          placeholder="Enter todo"
          value={input}
          autoComplete="off"
        />
        <Button type="submit"></Button>
      </div>
    </form>
  );
};

export default Form;
