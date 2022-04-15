import React, { Component } from 'react'
import Split from "react-split";
import Form from './Form';
import Code from './Code';
import he from "he";
import UIConstants from '../Constants/UIConstants';
class GeneratePortfolio extends Component {
    state = {
        selectedTemplate: parseInt(localStorage.getItem("TemplateID")),
        FormData: UIConstants.Templates[Math.floor(parseInt(localStorage.getItem("TemplateID"))/2)].find(template => template.TemplateID === parseInt(localStorage.getItem("TemplateID"))).FormData,
        FormDataDesc: UIConstants.Templates[Math.floor(parseInt(localStorage.getItem("TemplateID"))/2)].find(template => template.TemplateID === parseInt(localStorage.getItem("TemplateID"))).Desc,
        fileDownloadUrl: null,
    }

    download = () => {
        let output = he.decode(
        document.getElementsByClassName("codefile")[0].innerHTML
        );
        const blob = new Blob([output]);
        const fileDownloadUrl = URL.createObjectURL(blob);
        this.setState({ fileDownloadUrl: fileDownloadUrl }, () => {
        this.doFileDownload.click();
        URL.revokeObjectURL(fileDownloadUrl);
        this.setState({ fileDownloadUrl: "" });
        });
    };

    handleChange = e => {
        this.setState({
        FormData: {
            ...this.state.FormData,
            [e.target.name]: e.target.value
        },
        });
    };

    render() {
        return (
            <div className="container-fluid">
                <Split className="split">
                    <div className="p-3">
                        <Form
                            TemplateID={this.state.selectedTemplate}
                            FormData={{
                                FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                                ...this.state.FormData
                            }}
                            Desc={this.state.FormDataDesc}
                            onChange={this.handleChange}
                        />
                        <button
                            className="btn btn-success"
                            onClick={() => {
                            this.download();
                            }}
                            disabled={this.state.PreviewMode}
                            title="Go to the Code View to download."
                         >
                            Download
                        </button>
                        <a
                            className="d-none"
                            download={"portfolio.html"}
                            href={this.state.fileDownloadUrl}
                            ref={e => (this.doFileDownload = e)}
                        >
                            Download
                        </a>
                    </div>
                    <div className="p-3">
                        <Code
                            {...this.state.FormData}
                            FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
                            TemplateID={this.state.selectedTemplate}
                        />
                    </div>
                </Split>
            </div>
        )
    }
}

export default GeneratePortfolio