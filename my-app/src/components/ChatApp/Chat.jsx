import "./Chat.sass";
import { useCallback } from "react";
import { Message } from "../Message/Message";
import { ChatList } from "../ChatList/ChatList";
import { Form } from "../Form/Form";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/actions";
import { getMessageList } from "../../store/messages/selectors";
import { addMessages, deleteMessages } from "../../store/messages/actions";
import { getChatList } from "../../store/chats/selectors";

import { updateMessagesWithReply } from "../../store/messages/actions";

function Chat() {
    const dispatch = useDispatch();
    const { chatId } = useParams();
    const chatList = useSelector(getChatList);
    const messageList = useSelector(getMessageList);

    const updateMessageList = useCallback(
        (newMessage) => {
            dispatch(updateMessagesWithReply(chatId, newMessage));
        },
        [chatId]
    );

    const handleAddChat = useCallback(
        (name) => {
            const newId = `chat${Date.now()}`;

            dispatch(addChat({ name, id: newId }));
            dispatch(addMessages(newId));
        },
        [dispatch]
    );

    const handleDeleteChat = useCallback((idToDelete) => {
        const newId = `chat${Date.now()}`;

        dispatch(deleteChat(idToDelete));
        dispatch(deleteMessages(idToDelete));
    }, []);

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
