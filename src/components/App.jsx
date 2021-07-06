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
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3dd18b8e-ef41-4f32-b53c-78e8988161bb/dde2gh3-a6f95c2b-b160-456b-8a3f-dd516d056c5b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkZDE4YjhlLWVmNDEtNGYzMi1iNTNjLTc4ZTg5ODgxNjFiYlwvZGRlMmdoMy1hNmY5NWMyYi1iMTYwLTQ1NmItOGEzZi1kZDUxNmQwNTZjNWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GyodJWs3AQ8bVdI01WC5VuWj4apKOv9xnjuFZk2l5Y0" alt="burgerMan" />
        <br />
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <h1>{count}</h1>

      </div>
    </div>
  );
}

export default App;
