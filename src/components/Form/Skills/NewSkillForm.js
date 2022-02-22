import React, { useState } from "react";
import { connect } from "react-redux";
import { createSkill } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewSkillForm = ({ skills=[], onCreatePressed }) =>{

    const [skill, setSkill] = useState('');

    return(
    <div className="border rounded bg-light p-3 m-2">
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={e => setSkill(e.target.value)}
            />          
        <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle"
                disabled={skill === ''}
                onClick={()=>{
                    onCreatePressed({skill});
                    setSkill('');
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    skills: state.skills,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: skill => dispatch(createSkill(skill)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewSkillForm);
