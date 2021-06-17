import React from "react";
import MyCard from "../MyCard.component";

const Dashboard = () => (
  <MyCard
    styles={{
      height: "200px",
      display: " flex",
      placeContent: "center",
      alignItems: "center",
      background: "#f2f2f2",
      width: "45%",
    }}
  >
    <img
      src="	https://www.speedlabs.in/images/partners-new/become-partner.png"
      alt="new"
    />
    <h1>Grow your academy</h1>
  </MyCard>
);

export default Dashboard;
