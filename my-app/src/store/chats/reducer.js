import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialChats = [
    { name: "Chat 1", id: "chat1" },
    { name: "Chat 2", id: "chat2" },
    { name: "Chat 3", id: "chat3" },
];

export const chatsReducer = (state = initialChats, { type, payload }) => {
    switch (type) {
        case ADD_CHAT:
            return [...state, payload];
        case DELETE_CHAT:
            return state.filter(({ id }) => id !== payload);
        default:
            return state;
    }
};
