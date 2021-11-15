import React from "react";
import { useState, useRef } from "react";

export const Form = ({ updateMessageList }) => {
    const [value, setValue] = useState("");
    const inputRef = useRef();

    const handleMessageChange = (e) => {
        setValue(e.target.value);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        updateMessageList({
            text: value,
            author: "User",
        });

        setValue("");
        inputRef.current?.focus();
    };

    return (
        <form className="form" onSubmit={sendMessage}>
            <input
                className="form__input"
                placeholder="Напишите сообщение..."
                value={value}
                onChange={handleMessageChange}
                ref={inputRef}
                autoFocus
            />
            <button className="form__btn" type="submit">
                Отправить
            </button>
        </form>
    );
};
