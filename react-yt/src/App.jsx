// import React from 'react'
// import Header from './components/Header'
// import Section from './components/Section'
// import Footer from './components/Footer'

// const App = () => {
//   const data = useContext(DataContext)
//   console.log(data)
//   return (
//     <div>
//       <h1>This is App.js</h1>
//       <Header />
//       <Section />
//       <Footer />
//     </div>
//   )
// }

// export default App

// import React from "react";
// import NetflixSeries from "./components/NetflixSeries";

// const App = () => {
//   return (
//     <div>
//       <NetflixSeries />
//     </div>
//   );
// };

// export default App;


// import NetflixSeries from "./components/NetflixSeries";
// // import "./components/Netflix.css";
// import "./components/Netflix.module.css";
//  export const App = () => {
//   return (
//   <section className="container">
//     <h1 className="card-heading">List of Best Netflix Series</h1>
//     <NetflixSeries />
//   </section>
//   );
// };

// export default App;



// import { EventHandling } from "./components/EventHandling";
// import "./components/EventHandling";
// import "./components/Netflix.module.css";
// // import {EventProps} from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// export const App = () => {
//   return (
//     <section className="container">
//       {/* <h1 className="card-heading">
//         List of Best Netflix Series
//       </h1>

//       <NetflixSeries />; */}
//       {/* <EventHandling/> */}
//       {/* <EventProps /> */}
// <EventPropagation/>
//     </section>
//   );
// };

// export default App;

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About';
// import Home from './pages/Home';

// import Contact from './pages/Contact';

// import Product from './pages/Product';
// import Header from './components/Header';

//  const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Routes>
//         <Route path='/home' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//          <Route path='/product' element={<Product />} />

//       </Routes>
    
//     </div>
//   )
// }

// export default App

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([])

//   const getData = async () => {
//   // const response =  await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
// const response = await axios.get('https://picsum.photos/v2/list')
// setData(response.data)
// // console.log(data[0].download_url)

//   }

//   useEffect(() => {
//     getData()
//   }, [])
  

//   return (
//     <div className='p-10 '>
// <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale'>Get Data</button>
//    <div className='p-5  mt-5 bg-pink-950'>
//     {data.map(function(elem,idx){
//     return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-6 py-3 rounded mb-3'>
// <img className='h-40' src={elem.download_url} alt="" />
// <h1>{}elem.author</h1>
// </div>
//    })}
//    </div>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   const users = [
//   {
//     "name": "Rahul Sharma",
//     "city": "Bhopal",
//     "age": 24,
//     "profession": "Web Developer",
//     "profilePhoto": "https://i.pravatar.cc/150?img=1"
//   },
//   {
//     "name": "Priya Verma",
//     "city": "Indore",
//     "age": 22,
//     "profession": "UI/UX Designer",
//     "profilePhoto": "https://i.pravatar.cc/150?img=2"
//   },
//   {
//     "name": "Aman Khan",
//     "city": "Mumbai",
//     "age": 27,
//     "profession": "Software Engineer",
//     "profilePhoto": "https://i.pravatar.cc/150?img=3"
//   },
//   {
//     "name": "Sneha Patel",
//     "city": "Ahmedabad",
//     "age": 25,
//     "profession": "Data Analyst",
//     "profilePhoto": "https://i.pravatar.cc/150?img=4"
//   },
//   {
//     "name": "Vikram Singh",
//     "city": "Delhi",
//     "age": 29,
//     "profession": "Product Manager",
//     "profilePhoto": "https://i.pravatar.cc/150?img=5"
//   }
// ] 

// // users.map(function(){
// //   return "Hey"
// // })

//   return (
//     <div>
//       <div className='p-10'>
//         {users.map(function(elem){
//           return <Card username={elem.name} age={elem.age} prof={elem.profession} city={elem.city} photo={elem.profilePhoto} />
//         })}
// {/* <Card user = "bhavika" age = '20' city = "bhopal" /> */}

//       </div>
//       </div>
//   )
// }

// export default App


// // import React from 'react'
// // import Card from './components/Card'
// // import Header from './components/Header';
// // import Navbar from './components/Navbar';
// // import Footer from './components/Footer';


// // const App = () => {
// //   const num = 10
// //   return (
// //     <div>
// //       <Card a = {Bhavika} />
// //     </div>
// //   )
// // }
// //     <>
// //     <Navbar />
// //     <Footer />
// //     <Header />
    
// //     <nav className='bg-green-500 flex  py-5 px-10 items-center justify-between'>
  
// //     <h2 className='text-2xl'>sheryians</h2>

// //     <div className='flex gap-8 items-center'>

// //     <h4 className='text-xl'>About</h4>
// //     <h4 className='text-xl'>Contact</h4>
// //     <h4 className='text-xl'>Services</h4>
// //     <h4 className='text-xl'>Your Account</h4>
// //     </div>
// //     </nav>
// //     </>
// //   )
// // }

// // export default App

// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


import { ToggleSwitch } from "../../projects/ToggleSwitch/ToggleSwitch";
import "./components/EV.css";
// import { LiftingState } from "./components/LiftStateUp";
// import { State } from "./components/hooks/State";

export const App = () => {
  return (
    <section classsName="container">
    {/* <LiftingState /> */}
      {/* <State /> */}
      <ToggleSwitch />
      {/* // <Sibling /> */}
     </section>
  )
}
export default App;
// export  function Sibling() {
//         console.log("Sibling Component rendered");
//         return(
//             <div className="main-div">
//                <h2>Sibling Component- {count}</h2>
     
//             </div>
//         );
//     }