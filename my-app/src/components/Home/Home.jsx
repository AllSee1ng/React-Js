import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/profile/actions";

export const Home = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(signIn());
    };

    return (
        <div>
            <h2>Home</h2>
            <button onClick={handleClick}>SIGN IN</button>
        </div>
    );
};
