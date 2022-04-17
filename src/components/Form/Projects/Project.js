import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Project = ({ project, onRemovePressed}) =>{
    return(    
        <div className="card bg-light pb-1 pr-1 mb-1 small">
            <div className="card-body">
                <div className="row"> 
                    <div className="col-xl-3 col-3">Project Name: </div>
                    <div className="col-xl-9 col-9">{project.projectName}</div>
                </div>
                <div className="row"> 
                    <div className="col-xl-3 col-3">Screenshot: </div>
                    <div className="col-xl-9 col-9">{project.screenshot}</div>
                </div>
                <div className="row"> 
                    <div className="col-xl-3 col-3">Deployed Link: </div>
                    <div className="col-xl-9 col-9">{project.deployedLink}</div>
                </div>
                <div className="row"> 
                    <div className="col-xl-3 col-3">Github Link: </div>
                    <div className="col-xl-9 col-9">{project.github}</div>
                </div>
            </div>
            <div className="text-right">
                <button 
                    className="btn btn-danger btn-sm rounded-circle"
                    onClick={() => onRemovePressed(project)}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
       </div>
    )
}

export default Project;
