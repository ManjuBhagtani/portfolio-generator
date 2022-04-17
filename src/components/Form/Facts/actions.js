export const CREATE_FACT = 'CREATE_FACT';

export const createFact = fact => ({
    type: CREATE_FACT,
    payload: {fact}
});

export const REMOVE_FACT = 'REMOVE_FACT';

export const removeFact = fact => ({
    type: REMOVE_FACT,
    payload: {fact}
});
