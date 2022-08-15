// import React, { useState, useEffect } from "react";
// import { Table, Button, Rating, Icon } from "semantic-ui-react";

// function Read() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:9292/Food")
//       .then((r) => r.json())
//       .then((database) => {
//         const damp = database.map((i) => i);

//         setData(damp);
//       });
//   }, []);
//   console.log(data);
//   const displayEverything = data.map((i) => (
//     <Table.Row key={i.id}>
//       <Table.Cell>{i.food_name}</Table.Cell>
//       <Table.Cell>{i.location}</Table.Cell>
//       <Table.Cell>
//         <Rating
//           icon="star"
//           defaultRating={i.rate.rating}
//           maxRating={i.rate.rating}
//         />
//       </Table.Cell>
//       <Table.Cell>
//         {i.rate.like === true ? (
//           <Icon name="thumbs up outline" />
//         ) : (
//           <Icon name="thumbs down outline" />
//         )}
//       </Table.Cell>
//       <Table.Cell>
//         <Button>Edit</Button>
//         <Button>Delete</Button>
//       </Table.Cell>
//     </Table.Row>
//   ));

//   return (
//     <Table widths="equal">
//       <Table.Header>
//         <Table.Row>
//           <Table.HeaderCell>Food</Table.HeaderCell>
//           <Table.HeaderCell>Location</Table.HeaderCell>
//           <Table.HeaderCell>Rating</Table.HeaderCell>
//           <Table.HeaderCell>Like</Table.HeaderCell>
//           <Table.HeaderCell>Edit</Table.HeaderCell>
//         </Table.Row>
//       </Table.Header>
//       <Table.Body>{displayEverything}</Table.Body>
//     </Table>
//   );
// }

// export default Read;
