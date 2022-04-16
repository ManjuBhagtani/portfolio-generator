import React from 'react';
import NewServiceForm from './NewServiceForm';
import Service from './Service';
import { connect } from 'react-redux';
import { removeService } from './actions';

const ServiceList = ({ services = [], onRemovePressed }) => {
    return(
    <div>
        <NewServiceForm />
        <div className="container mb-3">
            {services.map(service => <Service service={service} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    services: state.services,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: service => dispatch(removeService(service)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);