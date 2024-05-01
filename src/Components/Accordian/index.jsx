import React, { useState } from "react";
import data from "../data";

//single selection
//multiple selection

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultiSeection = (getCurrentId) => {

  }

  return (
    <div className="wrapper">
      <button
        style={{ fontWeight: "bolder" }}
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Enable Multi selecton
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="item"
              style={{ backgroundColor: "yellowgreen", fontWeight: "bolder" }}
            >
              <div
                onClick={() => handleSingleSelection(item.id)}
                className="title"
              >
                <h3> {item.name}</h3>
                <span>+</span>
              </div>
              {selected == item.id ? (
                <div className="content">
                  {" "}
                  {item.email} <br /> {item.phone}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>
            <h1>No data found in this folder !!!!</h1>
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
