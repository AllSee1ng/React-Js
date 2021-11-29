import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./components/Router/Router";
import { PersistGate } from "redux-persist/integration/react";
import "./App.sass";
import { persistor } from "./store";
function App() {
    return (
        <PersistGate persistor={persistor}>
            <div className="App">
                <BrowserRouter>
                    <header className="App-header">
                        <ul className="Navigate">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/chat">Chats</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/articles">Articles</Link>
                            </li>
                        </ul>
                    </header>
                    <main className="App-main">
                        <Router />
                    </main>
                </BrowserRouter>
            </div>
        </PersistGate>
    );
}

export default App;
