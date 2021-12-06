import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../services/firebase";
import { signOut, toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    const checkboxValue = useSelector((state) => state.checkbox);
    const name = useSelector((state) => state.name);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleCheckbox);
    };

    const handleLogOutClick = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err);
        }
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
            <button onClick={handleLogOutClick}>SIGN OUT</button>
        </div>
    );
};
