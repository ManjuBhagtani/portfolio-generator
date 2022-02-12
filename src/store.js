import { createStore, combineReducers } from "redux";
import { experiences } from "./components/Form/Experience/reducers";
const reducers = {
    experiences,
};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(rootReducer);

export default configureStore;