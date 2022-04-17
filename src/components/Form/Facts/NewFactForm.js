import React, { useState } from "react";
import { connect } from "react-redux";
import { createFact } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewFactForm = ({ facts=[], onCreatePressed }) =>{

    const [factName, setFactName] = useState('');
    const [figure, setFigure] = useState('');
    return(
    <div className="border rounded bg-light p-3 m-2">
        <input 
            className="form-control form-control-sm mb-2"
            type="text"
            placeholder="Fact/Statistic description"
            value={factName}
            onChange={e => setFactName(e.target.value)}
        />
        <input 
            className="form-control form-control-sm mb-2"
            type="text"
            placeholder="Figure"
            value={figure}
            onChange={e => setFigure(e.target.value)}
        />     
        <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle"
                disabled={factName === '' || figure === ''}
                onClick={()=>{
                    onCreatePressed({factName, figure});
                    setFactName('');
                    setFigure('')
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    facts: state.facts,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: fact => dispatch(createFact(fact)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewFactForm);
