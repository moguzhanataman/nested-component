import React, { useContext } from "react";
import "./Nested.css";
import NestedContext from "./nestedContext";

export default function Nested({ nesting, nestedData, setNestedData }) {
  let currentData = nestedData;
  for (let index = 0; index < nesting.length; index++) {
    currentData = currentData.items[nesting[index]];
    console.log({ currentData });
  }



  // if single element
  let nestedElements;
  if (currentData?.items) {
    const items = currentData.items;
    nestedElements = items.map((item, index) => {
      const newNesting = [...nesting, index];
      return (
        <Nested
          nesting={newNesting}
          nestedData={nestedData}
          setNestedData={setNestedData}
          key={item.id}
        ></Nested>
      );
    });
  }

  return (
    <div className="nested">
      <pre>
        {currentData.id}
        {nestedElements && nestedElements}
        <button
          onClick={() => {
            console.log("remove", currentData, currentData.id);
            // removeItem(nestedData, currentData.id);
          }}
        >
          Remove
        </button>
      </pre>
    </div>
  );

  // if has multiple items
}
