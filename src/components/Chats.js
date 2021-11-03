import React from "react";
import chats from "../latestChats";
import Chat from "./Chat";

const Chats = () => {
  return (
    <>
      {chats.map((chat) => (
        <Chat key={chat._id} chat={chat} />
      ))}
    </>
  );
};

export default Chats;
