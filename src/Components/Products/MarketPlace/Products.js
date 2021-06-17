import React, { useEffect, useState } from "react";
import ProductView from "./ProductView.component";
import { withRouter } from "react-router";

import { WarningOutlined } from "@material-ui/icons";

const Products = (props) => {
  console.log(props);
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("http://35.244.8.93:4000/api/admin/product/marketplace", {
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
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          {products.map((product) => (
            <ProductView
              key={product.id}
              creator_initials={product.creator_name.charAt(0)}
              product_name={product.product_name}
              creator_name={product.creator_name}
              image_name={product.image_name}
              image_url={product.image_url}
              description={product.description}
              tot_students={product.tot_students}
              you_will_learn={product.you_will_learn}
              category={product.category}
              pre_requisities={product.pre_requisities}
              price={product.price}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default withRouter(React.memo(Products));
