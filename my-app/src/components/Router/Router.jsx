import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { Home } from "../Home/Home";
import Chat from "../ChatApp/Chat";
import { Articles } from "../Aticles";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { SignUp } from "../SignUp/SignUp";
import { signIn, signOut } from "../../store/profile/actions";
import { useDispatch } from "react-redux";
import { auth } from "../../services/firebase";

export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn());
            } else {
                dispatch(signOut());
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <Home />
                    </PublicRoute>
                }
            />
            <Route
                path="/signup"
                element={
                    <PublicRoute>
                        <SignUp />
                    </PublicRoute>
                }
            />
            <Route path="articles" element={<Articles />} />
            <Route path="chat">
                <Route
                    index
                    element={
                        <PrivateRoute>
                            <Chat />
                        </PrivateRoute>
                    }
                />
                <Route
                    path=":chatId"
                    element={
                        <PrivateRoute>
                            <Chat />
                        </PrivateRoute>
                    }
                />
            </Route>
            <Route
                path="profile"
                element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<h3>404</h3>} />
        </Routes>
    );
};
