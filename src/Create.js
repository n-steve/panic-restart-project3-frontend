// import React, { useState } from "react";
// import { Button, Form, Segment, Rating, Icon } from "semantic-ui-react";

// function Create() {
//   // const [storeData, setStoreData] = useState();
//   const [addData, setAddData] = useState();
//   const [category, setCategory] = useState(1);
//   const [food, setFood] = useState();
//   const [location, setLocation] = useState();
//   const [rating, setRating] = useState(0);
//   const [like, setLike] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:9292/Food", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         category: category,
//         food_name: food,
//         location: location,
//         rating: rating,
//         like: like,
//       }),
//     })
//       .then((r) => r.json())
//       .then((data) => setAddData(data));
//   };
//   console.log(addData);
//   return (
//     <Segment>
//       <Form>
//         <Form.Group widths="equal">
//           <Form.Input
//             fluid
//             label="Category"
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />

//           <Form.Input
//             fluid
//             label="Food"
//             placeholder="Food"
//             value={food}
//             onChange={(e) => setFood(e.target.value)}
//           />

//           <Form.Input
//             fluid
//             label="Location"
//             placeholder="Location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </Form.Group>
//         <div>
//           <Rating
//             icon="star"
//             onClick={(e) => setRating(e.target.value)}
//             value={rating}
//             defaultRating={0}
//             maxRating={5}
//             size="large"
//           />
//         </div>
//         <div>
//           <Button.Group>
//             <Button icon>
//               <Icon
//                 name="thumbs up outline"
//                 size="large"
//                 onClick={(e) => setLike(true)}
//                 value={like}
//               />
//             </Button>
//             <Button.Or />
//             <Button icon>
//               <Icon
//                 name="thumbs down outline"
//                 size="large"
//                 onClick={(e) => setLike(false)}
//                 value={like}
//               />
//             </Button>
//           </Button.Group>
//         </div>
//         <Button type="submit" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </Form>
//     </Segment>
//   );
// }

// export default Create;
