import React, { Component } from 'react'
import Header from './Bootstrap/Header';
import Code from './Code';
import Form from './Form';
class App extends Component {
  state={
    Dark: true,
    FormData: {
      FirstName:"xyz",
      LastName:"abc",
      Thubmnail:"",
      URL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.warmoven.in%2Fpikachu-photo-cake-2.html&psig=AOvVaw0mAt1oOLcy0krLwUkSgiSX&ust=1641834124052000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKD5hPKSpfUCFQAAAAAdAAAAABAD",
      Description:"Hello World!",
      Keywords:"abc, xyz, Software Engineer",
      Address:"Maharashtra, India",
      Phone:"+91 9999999999",
      Email:"xyzabcgmail.com",
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
