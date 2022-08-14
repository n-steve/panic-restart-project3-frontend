import React, { useState } from "react";
import { Button, Form, Segment, Rating, Icon } from "semantic-ui-react";

function Create() {
  const [like, setLike] = useState(null);
  const [dislike, setDisLike] = useState(null);
  function handleLike() {
    console.log("Like");
  }

  function handleDisLike() {
    console.log("DisLike");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit");
  }

  function handleRating() {
    console.log("Rating");
  }
  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Category" placeholder="Category" />
          <Form.Input fluid label="Food" placeholder="Food" />
          <Form.Input fluid label="Location" placeholder="Location" />
        </Form.Group>
        <div>
          <Rating
            icon="star"
            defaultRating={5}
            maxRating={5}
            size="large"
            onSubmit={handleRating}
          />
        </div>
        <div>
          {" "}
          <Button icon onClick={handleLike}>
            <Icon name="thumbs up outline icon"></Icon>
          </Button>
          <Button icon onClick={handleDisLike}>
            <Icon name="thumbs down outline icon"></Icon>
          </Button>
        </div>
      </Form>
      <Button type="submit">Submit</Button>{" "}
    </Segment>
  );
}

export default Create;
