import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/slices/todo";

function Form() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const submit = () => {
    dispatch(addTodo(name));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={submit}>Send</button>

      <div>
        {todos.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default Form;
