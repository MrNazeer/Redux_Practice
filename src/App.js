import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Adduser from "./components/Adduser";
import Listuser from "./components/Listuser";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Adduser />
        <Listuser />
      </div>
    </Provider>
  );
}

export default App;
