import "./App.css";
import Counter from "./Components/Counter";
import { Provider } from "react-redux";
import store from './Redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Counter />
                <Counter />
                <Counter />
            </div>
        </Provider>
    );
}

export default App;
