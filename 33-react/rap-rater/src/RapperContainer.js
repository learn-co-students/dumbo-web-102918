import React from "react";
import RapperCard from "./RapperCard";

class RapperContainer extends React.Component {
  // componentDidUpdate(prevProps) {
  //   alert("Change is coming");
  // }

  render() {
    console.log(this.props.deleteHandler);
    const rapArray = this.props.rapperList.map(rapper => (
      <RapperCard
        key={rapper.name}
        rapper={rapper}
        clickHandler={this.props.clickHandler}
        deleteHandler={this.props.deleteHandler}
      />
    ));
    return <div className="rapperContainer">{rapArray}</div>;
  }
}

export default RapperContainer;
