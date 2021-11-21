import "./Chat.sass";
import { useState, useEffect, useCallback } from "react";
import { Message } from "../Message/Message";
import { ChatList } from "../ChatList/ChatList";
import { Form } from "../Form/Form";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/actions";
import { getMessageList } from "../../store/messages/selectors";
import {
    updateMessages,
    addMessages,
    deleteMessages,
} from "../../store/messages/actions";

const initialMessages = {
    chat1: [],
    chat2: [],
    chat3: [],
};

function Chat() {
    const dispatch = useDispatch();
    const { chatId } = useParams();
    const [messageList, setMessageList] = useState(initialMessages);
    const chatList = useSelector((state) => state.chats);
    const messagesList = useSelector(getMessageList);
    // const [chatList, setChatList] = useState([
    //     { name: "Chat 1", id: "chat1" },
    //     { name: "Chat 2", id: "chat2" },
    //     { name: "Chat 3", id: "chat3" },
    // ]);

    const updateMessageList = useCallback(
        (newMessage) => {
            dispatch(updateMessages(chatId, newMessage));
        },
        [chatId]
    );

    const handleAddChat = useCallback(
        (name) => {
            const newId = `chat${Date.now()}`;

            // setChatList((prevChatList) => [...prevChatList, { name, id: newId }]);
            dispatch(addChat({ name, id: newId }));
            dispatch(addMessages(newId));
        },
        [dispatch]
    );

    const handleDeleteChat = useCallback((idToDelete) => {
        const newId = `chat${Date.now()}`;

        // setChatList((prevChatList) =>
        //     prevChatList.filter(({ id }) => id !== idToDelete)
        // );
        dispatch(deleteChat(idToDelete));
        setMessageList((prevMessages) => {
            const newMessages = { ...prevMessages };
            delete newMessages[idToDelete];

            return newMessages;
        });
    }, []);

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

    if (chatId && !(chatId in messageList)) {
        return <Navigate replace to="/chat" />;
    }

    return (
        <div className="chat">
            <>
                <ChatList
                    chatList={chatList}
                    onAddChat={handleAddChat}
                    onDeleteChat={handleDeleteChat}
                />
            </>

            {chatId && (
                <div className="message-area_wrapper">
                    <div className="message-area">
                        <Message
                            className="message-txt"
                            message={messageList[chatId]}
                        />
                    </div>
                    <Form updateMessageList={updateMessageList} />
                </div>
            )}
        </div>
    );
}

export default Chat;
