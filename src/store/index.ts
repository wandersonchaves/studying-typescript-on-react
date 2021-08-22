import { createStore, Store } from "redux";
// eslint-disable-next-line import/extensions
import { RepositoriesState } from "./ducks/repositories/types";

// eslint-disable-next-line import/extensions
import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  repositories: RepositoriesState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
