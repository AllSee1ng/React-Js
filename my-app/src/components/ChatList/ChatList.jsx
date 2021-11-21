import React, { useState } from "react";
import { Link } from "react-router-dom";

// const chatList = [
//     { name: "Chat 1", id: "chat1" },
//     { name: "Chat 2", id: "chat2" },
//     { name: "Chat 3", id: "chat3" },

// ];

export const ChatList = ({ chatList, onAddChat, onDeleteChat }) => {
    console.log(chatList);

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddChat(value);

        setValue("");
    };

    return (
        <div className="chat-list">
            <h4>list of chats</h4>
            <ul>
                {chatList.map((chat) => (
                    <li>
                        <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
                        <button onClick={() => onDeleteChat(chat.id)}>
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
            <form className="form" onSubmit={handleSubmit}>
                <input autoFocus value={value} onChange={handleChange} />
                <button type="submit">Add chat</button>
            </form>
            {/* <ChatListForm /> */}
        </div>
    );
};
