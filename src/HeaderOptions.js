import React from "react";
import "./HeaderOptions.css";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div className="headerOptions" onClick={onClick}>
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && (
        <Avatar className="headerOptions_icon" src={user?.photoUrl}>
          <div className="avatar_name">{user?.email[0]}</div>
        </Avatar>
      )}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
