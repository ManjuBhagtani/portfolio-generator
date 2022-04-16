export const CREATE_SERVICE = 'CREATE_SERVICE';

export const createService = service => ({
    type: CREATE_SERVICE,
    payload: {service}
});

export const REMOVE_SERVICE = 'REMOVE_SERVICE';

export const removeService = service => ({
    type: REMOVE_SERVICE,
    payload: {service}
});
