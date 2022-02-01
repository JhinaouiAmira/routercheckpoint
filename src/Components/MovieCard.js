import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import {moviesData} from "../Fake/data"
// import { Link } from "react-router-dom";
function MovieCard({ x }) {
  let navigate=useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={x.posterUrl} />
      <Card.Body>
        <Card.Title>{x.title} </Card.Title>
        <Card.Text>{x.description}</Card.Text>
        <Card.Text>{x.rate}</Card.Text>
        <Card.Text>{x.trailer}</Card.Text>
      </Card.Body>
      {/* <Link to="/movieList/detailsCard/:description">
      </Link> */}
      <Button onClick={()=>navigate(`/movieList/detailsCard/${x.description}`)}>details</Button>
    </Card>
  );
}

export default MovieCard;
