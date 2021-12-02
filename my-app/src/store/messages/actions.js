export const ADD_MESSAGES = "MESSAGES::ADD_MESSAGES";
export const DELETE_MESSAGES = "MESSAGES::DELETE_MESSAGES";
export const UPDATE_MESSAGES = "MESSAGES::UPDATE_MESSAGES";

export const addMessages = (chatID) => ({
    type: ADD_MESSAGES,
    payload: chatID,
});

export const updateMessages = (chatID, message) => ({
    type: UPDATE_MESSAGES,
    payload: { chatID, message },
});

export const deleteMessages = (id) => ({
    type: DELETE_MESSAGES,
    payload: id,
});

let timeout;

export const updateMessagesWithReply = (chatID, message) => (dispatch) => {
    dispatch(updateMessages(chatID, message));

    if (message.author !== "Mr.Robot") {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            const botMessage = {
                id: `mess${Date.now()}`,
                text: "f.society",
                author: "Mr.Robot",
            };
            dispatch(updateMessages(chatID, botMessage));
        }, 1500);
    }
};
