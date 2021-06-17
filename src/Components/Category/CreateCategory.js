import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import MyCard from "../MyCard.component";

const CreateProduct = (props) => {
  const [state, setState] = useState({});

  const submitDataHandler = (e) => {
    let item = { ...state };
    console.log(item);

    fetch("http://35.244.8.93:4000/api/admin/category/create", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((json) => {
        console.log(json);
        props.history.push("/admin/category");
      })
      .catch((err) => alert("No Category Created"));
  };

  return (
    <div>
      <MyCard
        styles={{
          display: "flex",
          flexFlow: " wrap",
          justifyContent: "center",
          width: "75%",
          marginTop: "25px",
        }}
      >
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Name"
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          variant="filled"
          label="Parent ID"
          onChange={(e) => setState({ ...state, parent_id: e.target.value })}
        />

        <div style={{ margin: "34px", display: "flex" }}>
          <Button
            style={{ width: "inherit", margin: "15px" }}
            variant="contained"
            onClick={(event) => submitDataHandler(event)}
            color="primary"
          >
            Submit
          </Button>
          <Button
            style={{ width: "inherit", margin: "15px" }}
            variant="contained"
            color="default"
            href="/admin/category"
          >
            Cancel
          </Button>
        </div>
      </MyCard>
    </div>
  );
};
export default CreateProduct;
