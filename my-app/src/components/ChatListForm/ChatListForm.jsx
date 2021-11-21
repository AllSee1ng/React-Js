import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const ChatListForm = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setValue("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input autoFocus value={value} onChange={handleChange} />
            <button type="submit">Add chat</button>
        </form>
    );
};
