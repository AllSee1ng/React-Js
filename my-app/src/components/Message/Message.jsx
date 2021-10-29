import React from "react";
import "./Message.sass";

export const Message = (props) => {
    return <h3 className="message">{props.message}</h3>;
};
