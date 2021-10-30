import React from "react";
import "./FriendActivity.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Friends from "./Friends";

function FriendActivity() {
  return (
    <div className="FriendActivity">
      <div className="header">
        <span>Friend activity</span>
        <FontAwesomeIcon icon="user-plus" className="f-icon" />
      </div>
      <div className="body">{/* <Friends /> */}</div>
    </div>
  );
}

export default FriendActivity;
