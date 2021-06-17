import React, { useState } from "react";
import { withRouter } from "react-router";

import { Button, TextField } from "@material-ui/core";
import MyCard from "../../Components/MyCard.component";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    let item = { email, password };

    fetch("http://35.244.8.93:4000/api/admin/auth/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((json) => {
        //console.log(json.token);
        localStorage.setItem("token", json.token);
        props.history.push("/admin/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <MyCard
      styles={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        width: "50%",
      }}
    >
      <TextField
        id="standard-basic"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={loginHandler}>SignIn</Button>
    </MyCard>
  );
};

export default withRouter(Login);
