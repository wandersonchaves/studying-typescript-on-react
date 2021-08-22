import { Provider } from "react-redux";

// eslint-disable-next-line import/extensions
import RepositoryList from "./components/RepositoryList";

// eslint-disable-next-line import/extensions
import store from "./store";

const App = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
