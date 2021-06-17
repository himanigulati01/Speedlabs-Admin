import { Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ShowCategory from "./ShowCategory.component";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);

  let fetchCategories = () => {
    fetch("http://35.244.8.93:4000/api/admin/category/allcategories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setCategories(json);
      })
      .catch((err) => {
        alert(err.msg);
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const showcategory = categories.map((category) => {
    return (
      <ShowCategory
        key={category.name}
        initial={category.name.toUpperCase().charAt(0)}
        name={category.name.toUpperCase()}
        modified_at={category.modified_at}
      />
    );
  });

  return (
    <>
      {categories === null ? (
        <CircularProgress />
      ) : (
        <>
          <Card color="text.primary">
            <h2>CATEGORIES</h2>
            <Button
              variant="contained"
              color="primary"
              href="/admin/category/createCategory"
            >
              Add More
            </Button>
          </Card>

          {showcategory}
        </>
      )}
    </>
  );
};
export default AllCategories;
