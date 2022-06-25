import React from "react";
import { useEffect, useState } from "react";
import logo from "../images/bg-wave.svg";

function Movies() {
  //state
  const [movies, setMovies] = useState([]);

  //test
  useEffect(() => {
    getMovies();
  }, []);

  //retrieve data from api
  const getMovies = async () => {
    const api = await fetch(`https://ghibliapi.herokuapp.com/films`);
    const data = await api.json();

    //reduce movies to five
    const fiveMovies = [];
    let i = 0;
    while (i < 5) {
      fiveMovies.push(data[i]);
      i++;
    }

    //setMovies(data);
    setMovies(fiveMovies); //limits to 5 films
    console.log(data); //checks
    console.log(fiveMovies); //checks

    //navigate to individual movie page
    // let navigate = useNavigate();
    // const singleMovie = () =>{
    //     let path = movie.id;
    //     navigate('/Movie/'+ path);
  };

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="movie-details">
            <img src={logo} className="bg-image" />
            <img
              className="img-container"
              src={movie.image}
              alt={movie.title}
            />
            <div className="movie-info">
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
              <br></br>
              <button>SEE MORE</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
