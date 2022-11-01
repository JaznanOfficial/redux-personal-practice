import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import DynamicHooksCounter from "./Components/DynamicHooksCounter";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                
                
                <DynamicHooksCounter />
            </div>
        </Provider>
    );
}

export default App;
