import React from "react";
import "./Message.sass";

export const Message = (props) => {
    const messageList = props.message;

    return messageList.map((message) => (
        <p className="message" key={messageList.indexOf(message)}>
            <span> {message.author}</span>: {message.text}
        </p>
    ));
};
