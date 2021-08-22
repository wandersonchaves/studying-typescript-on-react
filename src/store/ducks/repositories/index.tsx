import { Reducer } from "redux";
// eslint-disable-next-line import/extensions
import { RepositoriesState, RepositoriesTypes } from "./types";

const INITIAL_STATE: RepositoriesState = {
  data: [{ id: 1, name: "Rocketseat" }],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
      break;

    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
      break;

    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
