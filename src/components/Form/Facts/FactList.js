import React from 'react';
import NewFactForm from './NewFactForm';
import Fact from './Fact';
import { connect } from 'react-redux';
import { removeFact } from './actions';

const FactList = ({ facts = [], onRemovePressed }) => {
    return(
    <div>
        <NewFactForm />
        <div className="container mb-3">
            {facts.map(fact => <Fact fact={fact} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    facts: state.facts,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: fact => dispatch(removeFact(fact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FactList);