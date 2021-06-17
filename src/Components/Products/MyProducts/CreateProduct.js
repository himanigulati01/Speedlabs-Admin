import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import MyCard from "../../MyCard.component";

const CreateProduct = (props) => {
  const [state, setState] = useState({});

  const submitDataHandler = (e) => {
    let item = { ...state };
    console.log(item);

    fetch("http://35.244.8.93:4000/api/admin/product/createproduct", {
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
        props.history.push("/admin/myproducts");
      })
      .catch((err) => alert("No Product Created"));
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
          label="Image Name"
          onChange={(e) => setState({ ...state, image_name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Image Url"
          onChange={(e) => setState({ ...state, image_url: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Product Name"
          onChange={(e) => setState({ ...state, product_name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Creater Name"
          onChange={(e) => setState({ ...state, creator_name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Category"
          onChange={(e) => setState({ ...state, category: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Label"
          onChange={(e) => setState({ ...state, label: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Status"
          onChange={(e) => setState({ ...state, status: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Total Students"
          onChange={(e) => setState({ ...state, tot_students: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          fullWidth
          label="Description"
          onChange={(e) => setState({ ...state, description: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="you_will_learn"
          onChange={(e) =>
            setState({ ...state, you_will_learn: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="this_includes"
          onChange={(e) =>
            setState({ ...state, this_includes: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="pre_requisites"
          onChange={(e) =>
            setState({ ...state, pre_requisites: e.target.value })
          }
        />
        <TextField
          id="standard-select-currency"
          variant="filled"
          label="Currency"
          onChange={(e) => setState({ ...state, set_currency: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          variant="filled"
          label="Price"
          onChange={(e) => setState({ ...state, price: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Course Rating"
          onChange={(e) =>
            setState({ ...state, course_rating: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Total Rating"
          onChange={(e) => setState({ ...state, tot_ratings: e.target.value })}
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
            onClick={(event) => submitDataHandler(event)}
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
