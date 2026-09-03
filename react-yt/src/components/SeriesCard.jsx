

export const SeriesCard = (props) => {
  console.log(props);
  const {id, img_url, name, rating, description, cast, genre, watch_url} = props.data;
    return(
  <li key={props}>
  

              {/* <div className="text-white p-10"> */}

                <div>
                  <img
                    src={img_url}
                    alt={name}
                    width="40%"
                    height="40%"
                  />
                </div>

                <h2>
                  Name: {name}
                </h2>

                <h3>
                  Rating: {rating}
                </h3>

                <p>
                  Summary: {description}
                </p>

                <p>
                  Genre: {genre}
                </p>

                <p>
                  Cast: {watch_url}
                </p>

                <a
                  href={watch_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Watch Now</button>
                </a>

              {/* </div> */}

            </li>
          );
        }