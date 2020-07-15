import React from "react";
import RapperCard from "./RapperCard";

const RapperContainer = props => {
  const rapArray = props.rapperList.map(rapper => (
    <RapperCard
      key={rapper.name}
      rapper={rapper}
      clickHandler={props.clickHandler}
    />
  ));
  return <div className="rapperContainer">{rapArray}</div>;
};

export default RapperContainer;
