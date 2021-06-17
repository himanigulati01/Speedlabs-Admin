import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import MyLink from "../../MyLink.component";
import Button from "@material-ui/core/Button";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import { withRouter } from "react-router";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import MyNoRowOverlay from "../../MyNoRowOverlay";
import { WarningOutlined } from "@material-ui/icons";

const Products = (props) => {
  console.log(props);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null);
  const columns = [
    { field: "id", headerName: "ID", width: 90, hide: true },
    {
      field: "product_name",
      headerName: "Product Name",
      width: 200,
    },
    { field: "category", headerName: "Category", width: 200 },
    { field: "tot_students", headerName: "Users", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    {
      field: "course_rating",
      headerName: "Rating",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
              deleteRow(params.id);
            }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
              console.log(params);
              editRow(params.id);
            }}
          >
            Edit
          </Button>
        </strong>
      ),
    },
  ];

  const editRow = (id) => {
    let data = { ...products[id] };
    console.log(data);
    let item = data;
    fetch(`http://35.244.8.93:4000/api/admin/product/${id}/update`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        fetchProducts();
      })
      .catch((error) => console.log(error));
  };

  const deleteRow = (id) => {
    fetch(`http://35.244.8.93:4000/api/admin/product/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        fetchProducts();
      })
      .catch((error) => console.log(error));
  };

  const fetchProducts = () => {
    fetch("http://35.244.8.93:4000/api/admin/product/myproducts", {
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
        setProducts(json);
      })
      .catch((err) => {
        alert(err.msg);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products === null ? (
        <WarningOutlined />
      ) : (
        <div
          style={{
            height: "700",
            width: "93%",
            margin: "25px 60px",
            background: "white",
            position: "relative",
            borderRadius: ".2%",
          }}
        >
          <div>
            <Button variant="text" color="default">
              <MyLink to={props.location.pathname + "/createProduct"}>
                <AddBoxOutlinedIcon />
              </MyLink>
            </Button>

            <Button variant="text" color="default">
              <MyLink to={`/admin/products/${id}`}>
                <DescriptionOutlinedIcon />
              </MyLink>
            </Button>
          </div>
          <DataGrid
            columns={columns}
            rows={products}
            pageSize={10}
            autoHeight
            checkboxSelection
            onRowSelected={(event) => setId(event.data.id)}
            components={{
              NoRowsOverlay: MyNoRowOverlay,
            }}
          />
        </div>
      )}
    </>
  );
};
export default withRouter(React.memo(Products));
