import { YANDEX_KEY } from "../config";

export const CHANGE_STATE = "CHANGE_STATE";

export const changeState = data => ({ type: CHANGE_STATE, data });

export const getLangs = () => async (dispatch, getState, api) => {
    const langs = await api.get("/getLangs", {
        params: {
            key: YANDEX_KEY,
            ui: "en"
        }
    }).then(res => (res.data && res.data.langs ? res.data.langs : {}));
    dispatch(changeState({ langs }));
};
