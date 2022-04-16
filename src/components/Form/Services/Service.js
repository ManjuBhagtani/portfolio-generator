import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Service = ({ service, onRemovePressed}) =>{
    return(    
        <div className="card bg-light pb-1 pr-1 mb-1 small">
            <div className="card-body">
                <div className="row"> 
                    <div className="col-xl-2 col-3">Service: </div>
                    <div className="col-xl-4 col-9">{service.serviceName}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">Description:</div>
                    <div className="col-sm-10">{service.desc}</div>
                </div>
            </div>
            <div className="text-right">
                <button 
                    className="btn btn-danger btn-sm rounded-circle"
                    onClick={() => onRemovePressed(service)}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
       </div>
    )
}

export default Service;
