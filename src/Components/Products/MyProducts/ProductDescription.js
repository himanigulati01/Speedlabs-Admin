import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import MyCard from "../../MyCard.component";
import CardActions from "@material-ui/core/CardActions";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";

const ProductDescription = (props) => {
  const [product, setProduct] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    let product_id = props.match.params.productId;
    console.log(product_id);
    fetch(`http://35.244.8.93:4000/api/admin/product/${product_id}`, {
      method: "GET",
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
        setProduct(json);
        setIsloading(false);
        console.log("product: " + product[0].product_name);
        console.log(json);
      })
      .catch((err) => {
        console.warn("error " + err);
        setIsloading(false);
      });
  }, []);

  return (
    <>
      {isloading || product === null ? (
        <div style={{ marginTop: "40px" }}>
          <CircularProgress />
        </div>
      ) : (
        <MyCard
          styles={{
            width: "80%",
            display: "flex",
            flexFlow: "wrap",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <strong>
            <h2 style={{ marginBlockEnd: "auto" }}>
              {product[0].product_name}
            </h2>
            <h4>Creator: {product[0].creator_name}</h4>
            ID: {product[0].id}
          </strong>
          <img src={product[0].image_url} alt={product[0].image_name} />

          <Typography>
            <h4>Category: {product[0].category}</h4>
            <h4>Label: {product[0].label}</h4>
            <h4>Status: {product[0].status}</h4>
          </Typography>
          <Typography>
            <h4>Pre-requisites: {product[0].pre_requisites}</h4>
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{product[0].description}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>You will Learn</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{product[0].you_will_learn}</Typography>
            </AccordionDetails>
          </Accordion>

          <CardActions style={{ placeContent: "center" }}>
            <Button size="large" color="secondary" href="/admin/myproducts">
              cancel
            </Button>
          </CardActions>
        </MyCard>
      )}
    </>
  );
};

export default withRouter(ProductDescription);
