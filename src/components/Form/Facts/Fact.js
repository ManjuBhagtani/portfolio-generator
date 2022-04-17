import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Fact = ({ fact, onRemovePressed}) =>{
    return(    
        <div className="card bg-light pb-1 pr-1 mb-1 small">
            <div className="card-body">
                <div className="row"> 
                    <div className="col-xl-2 col-3">Fact/Statistic: </div>
                    <div className="col-xl-4 col-9">{fact.factName}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">Figure:</div>
                    <div className="col-sm-10">{fact.figure}</div>
                </div>
            </div>
            <div className="text-right">
                <button 
                    className="btn btn-danger btn-sm rounded-circle"
                    onClick={() => onRemovePressed(fact)}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
       </div>
    )
}

export default Fact;
