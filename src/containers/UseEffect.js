import React, { useEffect, useState } from "react";

const UseEffect = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("useEffect home", count); // whenever the state or props is changes
  });

  useEffect(() => {
    console.warn("use once ", count); // here it will be render for mounting, whenever the state or props is changes
  }, []);

  useEffect(() => {
    console.warn("use effect for count ", count); // whenever the count value changes
  }, [count]);

  return (
    <div style={{ marginTop: 100 }}>
      <h2>Use Effect</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Update Count
      </button>
      <h4>Count : {count}</h4>
    </div>
  );
};

export default UseEffect;
