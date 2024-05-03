import React, { useState } from "react";

const index = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomHexColor = () => {
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  };

  const handleCreateRandomRGBColor = () => {};

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default index;
