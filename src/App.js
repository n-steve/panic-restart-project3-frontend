import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [food, setFood] = useState();
  const [category, setCategory] = useState();
  const [rating, setRating] = useState();

  useEffect(() => {
    fetch("http://localhost:9292/Food")
      .then((r) => r.json())
      .then((data) => setFood(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/Category")
      .then((r) => r.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/Rating")
      .then((r) => r.json())
      .then((data) => setRating(data));
  }, []);

  console.log(food, category, rating);
  // const displayCategory = category.map((i) => (
  //   <div key={i.id} category={i.category}></div>
  // ));

  // const displayFood = food.map((i) => (
  //   <div class="ui cards" key={i.id}>
  //     <div class="header"> {displayCategory}</div>
  //     <div class="description">
  //       Name:{i.food_name}
  //       Location:{i.location}
  //     </div>
  //     <div class="extra content">Show Like Button and Rating w/ Stars here</div>
  //   </div>
  // ));

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
      </header>
    </div>
  );
}

export default App;
