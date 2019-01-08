import React from "react";

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
      <img src={props.image} alt="" className="rapperImage" />
      <button>Upvote</button>
      <button>Downvote</button>
    </div>
  );
};

export default RapperCard;
