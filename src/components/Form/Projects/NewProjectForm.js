import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewProjectForm = ({ projects=[], onCreatePressed }) =>{

    const [projectName, setprojectName] = useState('');
    const [screenshot, setScreenshot] = useState('');
    const [deployedLink, setDeployedLink] = useState('');
    const [github, setGithub] = useState('');

    return(
    <div className="border rounded bg-light p-3 m-2">
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Project name"
                value={projectName}
                onChange={e => setprojectName(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Screenshot link (paste the direct image URL)"
                value={screenshot}
                onChange={e => setScreenshot(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Deployed link"
                value={deployedLink}
                onChange={e => setDeployedLink(e.target.value)}
            />
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Github link"
                value={github}
                onChange={e => setGithub(e.target.value)}
            />     
        <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle"
                disabled={projectName === '' ||
                          (deployedLink === '' && github === '')
                }
                onClick={()=>{
                    onCreatePressed({projectName, screenshot, deployedLink, github});
                    setprojectName('');
                    setScreenshot('');
                    setDeployedLink('')
                    setGithub('');
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: project => dispatch(createProject(project)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewProjectForm);
