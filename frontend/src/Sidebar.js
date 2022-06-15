import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";

import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";

function Sidebar({ messages }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ChatIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat first={true} messages={messages} />
        <SidebarChat first={false} />
        <SidebarChat first={false} />
      </div>
    </div>
  );
}

export default Sidebar;
