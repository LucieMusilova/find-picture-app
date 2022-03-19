import React from 'react';

const Hints = ({handleFilter}) => {

  return (
    <nav className="hints">
      <ul className="hints__ul">
        <li className="hints__li" onClick={() => handleFilter("all")} value="all">All</li>
        <li className="hints__li" onClick={() => handleFilter("nature")} value="nature">Nature</li>
        <li className="hints__li" onClick={() => handleFilter("people")} value="people">People</li>
        <li className="hints__li" onClick={() => handleFilter("animals")} value="animals">Animals</li>
        <li className="hints__li" onClick={() => handleFilter("food")} value="food">Food</li>
      </ul>
    </nav>
  );
}

export default Hints;