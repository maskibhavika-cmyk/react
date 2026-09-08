// import { useState } from "react";
// import "./Todo.css";

// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("");
//     const [task, setTask] = useState([]);

//     const handleInputChange = (value) => {
//         setInputValue(value);
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if (!inputValue) return;

//         setTask((prev) => [...prev, inputValue]);

//         setInputValue("");
//     };

//     return (
//         <div className="todo-container">

//             <header>
//                 <h1>Todo List</h1>
//             </header>

//             <section className="form">
//                 <form onSubmit={handleFormSubmit}>

//                     <div>
//                         <input
//                             type="text"
//                             className="todo-input"
//                             autoComplete="off"
//                             value={inputValue}
//                             onChange={(event) =>
//                                 handleInputChange(event.target.value)
//                             }
//                         />
//                     </div>

//                     <div>
//                         <button
//                             type="submit"
//                             className="todo-btn"
//                         >
//                             Add Task
//                         </button>
//                     </div>

//                 </form>
//             </section>

//         </div>
//     );
// };

import { useState, useEffect } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState(["apple", "mango", "orange"]);
const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;
        if(task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        // setTask((prev) => [...prev, inputValue]);
        setTask((prevTask) => [...prevTask,inputValue ]);
    
        setInputValue("");
    };
    // console.log("Hey")
// todo DAte and Time
useEffect(() => {
    const interval = setInterval(() =>{
  const now = new Date();
    const formattedDate = now.toLocaleDateString();
const formattedTime = now.toLocaleTimeString();

    setDateTime(`${formattedDate}-${formattedTime }`);
} , 1000);
return() => clearInterval(interval);
}, [])

    return (
        <div className="todo-container">

            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>

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
                        <button
                            type="submit"
                            className="todo-btn"
                        >
                            Add Task
                        </button>
                    </div>

                </form>
            </section>
<section className ="myUnOrdList">
    <ul>
        {
            task.map((curTask, index) =>{
           return <li key={index} className="todo-item">
          <span>{curTask}</span>
          <button className="check-btn"><MdCheck /></button>
          <button className="delete-btn"><MdDeleteForever /></button>
           </li>
        })
    }
    </ul>
</section>
        </div>
    );
};