import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import DynamicHooksCounter from "./Components/DynamicHooksCounter";
import HooksCounter from "./Components/HooksCounter";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HooksCounter/>
                <DynamicHooksCounter />
            </div>
        </Provider>
    );
}

export default App;
