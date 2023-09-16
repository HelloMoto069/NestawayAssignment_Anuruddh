import "./App.css";
import RentalPropertyList from "./components/RentalPropertyList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RentalPropertyList />
      </Provider>
    </>
  );
}

export default App;
