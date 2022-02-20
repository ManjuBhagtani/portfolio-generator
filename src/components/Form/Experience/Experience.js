import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Experience = ({ experience, onRemovePressed}) =>{
    return(    
        <div className="card bg-light pb-1 pr-1 mb-1 small">
            <div className="card-body">
                <div className="row"> 
                    <div className="col-xl-2 col-3">Role: </div>
                    <div className="col-xl-4 col-9">{experience.position}</div>
                    <div className="col-xl-2 col-3">Company: </div>
                    <div className="col-xl-4 col-9">{experience.company}</div>
                </div>
                <div className="row"> 
                    <div className="col-2">Start: </div>
                    <div className="col-4">{experience.start}</div>
                    <div className="col-2">End: </div>
                    <div className="col-4">{experience.end ? experience.end : experience.presentJob ? "Present" : ""}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">Description:</div>
                    <div className="col-sm-10">{experience.desc}</div>
                </div>
            </div>
            <div className="text-right">
                <button 
                    className="btn btn-danger btn-sm rounded-circle"
                    onClick={() => onRemovePressed(experience)}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
       </div>
    )
}

export default Experience;
