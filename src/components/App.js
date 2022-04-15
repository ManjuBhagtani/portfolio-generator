import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Split from "react-split";
import Code from "./Code";
import Form from "./Form";
import he from "he";
import Preview from "./Preview";
import Navigation from "./Navigation/Navigation";

class App extends Component {
  state = {
    Dark: true,
    FormData: {
      FirstName: "",
      LastName: "",
      Thubmnail: "",
      URL: "",
      Description: "",
      Keywords: "",
      Address: "",
      Phone: "",
      Email: "",
      Colour: "#bd5e38",
      Socials: {
        Facebook: "xyz",
        WhatsApp: "xyz",
        Instagram: "xyz",
        Twitter: "xyz",
        LinkedIn: "xyz",
        GitHub: "xyz",
        StackOverflow: "xyz"
      }
    },
    fileDownloadUrl: null,
    PreviewMode: false
  };

  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };

  handleChange = e => {
    this.setState({
      FormData: {
        ...this.state.FormData,
        [e.target.name]: e.target.value
      },
      PreviewMode: false
    });
  };

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

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
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
        <Navigation />
      </div>
    );
  }
}

export default App;
