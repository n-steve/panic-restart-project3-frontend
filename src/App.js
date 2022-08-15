import "./App.css";
import React from "react";
import Update from "./Update";
import Post from "./Post";
import NewUpdate from "./newUpdate";
// import Create from "./Create";
// import Read from "./Read";
// import Create from "./Create";
function App() {
  return (
    <div className="App">
      <Update />
      <Post />
    </div>
  );
}

export default App;

/* <Read />
<Create /> */

// const [food, setFood] = useState();
// const [category, setCategory] = useState();
// const [rating, setRating] = useState();

// useEffect(() => {
//   fetch("http://localhost:9292/Food")
//     .then((r) => r.json())
//     .then((data) => setFood(data));
// }, []);

// useEffect(() => {
//   fetch("http://localhost:9292/Category")
//     .then((r) => r.json())
//     .then((data) => setCategory(data));
// }, []);

// useEffect(() => {
//   fetch("http://localhost:9292/Rating")
//     .then((r) => r.json())
//     .then((data) => setRating(data));
// }, []);

// console.log(food, category, rating);
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
