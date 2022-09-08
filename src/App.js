import React, { useState } from "react";
import "./App.css";
import data from "./data";
import Nested from "./Nested";
import NestedContext from "./nestedContext";

function App() {
  const [nestedData, setNestedData] = useState(data);
  return (
    <div className="App">
      {data.items.map((d, index) => (
        <Nested
          nesting={[index]}
          nestedData={nestedData}
          setNestedData={setNestedData}
          key={d.id}
        ></Nested>
      ))}
    </div>
  );
}

export default App;
