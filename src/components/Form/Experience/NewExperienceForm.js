import React, { useState } from "react";
import { connect } from "react-redux";
import { createExperience } from "./actions";
//import { experiences } from "./reducers";

const NewExperienceForm = ({ experiences=[], onCreatePressed }) =>{

    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');

    return(
    <div className="border rounded bg-light p-3 m-2">
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Position"
                value={position}
                onChange={e => setPosition(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />
            <textarea 
                className="form-control form-control-sm mb-2" 
                placeholder="Role description"
                rows="3" 
                value={desc}
                onChange={e => setDesc(e.target.value)}
            />
        <div className="text-right">
            <button 
                className="btn btn-success btn-sm"
                onClick={()=>{
                    onCreatePressed({position, company, desc});
                    setPosition('');
                    setCompany('');
                    setDesc('');
                }}
            >
                Add experience
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    experiences: state.experiences,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: experience => dispatch(createExperience(experience)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewExperienceForm);
