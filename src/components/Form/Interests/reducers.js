import { CREATE_INTEREST, REMOVE_INTEREST } from "./actions";

export const interests = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_INTEREST:{
            const {interest} = payload;
            const newInterest = {
                interest,
            };
            return state.concat(newInterest);
        }
        case REMOVE_INTEREST: {
            const {interest} = payload;
            return state.filter(obj => obj.interest !== interest);
        }
        default: 
            return state;
    }
}