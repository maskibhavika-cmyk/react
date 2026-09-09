import { useState, } from "react";
import "./Todo.css";
// import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
    // const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState(["apple", "mango", "orange"]);
   
    // const handleInputChange = (value) => {
    //     setInputValue(value);
    // };

    const handleFormSubmit = (inputValue) => {
       
        if (!inputValue) return;
        if(task.includes(inputValue)) return;
        setTask((prevTask) => [...prevTask,inputValue ]);
       
    };

    // const handleDeleteTodo = (valueToDelete) => {
    //     setTask(task.filter((curTask) => curTask !== valueToDelete));
    // };

    // todo Date and Time
   
// todo handleDeleteTodo function
const handleDeleteTodo = (value) =>{
    console.log(task);
    console.log(value);
        const updatedTask = task.filter((curTask) => curTask ===! value);
    setTask(updatedTask) ;  

}
// todo handleClearTodoData functionality
const handleClearTodoData =() => {
    setTask([]);
}
        return (   
        <div className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate/>
               
            </header>
            <TodoForm onAddTodo={handleFormSubmit}/>
{/* 
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
             className="todo-input"
             autoComplete="off"
              value={inputValue}
      onChange={(event) =>
               handleInputChange(event.target.value)
                   }
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section> */}

            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) =>{
                        return(
                            <TodoList key={index}data={curTask} onHandleDeleteTodo={handleDeleteTodo}/>
                        )
                        
                  
                })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
            </section>
        </div>
        );
};