export const initialState = {
    pageTitle: "Chats",
};

const contextReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAGE_TITLE":
            return { ...state, pageTitle: action.payload };
        default:
            return state;
    }
};

export default contextReducer;
