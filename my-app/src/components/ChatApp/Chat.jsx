import "./Chat.sass";
import { useState, useEffect, useCallback } from "react";
import { Message } from "../Message/Message";
import { ChatList } from "../ChatList/ChatList";
import { Form } from "../Form/Form";
import { useParams } from "react-router";

const initialMessages = {
    chat1: [],
    chat2: [],
    chat3: [],
};

function Chat() {
    const { chatId } = useParams();
    const [messageList, setMessageList] = useState(initialMessages);

    // const updateMessageList = (message) => {
    //     setMessageList([...messageList, message]);
    // };

    const updateMessageList = useCallback(
        (newMessage) => {
            setMessageList((prevMessages) => ({
                ...prevMessages,
                [chatId]: [...(prevMessages[chatId] || []), newMessage],
            }));
        },
        [chatId]
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            if (
                messageList[chatId]?.length &&
                messageList[chatId][messageList[chatId]?.length - 1].author !==
                    "Mr.Robot"
            ) {
                updateMessageList({
                    author: "Mr.Robot",
                    text: "F.society",
                });
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [messageList[chatId]]);

    return (
        <div className="chat">
            <ChatList />
            <div className="message-area_wrapper">
                <div className="message-area">
                    <Message
                        className="message-txt"
                        message={messageList[chatId]}
                    />
                </div>
                <Form updateMessageList={updateMessageList} />
            </div>
        </div>
    );
}

export default Chat;
