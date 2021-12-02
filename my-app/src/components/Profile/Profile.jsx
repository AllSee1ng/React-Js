import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    const checkboxValue = useSelector((state) => state.checkbox);
    const name = useSelector((state) => state.name);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleCheckbox);
    };

    const handleSignOut = () => {
        dispatch(signOut());
    };

    return (
        <div>
            <h2>Profile</h2>
            <input
                type="checkbox"
                checked={checkboxValue}
                onChange={handleChange}
            />
            <span>{name}</span>
            <button onClick={handleSignOut}>SIGN OUT</button>
        </div>
    );
};
