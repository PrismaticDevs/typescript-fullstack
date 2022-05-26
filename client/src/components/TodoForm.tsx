import { FormEvent } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
const TodoForm = () => {
  const [input, setInput] = useState("");
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <form className="input" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="form_input"
        />
        <button className="input_submit">
          <FaPlus />
        </button>
      </form>
    </>
  );
};

export default TodoForm;
