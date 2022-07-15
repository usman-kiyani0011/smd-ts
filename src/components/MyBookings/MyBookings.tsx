import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./style.css";
import BasicCard from "./Cart";

const MyBookings = () => {
  return (
    <div>
      <span className="title">My Bookings | </span>
      <HomeIcon sx={{ mt: 2 }} className="home" />
      <span style={{ color: "#FF611D" }}> / My bookings</span>
      <>
        <BasicCard />
      </>
    </div>
  );
};

export default MyBookings;
