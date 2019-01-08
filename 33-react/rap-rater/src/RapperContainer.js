import React from "react";
import RapperCard from "./RapperCard";

const RapperContainer = props => {
  const rapArray = props.rapperList.map(rapper => (
    <RapperCard key={rapper.name} image={rapper.happyImage} />
  ));
  return <div className="rapperContainer">{rapArray}</div>;
};

export default RapperContainer;
