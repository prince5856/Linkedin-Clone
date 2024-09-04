import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const imgUrl =
    "https://img.freepik.com/free-photo/beautiful-rose-studio_23-2150737305.jpg?size=626&ext=jpg";
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };
  return ( 
    <div className="header">
      <div className="header_left">
        <LinkedInIcon className="linkedin-icon" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
           avatar={true}
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
