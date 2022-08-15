import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import NewUpdate from "./newUpdate";

function Post() {
  const [addData, setAddData] = useState();
  const [food_name, setAddFood] = useState();
  const [category, setAddCat] = useState();

  const handleSubmit = () => {
    fetch("http://localhost:9292/Food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        food_name: food_name,
        category: category,
      }),
    })
      .then((r) => r.json())
      .then((data) => setAddData(data));
  };

  return (
    <Segment>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Category"
            placeholder="Category"
            value={category}
            onChange={(e) => setAddCat(e.target.value)}
          />
          <Form.Input
            fluid
            label="Food"
            placeholder="Food"
            value={food_name}
            onChange={(e) => setAddFood(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Segment>
  );
}
export default Post;
