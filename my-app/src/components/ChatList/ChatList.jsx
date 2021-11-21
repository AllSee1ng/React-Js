import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ChatList = ({ onAddChat, onDeleteChat }) => {
    const chatList = useSelector((state) => state.chats);

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
        </div>
    );
};
