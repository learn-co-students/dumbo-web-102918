import React from "react";
import { Link } from "react-router-dom";

const RapperCard = props => {
  return (
    <div>
      <Link to={`/rappers/${props.rapper.name}`}>
        <img
          src={
            props.rapper.rating > 0
              ? props.rapper.happyImage
              : props.rapper.sadImage
          }
          alt=""
          className="rapperImage"
        />
      </Link>
      <h3>{props.rapper.rating}</h3>
      <button onClick={() => props.clickHandler(props.rapper)}>Upvote</button>
      <button>Downvote</button>
      <button onClick={() => props.deleteHandler(props.rapper)}>Delete</button>
    </div>
  );
};

export default RapperCard;
