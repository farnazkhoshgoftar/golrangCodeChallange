import { GET_PEOPLES } from "./types";
import { request } from "../../../utils/api";

export const GetPeoples = () => {
  return async (dispatch) => {
    request.get().then((response) => {
      dispatch({ type: GET_PEOPLES, payload: response });
    });
  };
};
