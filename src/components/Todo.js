import React from "react";
import { useState } from "react";
import "./todo.css";
import { AiFillDelete } from "react-icons/ai";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const addTask = () => {
    setTodos([...todos, {list:input,id:Date.now()}]);
    setInput("");
  };
const onDelete=(id)=>{
setTodos( todos.filter((dos)=> dos.id !==id))


}
  return (
    <div className="to-do">
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inp"
          name="task"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button className="btn" onClick={addTask}>
          Add Task
        </button>
      </form>
      <div className="list">
        <ul>
          {todos.map((dos) => {
            return (
              <li className="list-items">
                <div className="list-items-list">{dos.list}</div>
                <span>
                  <AiFillDelete
                    className="list-item-icons"
                    id="delete"
                    title="Delete"
                    onClick={()=>{onDelete(dos.id)}}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
