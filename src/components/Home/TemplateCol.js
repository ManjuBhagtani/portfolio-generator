import React from 'react'

const TemplateCol = ({template}) => {
    
    const handleGenerate = () =>{
        localStorage.setItem("TemplateID", template.TemplateID);
        let path = "/generatePortfolio";
        window.open(path, "_self");
    }

    return (
    <div className="col-md-6 p-4 thumbnail-div">
        <img className="img-fluid border border-dark" src={require(`../../assets/TemplateThumbnails/Template${template.TemplateID}.png`)} alt={template.AltText}></img>
        <div className="d-flex justify-content-center m-3">
            <a className="btn btn-primary btn-sm mr-3 demo" href={template.DemoLink} target="_blank" rel="noreferrer">Demo</a>
            <button className="btn btn-primary generate" onClick={handleGenerate}>Generate</button>
        </div>                       
    </div>
    )
}

export default TemplateCol;