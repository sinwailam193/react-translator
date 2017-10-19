import { YANDEX_KEY } from "../config";

export const CHANGE_STATE = "CHANGE_STATE";

export const changeState = data => ({ type: CHANGE_STATE, data });
