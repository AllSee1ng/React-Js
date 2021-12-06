import React from "react";
import { Routes, Route } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { Home } from "../Home/Home";
import Chat from "../ChatApp/Chat";
import { Articles } from "../Aticles";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="articles" element={<Articles />} />
            <Route path="chat">
                <Route index element={<Chat />} />
                <Route path=":chatId" element={<Chat />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<h3>404</h3>} />
        </Routes>
    );
};
