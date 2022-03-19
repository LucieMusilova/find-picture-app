import React from "react";

const Pictures = ({ sort }) => {
  return (
    <div className="pictures">
      {sort.map((item) => 
        <div className="pictures__item" key={item.id}>
          <img className="pictures__img" src={item.img} alt={item.title} />
        </div>
      )}
    </div>
  );
};

export default Pictures;
