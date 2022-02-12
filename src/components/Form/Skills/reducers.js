import { CREATE_SKILL, REMOVE_SKILL } from "./actions";

export const skills = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_SKILL:{
            const {skill} = payload;
            const newSkill = {
                skill,
            };
            return state.concat(newSkill);
        }
        case REMOVE_SKILL: {
            const {skill} = payload;
            return state.filter(obj => obj.skill !== skill);
        }
        default: 
            return state;
    }
}