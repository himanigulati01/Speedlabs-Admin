import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import MyCard from "../MyCard.component";

const CreateProduct = (props) => {
  const [state, setState] = useState({});

  const submitDataHandler = (e) => {
    let item = { ...state };
    console.log(item);

    fetch("http://35.244.8.93:4000/api/admin/coupon/create", {
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
        props.history.push("/admin/coupons");
      })
      .catch((err) => alert("No Coupons Created"));
  };

  return (
    <div>
      <MyCard
        styles={{
          display: "flex",
          flexFlow: " wrap",
          justifyContent: "center",
          width: "75%",
        }}
      >
        <TextField
          id="outlined-basic"
          variant="filled"
          label="coupon_quantity"
          onChange={(e) =>
            setState({ ...state, coupon_quantity: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="coupon_code"
          onChange={(e) => setState({ ...state, coupon_code: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="on_course_id"
          onChange={(e) => setState({ ...state, on_course_id: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="description"
          onChange={(e) => setState({ ...state, description: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="label"
          onChange={(e) => setState({ ...state, label: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="discount_percent"
          onChange={(e) =>
            setState({ ...state, discount_percent: e.target.value })
          }
        />

        <TextField
          id="outlined-basic"
          variant="filled"
          label="valid_from"
          onChange={(e) => setState({ ...state, valid_from: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          fullWidth
          label="valid_till"
          onChange={(e) => setState({ ...state, valid_till: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="terms_and_conditions"
          onChange={(e) =>
            setState({ ...state, terms_and_conditions: e.target.value })
          }
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
            href="/admin/myproducts"
          >
            Cancel
          </Button>
        </div>
      </MyCard>
    </div>
  );
};
export default CreateProduct;
