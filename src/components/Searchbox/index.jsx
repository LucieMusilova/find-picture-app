import React from "react";

const Searchbox = ({handleSearch}) => {


  return (
    <div className="find">
      <label className="find__label"> </label>

      <input
        className="find__text"
        placeholder="What are you looking for? "
        type="text"
        onChange={(event) => handleSearch(event)}
      />
    </div>
  );
};

export default Searchbox;
