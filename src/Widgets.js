import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArtice = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon className="widgets_icon"/>
      </div>
      {newsArtice("React Project news ", "Kunal has practiced React today")}
      {newsArtice("Kunal Roommate peru", "Ankit Pairwar is an introvert")}
      {newsArtice("Tesla hits new highs", "Tesla sales booms out")}
      {newsArtice("Is Redux too good", "Try it in your project and find out")}
      {newsArtice("Bitcoin breaks out", "Crypto prices touches a new high")}
    </div>
  );
};

export default Widgets;
