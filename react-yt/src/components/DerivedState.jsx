
// import { useState} from "react";
// const users = [
//     { name:"Alice", age: 25},
//     {name: "Bob", age: 30},
//     {name: "Charlie", ager:35},
//     {name: "Angles", age: 45},
// ];

// export const DerivedState = () => {
//     const [users, setUsers] = useState([ {name:"Alice", age: 25},
//     {name: "Bob", age: 30},
//     {name: "Charlie", ager:35},
//     {name: "Angles", age: 45},]);
//     return(
//         <div className="main-div">
//             <h1>User List</h1>
//             <ul>
//                 {users.map((curElem, index) => {
//                     return(
                    
//                         <li key={index}>
//                             {curElem.name} - {curElem.age} year old
//                         </li>

//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }


import { useState} from "react";
export const DerivedState = () => {
    const [users, setUsers] = useState([ {name:"Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", ager:35},
]);


// Derived state: count of users
console.log(users);
const userCount = users.length;

const averageAge = users.reduce((accum ,curElem)=>accum +curElem.age, 0 ) / userCount;
//Derived state:average age of users
    return(
        <div  className="main-div">
<h1>Users List</h1>
<ul>
    {users.map((user, index) =>(
    <li key={index}>
         {users.name} - {users.age} years old
    </li>
    ))
    }
</ul>
<p>Total Users: {userCount}</p>
<p>Average Age: {averageAge}</p>

        </div>
)
    }