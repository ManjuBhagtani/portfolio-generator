import React from "react";

const Skill = ({ skill, onRemovePressed}) =>{
    return(    
        <div className="card bg-light p-2 pr-1 mb-1">
            <div className="row">
                <div className="col-lg-10"> {skill.skill} </div>
                <div className="col-lg-2 text-right">
                    <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => onRemovePressed(skill)}
                    >
                        Remove
                    </button>
                </div>
            </div>   
       </div>
    )
}

export default Skill;
