import { createStore, combineReducers } from "redux";
import { experiences } from "./components/Form/Experience/reducers";
import { educations } from "./components/Form/Education/reducers";
import { awards } from "./components/Form/Awards/reducers";
import { interests } from "./components/Form/Interests/reducers";
import { skills
 } from "./components/Form/Skills/reducers";
const reducers = {
    experiences,
    educations,
    awards,
    interests,
    skills,
};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(rootReducer);

export default configureStore;