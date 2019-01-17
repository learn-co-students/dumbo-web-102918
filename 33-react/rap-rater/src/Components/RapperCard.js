import React from "react";
import { Link } from "react-router-dom";

//Smart Component: use when you need to have access to the React.Component methods/tools such as state and/or render(). Or if you need to use JS class methods such as constructor()
// class ClassName extends React.Component {
//   render() {
//      return ()
//   }
// }

//Presentational Component: use if you do not need to use any JS class methods or React.Component tools/methods
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
