
// import React from "react";
import seriesData from "../api/seriesData.json";
import {Card} from "./Card";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => {
        return (
          <Card
            key={curElem.id}
            series={curElem}
          />
        );
      })}
      </ul>
  );
};

export default NetflixSeries;
// import seriesData from "../api/seriesData.json";
// import {SeriesCard} from "./SeriesCard";

// const NetflixSeries = () => {
//   return (
    
//       <ul>
//       {seriesData.map((curElem) => (
        
//           <SeriesCard key={curElem.id} data={curElem} />
      
//       ))}
//       </ul>
  
//   );
// };

// export default NetflixSeries;
