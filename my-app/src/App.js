import "./App.sass";
import { useState, useEffect, useRef } from "react";
import { Message } from "./components/Message/Message";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function App() {
    const [message, setMessage] = useState({});
    const [value, setValue] = useState("");
    const [messageList, setMessageList] = useState([]);
    const inputRef = useRef();

    const [chatList, setChatList] = useState([
        {
            name: "Name",
            id: "someid",
        },
    ]);

    const handleMessageChange = (e) => {
        setValue(e.target.value);
        setMessage({
            author: "User",
            text: e.target.value,
        });
    };

    const updateMessageList = (e) => {
        e.preventDefault();
        setMessageList([...messageList, message]);
        setValue("");

        inputRef.current?.focus();
    };

    useEffect(() => {
        if (
            messageList[messageList.length - 1] &&
            messageList[messageList.length - 1].author !== "Mr.Robot"
        ) {
            const timer = setTimeout(() => {
                setMessageList([
                    ...messageList,
                    {
                        author: "Mr.Robot",
                        text: "f.society", // отсылочка
                    },
                ]);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [messageList]);

    return (
        <div className="App">
            <main className="App-main">
                <div className="chat-list">
                    <p>list of chats</p>
                    <List>
                        <ListItem>Chat 1</ListItem>
                        <ListItem>Chat 2</ListItem>
                        <ListItem>Chat 3</ListItem>
                    </List>
                </div>
                <div>
                    <div className="message-area">
                        <Message
                            className="message-txt"
                            message={messageList}
                        />
                    </div>
                    <form className="form" onSubmit={updateMessageList}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Напишите сообщение..."
                            value={value}
                            onChange={handleMessageChange}
                            inputRef={inputRef}
                        />
                        <Button
                            variant="outlined"
                            type="submit"
                            onSubmit={updateMessageList}
                        >
                            Отправить
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default App;
