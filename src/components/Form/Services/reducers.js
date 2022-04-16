import { CREATE_SERVICE, REMOVE_SERVICE } from "./actions";

export const services = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_SERVICE:{
            const {service} = payload;
            return state.concat(service);
        }
        case REMOVE_SERVICE: {
            const {service} = payload;
            return state.filter(svc => svc.serviceName !== service.serviceName);
        }
        default: 
            return state;
    }
}