import React from 'react';
import NewProjectForm from './NewProjectForm';
import Project from './Project';
import { connect } from 'react-redux';
import { removeProject } from './actions';

const ProjectList = ({ projects = [], onRemovePressed }) => {
    return(
    <div>
        <NewProjectForm />
        <div className="container mb-3">
            {projects.map(project => <Project project={project} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: project => dispatch(removeProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);