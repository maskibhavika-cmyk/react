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
const Card = ({ series }) => {
  return (
    <div className="card">

      <img
        src={series.img_url}
        alt={series.name}
        width="200"
      />

      <h2>{series.name}</h2>

      <p>Rating: {series.rating}</p>

      <p>{series.description}</p>

      <p>
        Genre: {series.genre.join(", ")}
      </p>

    </div>
  );
};

export default Card;