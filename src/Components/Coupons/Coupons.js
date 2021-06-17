import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button, CircularProgress } from "@material-ui/core";
import ShowCoupon from "./ShowCoupon.compoent";
const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const fetchCoupons = () => {
    fetch("http://35.244.8.93:4000/api/admin/coupon/allcoupons", {
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
        setCoupons(json);
      })
      .catch((err) => {
        alert(err.msg);
      });
  };
  useEffect(() => {
    fetchCoupons();
  }, []);

  const showCoupons = coupons.map((coupon) => (
    <ShowCoupon
      key={coupon.name}
      initial={coupon.coupon_code.charAt(0)}
      coupon_code={coupon.coupon_code.toUpperCase()}
      description={coupon.description}
      discount={coupon.discount_percent}
      terms_and_conditions={coupon.terms_and_conditions}
    />
  ));
  return (
    <div>
      {coupons === null ? (
        <CircularProgress />
      ) : (
        <>
          <Card color="text.primary">
            <h2>COUPONS</h2>
            <Button href="/admin/coupons/createCoupon">Create +</Button>
          </Card>

          {showCoupons}
        </>
      )}
    </div>
  );
};

export default Coupons;
