import React, { useState } from "react";
import { connect } from "react-redux";
import { createService } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewServiceForm = ({ services=[], onCreatePressed }) =>{

    const [serviceName, setServiceName] = useState('');
    const [desc, setDesc] = useState('');
    return(
    <div className="border rounded bg-light p-3 m-2">
        <input 
            className="form-control form-control-sm mb-2"
            type="text"
            placeholder="Service name"
            value={serviceName}
            onChange={e => setServiceName(e.target.value)}
        />
        <textarea 
            className="form-control form-control-sm mb-2" 
            placeholder="Description"
            rows="3" 
            value={desc}
            onChange={e => setDesc(e.target.value)}
        />         
        <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle"
                disabled={serviceName === ''}
                onClick={()=>{
                    onCreatePressed({serviceName, desc});
                    setServiceName('');
                    setDesc('')
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    services: state.services,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: service => dispatch(createService(service)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewServiceForm);
