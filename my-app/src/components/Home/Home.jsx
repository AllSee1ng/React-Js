import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import { signIn } from "../../store/profile/actions";
import { SignForm } from "../SignForm/SignForm";

export const Home = () => {
    // const dispatch = useDispatch();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (email, pass) => {
        setLoading(true);
        try {
            await logIn(email, pass);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Home</h2>
            <SignForm onSubmit={handleSignIn} />
            <Link to="/signup">Sign Up</Link>
        </div>
    );
};
