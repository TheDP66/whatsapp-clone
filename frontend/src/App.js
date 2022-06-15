import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";

import axios from "./axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("f92b4c947b4c436c6a00", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  // console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar messages={messages} />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
