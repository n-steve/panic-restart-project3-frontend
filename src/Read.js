import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
function Read() {
  const [category, setCategory] = useState("");
  const [food, setFood] = useState("");

  const [rating, setRating] = useState(0);
  const [like, setLike] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/Category")
      .then((r) => r.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/Food")
      .then((r) => r.json())
      .then((data) => {
        setFood(data);
      });
  }, []);

  const displayCategory = category.map((i) => (
    <Table.Row key={i.id} category={i.category}>
      <Table.Cell>{i.category}</Table.Cell>
      <Table.Cell>{i.category}</Table.Cell>
      <Table.Cell>{i.category}</Table.Cell>
      <Table.Cell>{i.category}</Table.Cell>
      <Table.Cell>{i.category}</Table.Cell>
    </Table.Row>
  ));

  //   const displayFood = food.map((i) => (
  //     <Table.Body>
  //       <Table.Row>
  //         <Table.Cell>{i.food_name}</Table.Cell>
  //       </Table.Row>
  //     </Table.Body>
  //   ));
  //   console.log(displayFood);
  return (
    <Table>
      {" "}
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{displayCategory}</Table.Body>
    </Table>
  );
}

export default Read;
