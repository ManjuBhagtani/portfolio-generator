import React from "react";

const Award = ({ award, onRemovePressed}) =>{
    return(    
        <div className="card bg-light p-2 pr-1 mb-1">
            <div className="row">
                <div className="col"> {award.award} </div>
                <div className="col text-right">
                    <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => onRemovePressed(award)}
                    >
                        Remove
                    </button>
                </div>
            </div>   
       </div>
    )
}

export default Award;
