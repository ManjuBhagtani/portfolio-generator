import React from 'react';
import NewAwardForm from './NewAwardForm';
import Award from './Award';
import { connect } from 'react-redux';
import { removeAward } from './actions';

const AwardList = ({ awards = [], onRemovePressed }) => {
    return(
    <div>
        <div className="container mb-3">
            <NewAwardForm />
            {awards.map(award => <Award award={award.award} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    awards: state.awards,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: award => dispatch(removeAward(award)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AwardList);