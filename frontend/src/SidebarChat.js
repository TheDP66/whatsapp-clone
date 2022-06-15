import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat({ first, messages }) {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    if (first) {
      messages.forEach((chat) => {
        setMessage(chat);
      });
    }
  }, [first, messages]);

  return (
    <div
      className="sidebarChat"
      style={{ backgroundColor: first ? "lightGray" : "" }}
    >
      <Avatar />
      <div className="sidebarChat__info">
        <h2>{first ? "Dharma Putra" : "Guest"}</h2>
        <p>{first ? message.message : "..."}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
