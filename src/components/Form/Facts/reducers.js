import { CREATE_FACT, REMOVE_FACT } from "./actions";

export const facts = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_FACT:{
            const {fact} = payload;
            return state.concat(fact);
        }
        case REMOVE_FACT: {
            const {fact} = payload;
            return state.filter(f => f.factName !== fact.factName);
        }
        default: 
            return state;
    }
}