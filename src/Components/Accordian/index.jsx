import React, { useState } from "react";
import data from "../data";

//single selection
//multiple selection

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  //for store multile id s
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
    console.log(findIndexOfCurrentId, multiple);
  };

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
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3> {item.name}</h3>
                <span>+</span>
              </div>
              {selected == item.id || multiple.indexOf(item.id) !== -1 ? (
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
