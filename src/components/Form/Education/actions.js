export const CREATE_EDUCATION = 'CREATE_EDUCATION';

export const createEducation = education => ({
    type: CREATE_EDUCATION,
    payload: {education}
});

export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';

export const removeEducation = education => ({
    type: REMOVE_EDUCATION,
    payload: {education}
});
