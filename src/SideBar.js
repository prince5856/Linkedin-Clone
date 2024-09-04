import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const SideBar = () => {
  const user = useSelector(selectUser);
  const imgUrl = "https://images.pexels.com/photos/128234/pexels-photo-128234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src={imgUrl}
          alt=""
          className="image-sidebar"
        />
        <Avatar
          src={user && user.photoUrl}
          className="sidebar_avatar"
        >{user && user.email[0]}</Avatar>
        <h2>{user && user.displayName}</h2>
        <h4>{user && user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2543</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default SideBar;
