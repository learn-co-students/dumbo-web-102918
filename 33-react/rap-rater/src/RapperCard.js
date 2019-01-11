import React from "react";

//Smart Component: use when you need to have access to the React.Component methods/tools such as state and/or render(). Or if you need to use JS class methods such as constructor()
// class ClassName extends React.Component {
//   render() {
//      return ()
//   }
// }

//Presentational Component: use if you do not need to use any JS class methods or React.Component tools/methods
class RapperCard extends React.Component {
  // componentDidMount() {
  //   console.log("Rapper Card Did Mount");
  // }

  componentWillUnmount() {
    alert("Et tu Brute");
  }
  render() {
    return (
      <div>
        <img
          src={
            this.props.rapper.rating > 0
              ? this.props.rapper.happyImage
              : this.props.rapper.sadImage
          }
          alt=""
          className="rapperImage"
        />
        <h3>{this.props.rapper.rating}</h3>
        <button onClick={() => this.props.clickHandler(this.props.rapper)}>
          Upvote
        </button>
        <button>Downvote</button>
        <button onClick={() => this.props.deleteHandler(this.props.rapper)}>
          Delete
        </button>
      </div>
    );
  }
}

export default RapperCard;
