import React from "react";

const Experience = ({ experience, onRemovePressed}) =>{
    return(    
        <div className="card bg-light pb-1 pr-1 mb-1 small">
            <div className="card-body">
                <div className="row"> 
                    <div class="col-xl-2 col-3">Role: </div>
                    <div class="col-xl-4 col-9">{experience.position}</div>
                    <div class="col-xl-2 col-3">Company: </div>
                    <div class="col-xl-4 col-9">{experience.company}</div>
                </div>
                <div className="row"> 
                    <div class="col-2">Start: </div>
                    <div class="col-4">{experience.start}</div>
                    <div class="col-2">End: </div>
                    <div class="col-4">{experience.end ? experience.end : experience.presentJob ? "Present" : ""}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">Description:</div>
                    <div className="col-sm-10">{experience.desc}</div>
                </div>
            </div>
            <div className="text-right">
                <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemovePressed(experience)}
                >
                    Remove
                </button>
            </div>
       </div>
    )
}

export default Experience;
