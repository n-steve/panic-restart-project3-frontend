import React, { useState } from "react";
import { Button } from "semantic-ui-react";
function NewUpdate() {
  const [update, setUpdate] = useState();
  // const [newCategory, setNewCategory] = useState();
  // const [newFoodName, setNewFoodName] = useState();
  const handleUpdate = () => {
    fetch("http://localhost:9292/Food/${:id}", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application.json",
      },
      body: JSON.stringify({
        category: newCategory,
        food_name: newFoodName,
      }),
    })
      .then((r) => r.json())
      .then((data) => setUpdate(data));
  };

  // function updateData(){
  //   setNewCategory(...update)
  // }

  return (
    <div>
      <Button onClick={(e) => handleUpdate(e.target.value)} value={update}>
        Edit
      </Button>
    </div>
  );
}

export default NewUpdate;
