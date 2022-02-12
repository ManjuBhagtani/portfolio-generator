import { createStore, combineReducers } from "redux";
import { experiences } from "./components/Form/Experience/reducers";
import { educations } from "./components/Form/Education/reducers";

const reducers = {
    experiences,
    educations,
};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(rootReducer);

export default configureStore;