import { CHANGE_STATE } from "../actions";

const initialState = {
    translation: "Hello World",
    langs: {},
    loading: false,
    selectedLang: "en"
};

export default function translateReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_STATE:
            return { ...state, ...action.data };
        default:
            return state;
    }
}
