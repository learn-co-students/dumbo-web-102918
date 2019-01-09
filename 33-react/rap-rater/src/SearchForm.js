import React from "react";
import RapperCard from "./RapperCard";

const SearchForm = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="search rappers"
        value={props.value}
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default SearchForm;
