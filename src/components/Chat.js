import React from "react";
import "./Chat.css";

const Chat = ({ chat }) => {
  console.log(chat);
  return (
    <div className="chat">
      <div className="profile-photo" style={{ backgroundColor: "#eee" }}>
        {chat.userPhoto ? (
          <img
            className="profile-photo"
            alt={`${chat.useName} profile`}
            src={chat.userPhoto}
          />
        ) : (
          <i className="fa fa-user profile-photo"></i>
        )}
      </div>
      <div className="name-message">
        <div className="userName">{chat.userName}</div>
        <div className="chat-message">
          <i
            style={{
              color:
                chat.status === "read"
                  ? "blue"
                  : chat.status === "unread"
                  ? "grey"
                  : "white",
              display: chat.status === "received" ? "none" : "initial",
            }}
            className="fas fa-check-double"
          ></i>{" "}
          {chat.message}
        </div>
      </div>
      <div className="right-part">
        <div className="chat-date">{chat.date}</div>
        <div
          style={{
            display: chat.unreadCount > 0 ? "initial" : "none",
          }}
        >
          <p className="unread-count">{chat.unreadCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
