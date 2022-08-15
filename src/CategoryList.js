// import React, { useState, useEffect } from "react";
// import { Table } from "semantic-ui-react";

// function CategoryList() {
//   const [category, setCategory] = useState();

//   useEffect(() => {
//     fetch("http://localhost:9292/Category")
//       .then((r) => r.json())
//       .then((data) => {
//         setCategory(data);
//       });
//   }, []);

//   const displayCategory = category.map((i) => (
//     <Table.Row key={i.id} category={i.category}>
//       <Table.Cell>{i.category}</Table.Cell>
//     </Table.Row>
//   ));

//   return <div>{displayCategory}</div>;
// }
// export default CategoryList;
