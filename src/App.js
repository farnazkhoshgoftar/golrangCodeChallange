import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/peoples/store";
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
