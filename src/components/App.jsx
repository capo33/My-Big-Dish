import React, { useState } from "react";
function App() {
  var [count, setcount] = useState([]);
  function increase() {
     setcount((prev)=>{
      return [...prev, "🍔"]
    });
    }
  function decrease() {
    setcount( (pre) => {
      return pre.filter((x,y)=>{
        return y 
      })
    })
  }
 
  return (
    <div>
      <div className="container">
      <h1 className="title">My Big Dish</h1>
      <img src="../../image/burger_man.jpg" alt="burgerMan" />
        <br />
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <h1>{count}</h1>

      </div>
    </div>
  );
}

export default App;
