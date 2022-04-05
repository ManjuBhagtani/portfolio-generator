import React from "react";
import Template1 from '../../assets/TemplateThumbnails/Template1.PNG';
import Template2 from '../../assets/TemplateThumbnails/Template2.PNG';
import Template3 from '../../assets/TemplateThumbnails/Template3.PNG';
import Template4 from '../../assets/TemplateThumbnails/Template4.PNG';
import './style.css';

const HomePage=()=>{
    return(
        <>
            
            <div className='container-fluid mt-5'>
                <div className="row">
                    <div className="col-md-6 p-4 thumbnail-div">
                        <img className="img-fluid border border-dark" src={Template1} alt="Template 1 Clarence Taylor"></img>
                        <div className="d-flex justify-content-center m-3">
                            <a className="btn btn-primary btn-sm mr-3 demo" href="https://manjubhagtani.github.io/portfolio-templates/Template1_ClarenceTaylor/Template1ClarenceTaylor.html" target="_blank" rel="noreferrer">Demo</a>
                            <button className="btn btn-primary generate">Generate</button>
                        </div>                       
                    </div>
                    <div className="col-md-6 p-4 thumbnail-div">
                        <img className="img-fluid border border-dark" src={Template2} alt="Template 2 Anna Peterson"></img>
                        <div className="d-flex justify-content-center m-3">
                            <a className="btn btn-primary btn-sm mr-3 demo" href="https://manjubhagtani.github.io/portfolio-templates/Template2_AnnaPeterson/Template2AnnaPeterson.html" target="_blank" rel="noreferrer">Demo</a>
                            <button className="btn btn-primary generate">Generate</button>
                        </div>                       
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-6 p-4 thumbnail-div">
                        <img className="img-fluid border border-dark" src={Template4} alt="Template 1 Clarence Taylor"></img>
                        <div className="d-flex justify-content-center m-3">
                            <a className="btn btn-primary btn-sm mr-3 demo" href="https://manjubhagtani.github.io/portfolio-templates/Template4_KalvinDoe/Template4_KalvinDoe.html" target="_blank" rel="noreferrer">Demo</a>
                            <button className="btn btn-primary generate">Generate</button>
                        </div>                       
                    </div>
                    <div className="col-md-6 p-4 thumbnail-div">
                        <img className="img-fluid border border-dark" src={Template3} alt="Template 3 Mark Parker"></img>
                        <div className="d-flex justify-content-center m-3">
                            <a className="btn btn-primary btn-sm mr-3 demo" href="https://manjubhagtani.github.io/portfolio-templates/Template3_MarkParker/Template3MarkParker.html" target="_blank" rel="noreferrer">Demo</a>
                            <button className="btn btn-primary generate">Generate</button>
                        </div>                       
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}

export default HomePage;