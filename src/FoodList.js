// import React, { useEffect, useState } from "react";
// import { Table } from "semantic-ui-react";

// function FoodList() {
//   const [food, setFood] = useState();

//   useEffect(() => {
//     fetch("http://localhost:9292/Food")
//       .then((r) => r.json())
//       .then((data) => {
//         setFood(data);
//       });
//   }, []);

//   const displayFood = food.map((i) => (
//     <Table.Row key={i.id} food={i.food_name} location={i.location}>
//       <Table.Cell>{i.food_name}</Table.Cell>
//     </Table.Row>
//   ));
//   return <div>{displayFood}</div>;
// }

// export default FoodList;
