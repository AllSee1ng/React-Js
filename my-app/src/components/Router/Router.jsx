import React from "react";
import { Routes, Route } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { Home } from "../Home/Home";
import Chat from "../ChatApp/Chat";
import { Articles } from "../Aticles";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

export const Router = () => {
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
