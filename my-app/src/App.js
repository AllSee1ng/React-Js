import "./App.sass";
import { useState, useEffect } from "react";
import { Message } from "./components/Message/Message";

function App() {
    const [message, setMessage] = useState({});
    const [value, setValue] = useState("");
    const [messageList, setMessageList] = useState([]);

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
    };

    useEffect(() => {
        if (
            messageList[messageList.length - 1] &&
            messageList[messageList.length - 1].author !== "Mr.Robot"
        ) {
            setTimeout(() => {
                setMessageList([
                    ...messageList,
                    {
                        author: "Mr.Robot",
                        text: "f.society", // отсылочка
                    },
                ]);
            }, 1500);
        }
    }, [messageList]);

    return (
        <div className="App">
            <main className="App-main">
                <div className="message-area">
                    <Message className="message-txt" message={messageList} />
                </div>
                <form className="form" onSubmit={updateMessageList}>
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Напишите сообщение..."
                        value={value}
                        onChange={handleMessageChange}
                    />
                    <button
                        className="form__btn btn"
                        type="submit"
                        onSubmit={updateMessageList}
                    >
                        Отправить
                    </button>
                </form>
            </main>
        </div>
    );
}

export default App;
