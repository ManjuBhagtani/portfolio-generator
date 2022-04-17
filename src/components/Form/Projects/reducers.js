import { CREATE_PROJECT, REMOVE_PROJECT } from "./actions";

export const projects = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_PROJECT:{
            const {project} = payload;
            return state.concat(project);
        }
        case REMOVE_PROJECT: {
            const {project} = payload;
            return state.filter(proj => proj.projectName !== project.projectName);
        }
        default: 
            return state;
    }
}