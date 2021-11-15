import React from "react";
import { Link } from "react-router-dom";

const chatList = [
    { name: "Chat 1", id: "chat1" },
    { name: "Chat 2", id: "chat2" },
    { name: "Chat 3", id: "chat3" },
];

export const ChatList = () => {
    return (
        <div className="chat-list">
            <h4>list of chats</h4>
            <ul>
                {chatList.map((chat) => (
                    <li>
                        <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
