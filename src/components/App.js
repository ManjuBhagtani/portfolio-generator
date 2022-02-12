import React, { Component } from 'react'
import Header from './Bootstrap/Header';
import Code from './Code';
import Form from './Form';
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
    }
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
          <div className='row'>
            <div className='col-12 col-md-6'>
              <Form FormData={{
                FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                ...this.state.FormData
                }}
                onChange={this.handleChange}
              />
            </div>
            <div className='col-12 col-md-6'>
              <Code 
                {...this.state.FormData} 
                FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
