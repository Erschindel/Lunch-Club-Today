import React from "react";
import "../App.css";
import MapWrapper from "./mapWrapper";

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      input: "",
      submit: []
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((oldState) => {
      submit: oldState.submit.push(this.state.input)
    })
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="form-styles">
          <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.value} placeholder="Enter location (i.e Chipotle, &pizza, etc.)"/>
            <div className="input-group-append">
              <button type="button" onClick={this.handleSubmit} className="btn btn-outline-secondary">Find</button>
            </div>
          </div>
        </form>
        <h1>{this.state.input}</h1>
        <MapWrapper
          submit={this.state.submit}
        />
      </div>
    )
  }


}

export default Search;
