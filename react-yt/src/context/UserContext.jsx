// import React, { createContext } from 'react'

// export const DataContext = createContext()

// const UserContext = ({ children }) => {

//   const username = "bhavika"

//   return (
//     <DataContext.Provider value={username}>
//       {children}
//     </DataContext.Provider>
//   )
// }

// export default UserContext
import { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {

  const username = "bhavika";

  return (
    <DataContext.Provider value={username}>
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;