import React, { useState } from "react";
import data from "../data";

//single selection
//multiple selection

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(item.id)}
                className="title"
              >
                <h3> {item.name}</h3>
                <span>+</span>
              </div>
              {selected == item.id ? 
              
              <div className="content"> {item.email} <br /> {item.phone}</div>
              :null}
            </div>
            
          ))
        ) : (
          <div>
            <h1>no data found in this folder !!!!</h1>
            <p>please try agian later</p>
            <button>ok</button>
            <button>Retry</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
