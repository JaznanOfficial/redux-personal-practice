import counterReducer from './Counter/counterReducer';
const { createStore } = require("redux");

const store = createStore(counterReducer)

export default store;