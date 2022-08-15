import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

function Update() {
  const [getData, setGetData] = useState([]);
  //   const [deleteData, setDeleteData] = useState();
  useEffect(() => {
    fetch("http://localhost:9292/Food")
      .then((r) => r.json())
      .then((data) => setGetData(data));
  }, []);

  //   const handleDelete = () => {
  //     fetch("http://localhost:9292/Food/${id}", {
  //       method: "DELETE",
  //     })
  //       .then((r) => r.json())
  //       .then((data) => setDeleteData(data));
  //   };

  //   const deletePost = (deleteP) => {
  //     const remove = getData.filter((i) => i.id !== deleteP);
  //     setDeleteData(remove);
  //   };

  const displayFood = getData.map((i) => (
    <Table
      widths="equal"
      textAlign="center"
      verticalAlign="middle"
      singleLine
      key={i.id}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Food</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{i.category}</Table.Cell>
          <Table.Cell>{i.food_name}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ));

  return <div>{displayFood}</div>;
}

export default Update;
