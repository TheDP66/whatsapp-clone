import {
  AttachFile,
  InsertEmoticon,
  SearchOutlined,
} from "@mui/icons-material";
import MoreVert from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";
import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";

import axios from "./axios";
import "./Chat.css";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();

    let timestamp = `${date < 10 ? "0" + date : date}/${
      month < 10 ? "0" + month : month
    }/${year} ${hour}:${minute}`;

    await axios.post("/messages/new", {
      message: input,
      name: "Guest",
      timestamp: timestamp,
      received: true,
    });

    // await axios.post("/messages/new", {
    //   message: input,
    //   name: "Dharma Putra",
    //   timestamp: timestamp,
    //   received: false,
    // });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Dharma Putra</h3>
          <p>Not Online</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body" style={{ overflowX: "hidden" }}>
        {messages.map((message) => (
          <p
            key={message._id}
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {message.timestamp}
              {/* {new Date().toUTCString()} */}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
