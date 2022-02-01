import React from "react";
import { Link, useParams } from "react-router-dom";
import { moviesData } from "../Fake/data";
import { Button } from "semantic-ui-react";
function DetailsCard() {
  let params = useParams();

  let film = moviesData.find((el) => el.description == params.description);

  console.log(params);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Details Of movie : {film.title} </h2>
      <iframe width="800" height="500" src={film.trailer}></iframe>
      <p>{params.description} </p>
      <Link to="/">
        <Button content="Back" icon="left arrow" labelPosition="left" />
      </Link>
    </div>
  );
}

export default DetailsCard;
