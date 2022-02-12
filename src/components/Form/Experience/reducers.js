import { CREATE_EXPERIENCE, REMOVE_EXPERIENCE } from "./actions";

export const experiences = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_EXPERIENCE:{
            const {experience} = payload;
            const newExperience = {
                experience,
            };
            return state.concat(newExperience);
        }
        case REMOVE_EXPERIENCE: {
            const {text} = payload;
            return state.filter(experience => experience.text !== text);
        }
        default: 
            return state;
    }
}