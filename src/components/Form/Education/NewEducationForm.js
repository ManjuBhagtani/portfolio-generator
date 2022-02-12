import React, { useState } from "react";
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import moment from 'moment';
import { connect } from "react-redux";
import { createEducation } from "./actions";

const NewEducationForm = ({ educations=[], onCreatePressed }) =>{

    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const [gpa, setGpa] = useState('');
    const [start, setStartDate] = useState('');
    const [end, setEndDate] = useState('');
    const [presentUniversity, setPresentUniversity] = useState(false);
    const [endDateEnabled, setEndDateEnabled] = useState(true);

    return(
    <div className="border rounded bg-light p-3 m-2">
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="University/College"
                value={university}
                onChange={e => setUniversity(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Degree"
                value={degree}
                onChange={e => setDegree(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2" 
                type="text"
                placeholder="GPA"
                value={gpa}
                onChange={e => setGpa(e.target.value)}
            />
            <div className="row mb-2">
                <div className="col">
                     <DatePickerComponent 
                        placeholder="Start Date"
                        format="MMM-yyyy"
                        start="Year"
                        depth="Year"
                        value={start}
                        onChange={e=> setStartDate(moment(e.target.value).format("MMMM-YYYY"))}
                    />
                </div>
                <div className="col">
                     <DatePickerComponent 
                        placeholder="End Date"
                        format="MMM-yyyy"
                        start="Year"
                        depth="Year"
                        value={end}
                        onChange={e=> setEndDate(moment(e.target.value).format("MMMM-YYYY"))}
                        enabled={endDateEnabled}
                        cleared={()=>setEndDate('')}
                    />
                </div>
                <div className="col">
                    <div class="form-check">
                        <input 
                            class="form-check-input" 
                            id="presentUniversity"
                            type="checkbox" 
                            value={presentUniversity} 
                            onChange={e => {
                                setPresentUniversity(e.target.checked);
                                setEndDateEnabled(!endDateEnabled);
                            }}
                            disabled={end !== ''}
                        />
                        <label class="form-check-label" for="presentUniversity">
                            Present
                        </label>
                    </div>
                </div>
            </div>
            
        <div className="text-right">
            <button 
                className="btn btn-success btn-sm"
                onClick={()=>{
                    onCreatePressed({university, degree, gpa, start, end, presentUniversity});
                    setUniversity('');
                    setDegree('');
                    setGpa('')
                    setStartDate('');
                    setEndDate('');
                    setPresentUniversity(false);
                }}
            >
                Add education
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    experiences: state.educations,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: education => dispatch(createEducation(education)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewEducationForm);
