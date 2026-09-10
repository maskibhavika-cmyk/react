import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export const Keys = () => {
  const [task, setTask] = useState(["apple"]);
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
  //  setTask([inputValue,...prevTasks])
  setTask((prevTasks) => [inputValue, ...prevTasks]);
    setInputValue("");
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <input
            className="todo-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="todo-btn" type="submit">Add Task</button>
        </form>
      </div>

      <div className="myUnOrdList">
        <ul>
          {task.map((cur, i) => (
            <li key={i} className="todo-item">
  <span>{cur}</span>
  
  <input 
    type="text" 
    className="note-input" 
    />
  
  <button className="delete-btn" onClick={() => setTask(task.filter(t => t !== cur))}>
    <MdDeleteForever />
  </button>
</li>
          ))}
        </ul>
      </div>
    </div>
  );
};