import { useState, } from "react";
import "./Todo.css";
// import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";



export const Todo = () => {

    // const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState(() =>getLocalStorageTodoData())

    
    
   
    // const handleInputChange = (value) => {
    //     setInputValue(value);
    // };

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} =inputValue;

        // to check if the input field is empty or not
       
        if (!content) return;
        // to check the  if data is already existing or not
        // if(task.includes(inputValue)) return;

        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content === content
        );
        
        if(ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask,{id, content, checked} ,

        ]);
       
    };
    // todo add data to localStorage
    setLocalStorageTodoData(task);

    // const handleDeleteTodo = (valueToDelete) => {
    //     setTask(task.filter((curTask) => curTask !== valueToDelete));
    // };

    // todo Date and Time
   
// todo handleDeleteTodo function
const handleDeleteTodo = (value) =>{
    
        const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask) ;  

}
// todo handleClearTodoData functionality
const handleClearTodoData =() => {
    setTask([]);
}
// todo handleCheckTodo functionality
const handleCheckTodo = (content) =>{
const updateTask = task.map((curTask) =>{
    if(curTask.content === content){
return{...cutTask, checked: ! curTask.checked};
    } else{
        return curTask;
    }
})
setTask(updateTask);
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
                    {task.map((curTask) =>{
                        return(
                            <TodoList key={curTask.id}data={curTask.content}
                            checked={curTask.checked}
                             onHandleDeleteTodo={handleDeleteTodo}
                             onHandleCheckTodo = {handleCheckTodo}
                             />

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