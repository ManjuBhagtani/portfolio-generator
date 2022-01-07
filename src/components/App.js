import React, { Component } from 'react'
import Header from './Bootstrap/Header';
import Code from './Code';
import Form from './Form';
class App extends Component {
  state={
    Dark: true,
    FormData: {
      FullName:"Value of FullName",
      Thubmnail:"Value of FullName",
      URL:"Value of FullName",
      Description:"Value of FullName",
      Keywords:"Value of FullName",
      FirstName:"Value of FullName",
      LastName:"Value of FullName",
      Address:"Value of FullName",
      Phone:"Value of FullName",
      Email:"Value of FullName"
    }
  };
  toggleHeader=()=>{
    this.setState({
      Dark: !this.state.Dark,
    })
  };
  
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
            <div className='col-12 col-sm-6'>
              <Form FormData={this.state.FormData}/>
            </div>
            <div className='col-12 col-sm-6'>
              <Code {...this.state.FormData}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
