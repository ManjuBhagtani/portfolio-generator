import React, { Component } from 'react'
import Header from './Bootstrap/Header';
import Split from "react-split";
import Code from './Code';
import Form from './Form';
import he from 'he';
import Template2Code from './PortfolioTemplates/Template2AnnaPeterson/Template2Code';

class App extends Component {
  state={
    Dark: true,
    FormData: {
      FirstName:"",
      LastName:"",
      Thubmnail:"",
      URL:"",
      Description:"",
      Keywords:"",
      Address:"",
      Phone:"",
      Email:"",
      Socials: {
        Facebook: "xyz",
        WhatsApp: "xyz",
        Instagram: "xyz",
        Twitter: "xyz",
        LinkedIn: "xyz",
        GitHub: "xyz",
        StackOverflow: "xyz"
      },
    },
    fileDownloadUrl: null
  };

  toggleHeader=()=>{
    this.setState({
      Dark: !this.state.Dark,
    })
  };

  handleChange = (e) => {
    this.setState({
      FormData:{
        ...this.state.FormData,
        [e.target.name]: e.target.value
      }     
    })
  }

  download=(event)=>{
    let output = he.decode(document.getElementsByClassName("codefile")[0].innerHTML);
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState({fileDownloadUrl: fileDownloadUrl}, 
      ()=> {
        this.doFileDownload.click();
        URL.revokeObjectURL(fileDownloadUrl);
        this.setState({fileDownloadUrl: ""});
      });
  }

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className='Header'>
          <span>Portfolio Generator</span>
          <button 
            className="btn btn-sm btn-outline-primary rounded-circle" 
            onClick={this.toggleHeader}
          >
            <i 
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
          </button>
        </Header>
        <div className='container-fluid'>
          {/* <div className='row'> */}
            <Split
              className="split"
            >
            <div className="p-3" /*className='col-12 col-md-6'*/>
              <Form FormData={{
                FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                ...this.state.FormData
                }}
                onChange={this.handleChange}
              />
              <button 
                className="btn btn-success"
                onClick={()=>{this.download()}}>
                Download
              </button>
              <a 
                className="d-none"
                download={'portfolio.html'}
                href={this.state.fileDownloadUrl}
                ref={e=> this.doFileDownload = e}>
                Download
              </a>
            </div>
            <div className="p-3"/*className='col-12 col-md-6'*/>
              <Template2Code 
                {...this.state.FormData} 
                FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
              />
            </div>
            </Split>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default App;
