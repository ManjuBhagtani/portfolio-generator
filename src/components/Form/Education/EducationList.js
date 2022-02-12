import React from 'react';
import NewEducationForm from './NewEducationForm';
import Education from './Education';
import { connect } from 'react-redux';
import { removeEducation } from './actions';

const EducationList = ({ educations = [{education: {university: 'VJTI'}}], onRemovePressed }) => {
    return(
    <div>
        <div className="container mb-3">
            <NewEducationForm />
            {educations.map(education => <Education education={education.education} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    educations: state.educations,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: education => dispatch(removeEducation(education)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationList);