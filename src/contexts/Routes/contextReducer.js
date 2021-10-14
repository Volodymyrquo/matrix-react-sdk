export const initialState = {
    pageTitle: "Chats",
    isMxLeftMenuVisible: false,
};

const contextReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAGE_TITLE":
            return { ...state, pageTitle: action.payload };
        case "TOGGLE_MX_LEFT_PANEL":
            return {
                ...state,
                isMxLeftMenuVisible: !state.isMxLeftMenuVisible,
            };
        default:
            return state;
    }
};

export default contextReducer;
