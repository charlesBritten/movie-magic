import React from "react";
import { useEffect, useState } from "react";

function Movie() {
  //getting params
  let params = useParams();
  const [details, setDetails] = usesState([]);

  const movieInfo = () => {
    const movieDetails = params.id;
    setDetails(movieDetails);
  };

  useEffect(() => {
    movieInfo();
  }, [params]);

  }

  return <div>{details.title}</div>;
}

export default Movie;
