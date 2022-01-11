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
      Experience: [
        {
          Role: "Awesome Developer",
          Company: "Google",
          Desc: "Worked as an awesome developer at Google.",
          Start: "Jan 2020",
          End: "Dec 2020"
        },
        {
          Role: "Fantastic Developer",
          Company: "Microsoft",
          Desc: "Workeing as a fantastic developer at Microsoft.",
          Start: "Jan 2021",
          End: "Present"
        }
      ],
      Education: [
        {
          Degree: "MCA",
          Institute: "PQR",
          Desc: "Learnt DSA, DBMS, OS",
          Start: "Aug 2017",
          End: "Aug 2020"
        }
      ],
      Skills: {
        Tools: ["html5", "css3", "react"],
        Workflow: [
          "Mobile-First, Responsive Design",
          "Cross Browser Testing & Debugging",
          "Cross Functional Teams",
          "Agile Development & Scrum"
        ]
      },
      Interests: [
        "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.",
        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."
      ],
      Awards:[
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hackathon 2005",
      ]
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
            <div className='col-12 col-sm-6'>
              <Form FormData={{
                FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                ...this.state.FormData
                }}
                onChange={this.handleChange}
              />
            </div>
            <div className='col-12 col-sm-6'>
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
