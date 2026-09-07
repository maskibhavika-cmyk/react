
import React from "react";

export const Card = ({ series }) => {
  return (
    <li className="card">

      <img
        src={series.img_url}
        alt={series.name}
        className="card-img"
      />

      <div className="card-content">

        <h2>
          Name: {series.name}
        </h2>

        <p className="rating">
          Rating: {series.rating}
        </p>

        <p className="summary">
  <strong>Summary:</strong>{" "}
  {series.description}
</p>

        <p>
          <strong className="label">
            Genre:
          </strong>{" "}
          {Array.isArray(series.genre)
            ? series.genre.join(", ")
            : series.genre}
        </p>

        <p>
          <strong className="label">
            Cast:
          </strong>{" "}
          {Array.isArray(series.cast)
            ? series.cast.join(", ")
            : series.cast}
        </p>

        <a
          href={series.watch_url}
          target="_blank"
          rel="noopener noreferrer"
          className="watch-btn"
        >
          Watch Now
        </a>

      </div>
    </li>
  );
};
// import React from 'react'

// export const Card = ({ series }) => {
//   return (
//     <div className="bg-gray-800 rounded-lg p-5">
      
//       <img
//         src={series.img_url}
//         alt={series.name}
//         className="w-full h-64 object-cover rounded-lg"
//       />

//       <h2 className="text-2xl font-bold mt-4">
//         {series.name}
//       </h2>

//       <p className="mt-2">
//         {series.description}
//       </p>

//       <a
//   href={series.watch_url}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-block bg-red-600 px-4 py-2 rounded mt-4"
// >
//   Watch Now
// </a>

//     </div>
//   )
// }
// const Card = ({ series }) => {
//   return (
//     <div className="card">

//       <img
//         src={series.img_url}
//         alt={series.name}
//         width="200"
//       />

//       <h2>{series.name}</h2>

//       <p>Rating: {series.rating}</p>

//       <p>{series.description}</p>

//       <p>
//         Genre: {series.genre.join(", ")}
//       </p>

//     </div>
//   );
// };

// export default Card;
// import React from 'react'

// const Card = (props) => {

//     console.log(props.photo)
//   return (
//     <div className='bg-white text-black inline-block p-6 text-center rounded'>
//         <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.photo} alt=""></img>
// <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
// <h4 className ='text-blue-400'>{props.prof}</h4>
// <h2>{props.city} ,{props.age}</h2>
// <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>

//     </div>
//   )
// }

// export default Card
